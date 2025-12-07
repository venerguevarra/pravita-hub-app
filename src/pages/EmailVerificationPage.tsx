// src/pages/EmailVerificationPage.tsx
import type React from "react";
import { Anchor, Button, Group, PinInput, Stack, Text, Center } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { AxiosError, isAxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { IconCircleCheck } from "@tabler/icons-react";
import { PublicPageLayout } from "../layouts/PublicPageLayout";
import { useCountdown } from "../hooks/useCountdown";
import { maskEmail } from "../util/maskEmail";
import UserRegistrationService from "../services/userRegistrationService";
import type { ApiErrorResponse } from "../api/hub-api/__openapi-generated";

const CODE_LENGTH: number = 6;
const RESEND_INTERVAL_SECONDS: number = 30;
const DEFAULT_ERROR_MESSAGE: string = "Invalid or expired code. Try again or resend.";
const INVALID_CODE_MESSAGE: string = "Invalid verification code. Check and try again.";
const EXPIRED_CODE_MESSAGE: string = "This code has expired. Request a new code.";

type LocationState = {
    email?: string;
    shouldResendOnLoad?: boolean;
};

function sanitizeCode(input: string): string {
    return input
        .replace(/[^a-zA-Z0-9]/g, "")
        .toUpperCase()
        .slice(0, CODE_LENGTH);
}

export function EmailVerificationPage(): React.JSX.Element {
    const userRegistrationService = UserRegistrationService.getInstance();

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState | null;
    const email: string = state?.email ?? "your email";
    const shouldResendOnLoad: boolean = state?.shouldResendOnLoad === true;

    const [code, setCode] = useState<string>("");
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>(DEFAULT_ERROR_MESSAGE);
    const [isResending, setIsResending] = useState<boolean>(false);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const {
        seconds: resendSeconds,
        restart: startResendTimer,
        complete: completeResendTimer,
    } = useCountdown(RESEND_INTERVAL_SECONDS);

    const isCodeComplete: boolean = code.length === CODE_LENGTH;

    const hasResentOnLoadRef = useRef<boolean>(false);

    useEffect((): void => {
        if (
            shouldResendOnLoad &&
            email !== "your email" &&
            !hasResentOnLoadRef.current
        ) {
            hasResentOnLoadRef.current = true;
            setIsResending(true);
            setHasError(false);

            void userRegistrationService
                .resendActivationCode(email)
                .finally((): void => {
                    setIsResending(false);
                });
        }

        startResendTimer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const resolveErrorMessage = (error: AxiosError<ApiErrorResponse>): string => {
        const statusCode = error.response?.status;
        const data = error.response?.data;

        if (statusCode === 400) {
            return INVALID_CODE_MESSAGE;
        }

        if (statusCode === 410) {
            return EXPIRED_CODE_MESSAGE;
        }

        if (data?.errors instanceof Set) {
            const first = data.errors.values().next().value as
                | { message?: string }
                | undefined;
            if (first?.message) {
                return first.message;
            }
        }

        if (data?.status) {
            return data.status;
        }

        return DEFAULT_ERROR_MESSAGE;
    };

    const handleSubmit = async (): Promise<void> => {
        if (!isCodeComplete || isVerifying || isVerified) {
            return;
        }

        setHasError(false);
        setIsVerifying(true);

        try {
            await userRegistrationService.verifyEmail(email, code);
            completeResendTimer();
            setIsVerified(true);
        } catch (error: unknown) {
            completeResendTimer();

            if (isAxiosError<ApiErrorResponse>(error)) {
                const axiosError = error as AxiosError<ApiErrorResponse>;
                const message = resolveErrorMessage(axiosError);
                setErrorMessage(message);
            } else {
                setErrorMessage(DEFAULT_ERROR_MESSAGE);
            }

            setHasError(true);
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResend = async (): Promise<void> => {
        if (resendSeconds > 0 || isResending || isVerified) {
            return;
        }

        setIsResending(true);
        setHasError(false);

        try {
            await userRegistrationService.resendActivationCode(email);
            startResendTimer();
        } finally {
            setIsResending(false);
        }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>): void => {
        if (isVerified) {
            return;
        }

        const pasted: string = event.clipboardData.getData("text");
        const sanitized: string = sanitizeCode(pasted);

        if (sanitized.length > 0) {
            event.preventDefault();
            setCode(sanitized);
            if (hasError) setHasError(false);
        }
    };

    const handleChange = (value: string): void => {
        if (isVerified) {
            return;
        }

        const sanitized: string = sanitizeCode(value);
        setCode(sanitized);
        if (hasError) setHasError(false);
    };

    const layoutTitle = isVerified ? "Email verified" : "Verify your email";
    const layoutSubtitle = isVerified ? "Your account is now active" : "Check your inbox";
    const layoutDescription = isVerified
        ? "You can now sign in and start using Pravita Hub."
        : `We've sent a verification code to ${maskEmail(email)}.`;

    return (
        <PublicPageLayout
            title={layoutTitle}
            subtitle={layoutSubtitle}
            description={layoutDescription}
        >
            <div className="verify-page">
                {isVerified ? (
                    <Center className="verify-success-page">
                        <Stack gap="lg" align="center" className="verify-success-page__content">
                            <IconCircleCheck size={72} color="#22c55e" stroke={1.5} />

                            <Text size="md" ta="center">
                                Your email has been successfully verified.
                            </Text>

                            <Button
                                size="md"
                                w={200}
                                onClick={(): void => {
                                    navigate("/login", { replace: true });
                                }}
                            >
                                Continue to sign in
                            </Button>
                        </Stack>
                    </Center>
                ) : (
                    <Stack gap="lg" className="verify-page__content">
                        <Text size="sm" c="dimmed">
                            Enter the 6-character code we sent to your email.
                        </Text>

                        <Group justify="flex-start" onPaste={handlePaste}>
                            <PinInput
                                length={CODE_LENGTH}
                                type="alphanumeric"
                                size="lg"
                                radius="md"
                                value={code}
                                onChange={handleChange}
                                disabled={isVerifying}
                            />
                        </Group>

                        <div className="verify-page__error-row">
                            <Text
                                size="xs"
                                className={
                                    hasError
                                        ? "verify-page__error-text verify-page__error-text--visible"
                                        : "verify-page__error-text"
                                }
                            >
                                {errorMessage}
                            </Text>
                        </div>

                        <Text size="sm" c="dimmed">
                            Didn’t receive the code{" "}
                            {resendSeconds <= 0 ? (
                                <Anchor
                                    component="button"
                                    type="button"
                                    size="sm"
                                    onClick={handleResend}
                                >
                                    {isResending ? "Resending…" : "Resend"}
                                </Anchor>
                            ) : (
                                <Text component="span" c="dimmed" size="sm">
                                    Resend available in {resendSeconds}s
                                </Text>
                            )}
                        </Text>

                        <Button
                            size="md"
                            disabled={!isCodeComplete || isVerifying}
                            onClick={handleSubmit}
                            className="verify-page__submit"
                        >
                            {isVerifying ? "Verifying…" : "Continue"}
                        </Button>
                    </Stack>
                )}
            </div>
        </PublicPageLayout>
    );
}

export default EmailVerificationPage;
