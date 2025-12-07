import type React from "react";
import { Anchor, Button, Group, PinInput, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PublicPageLayout } from "../layouts/PublicPageLayout";
import { useCountdown } from "../hooks/useCountdown";

const CODE_LENGTH = 6;
const RESEND_INTERVAL_SECONDS = 30;

export function VerifyEmailPage(): React.JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const email = (location.state as { email?: string } | undefined)?.email ?? "your email";

    const [code, setCode] = useState("");
    const [hasError, setHasError] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

    const {
        seconds: resendSeconds,
        restart: startResendTimer,
        complete: completeResendTimer,
    } = useCountdown(RESEND_INTERVAL_SECONDS);

    const isCodeComplete = code.length === CODE_LENGTH;

    // Start timer on mount
    useEffect(() => {
        startResendTimer();
    }, [startResendTimer]);

    const handleSubmit = async () => {
        if (!isCodeComplete || isVerifying) return;

        setHasError(false);
        setIsVerifying(true);

        try {
            // TODO: call your backend to verify the code, e.g.:
            // await api.auth.verifyEmail({ email, code });

            // For now, simulate invalid code
            throw new Error("INVALID_CODE");
        } catch (_) {
            // Enable resend immediately and show error
            completeResendTimer();
            setHasError(true);
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResend = async () => {
        if (resendSeconds > 0 || isResending) return;

        setIsResending(true);
        setHasError(false);

        try {
            // TODO: trigger resend API call, e.g.:
            // await api.auth.resendVerification({ email });

            startResendTimer();
        } finally {
            setIsResending(false);
        }
    };

    return (
        <PublicPageLayout
            title="Verify your email"
            subtitle="Check your inbox"
            description={`We've sent a verification code to ${email}.`}
        >
            <div className="verify-page">
                <Stack gap="lg" className="verify-page__content">
                    <Text size="sm" c="dimmed">
                        Enter the 6-digit code we sent to your email.
                    </Text>

                    <Group justify="flex-start">
                        <PinInput
                            length={CODE_LENGTH}
                            type="number"
                            size="lg"
                            radius="md"
                            value={code}
                            onChange={(value) => {
                                setCode(value);
                                if (hasError) setHasError(false);
                            }}
                            disabled={isVerifying}
                        />
                    </Group>

                    {hasError && (
                        <div className="verify-page__error-row">
                            <Text size="xs" className={"verify-page__error-text verify-page__error-text--visible"}>
                                Invalid or expired code. Try again or resend.
                            </Text>
                        </div>
                    )}

                    <Text size="sm" c="dimmed">
                        Didn’t receive the code?{" "}
                        {resendSeconds === 0 ? (
                            <Anchor component="button" type="button" size="sm" onClick={handleResend}>
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
            </div>
        </PublicPageLayout>
    );
}

export default VerifyEmailPage;
