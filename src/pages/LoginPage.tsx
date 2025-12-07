// src/pages/LoginPage.tsx
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Anchor, Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import {
    INVALID_PASSWORD_CODE,
    INVALID_USERNAME_CODE,
    login,
    LoginError,
    USER_ACCOUNT_INACTIVE,
} from "../services/authService";
import type { AuthenticationDto } from "../api/hub-api/__openapi-generated";
import { Banner } from "../components/Banner";
import { localStorageTokenStorage } from "../http";

export interface LoginFormValues {
    email: string;
    password: string;
}

const EMAIL_REGEX: RegExp = /^\S+@\S+\.\S+$/;
const MIN_PASSWORD_LENGTH = 6;

// Messages
const MESSAGE_INVALID_EMAIL = "Please enter a valid email address.";
const MESSAGE_PASSWORD_TOO_SHORT = "Your password must be at least 6 characters.";

const MESSAGE_INVALID_CREDENTIALS =
    "Invalid credentials. Please check your details and try again.";
const MESSAGE_INVALID_USERNAME = "We couldn’t find an account with this email.";
const MESSAGE_INVALID_PASSWORD = "The password you entered is incorrect. Please try again.";
const MESSAGE_GENERIC_LOGIN_ERROR =
    "We couldn’t sign you in. Please check your details and try again.";
const MESSAGE_UNEXPECTED_LOGIN_ERROR =
    "Something went wrong while signing you in. Please try again later.";
const MESSAGE_INACTIVE_ACCOUNT =
    "This account is not active yet. Verify your email to continue.";

// Banner titles
const TITLE_SIGN_IN_FAILED = "Sign-in failed";
const TITLE_ACTIVATION_REQUIRED = "Activation required";

// CTA text
const CTA_VERIFY_EMAIL = "Verify this email";
const CTA_SIGN_UP = "Sign up";
const TEXT_NO_ACCOUNT = "Don't have an account?";

export const LoginPage = (): React.JSX.Element => {
    const navigate = useNavigate();

    const [bannerError, setBannerError] = useState<string | null>(null);
    const [inactiveEmail, setInactiveEmail] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const form = useForm<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validateInputOnBlur: true,
        validate: {
            email: (value: string): string | null =>
                EMAIL_REGEX.test(value) ? null : MESSAGE_INVALID_EMAIL,
            password: (value: string): string | null =>
                value.trim().length >= MIN_PASSWORD_LENGTH
                    ? null
                    : MESSAGE_PASSWORD_TOO_SHORT,
        },
    });

    const hasFormErrors: boolean = Object.keys(form.errors).length > 0;

    useEffect((): void => {
        const token: string | null = localStorageTokenStorage.getAccessToken();

        if (token) {
            navigate("/dashboard", { replace: true });
        }
    }, [navigate]);

    useEffect((): void => {
        if (form.errors.email) {
            emailRef.current?.focus();
        } else if (form.errors.password) {
            passwordRef.current?.focus();
        }
    }, [form.errors.email, form.errors.password]);

    // Hide activation banner if the form has any validation errors
    useEffect((): void => {
        const hasErrors: boolean = Object.keys(form.errors).length > 0;
        if (hasErrors && inactiveEmail) {
            setInactiveEmail(null);
        }
    }, [form.errors, inactiveEmail]);

    const handleSubmit = async (values: LoginFormValues): Promise<void> => {
        form.clearErrors();
        setBannerError(null);
        setInactiveEmail(null);
        setIsSubmitting(true);

        const accountCredentials: AuthenticationDto = {
            email: values.email,
            password: values.password,
        };

        try {
            await login(accountCredentials);
            navigate("/dashboard");
        } catch (err: unknown) {
            if (err instanceof LoginError) {
                const code: string | undefined = err.code;

                if (code === USER_ACCOUNT_INACTIVE) {
                    setInactiveEmail(values.email);
                    return;
                }

                if (code === INVALID_USERNAME_CODE || code === INVALID_PASSWORD_CODE) {
                    setBannerError(MESSAGE_INVALID_CREDENTIALS);
                }

                if (code === INVALID_USERNAME_CODE) {
                    form.setFieldError("email", MESSAGE_INVALID_USERNAME);
                } else if (code === INVALID_PASSWORD_CODE) {
                    form.setFieldError("password", MESSAGE_INVALID_PASSWORD);
                } else {
                    setBannerError(MESSAGE_GENERIC_LOGIN_ERROR);
                }
            } else {
                setBannerError(MESSAGE_UNEXPECTED_LOGIN_ERROR);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const showErrorBanner: boolean = bannerError !== null && inactiveEmail === null;
    const showActivationBanner: boolean =
        inactiveEmail !== null && !hasFormErrors && bannerError === null;

    return (
        <AuthLayout>
            <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
                <Stack gap="md">
                    {showErrorBanner && (
                        <Banner
                            variant="error"
                            title={TITLE_SIGN_IN_FAILED}
                            message={bannerError as string}
                        />
                    )}

                    {showActivationBanner && inactiveEmail && (
                        <Banner
                            variant="info"
                            title={TITLE_ACTIVATION_REQUIRED}
                            message={
                                <>
                                    {MESSAGE_INACTIVE_ACCOUNT}{" "}
                                    <Anchor
                                        component={Link}
                                        to="/verify-email"
                                        state={{
                                            email: inactiveEmail,
                                            shouldResendOnLoad: true,
                                        }}
                                        size="sm"
                                    >
                                        {CTA_VERIFY_EMAIL}
                                    </Anchor>
                                    .
                                </>
                            }
                        />
                    )}

                    <TextInput
                        label="Email"
                        withAsterisk
                        type="email"
                        ref={emailRef}
                        {...form.getInputProps("email")}
                    />

                    <PasswordInput
                        label="Password"
                        withAsterisk
                        ref={passwordRef}
                        {...form.getInputProps("password")}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        className="auth-submit-button"
                        loading={isSubmitting}
                    >
                        Sign in
                    </Button>

                    <Stack gap="xs" mt="md" align="center">
                        <Text size="sm" c="dimmed">
                            {TEXT_NO_ACCOUNT}{" "}
                            <Anchor component={Link} to="/register" size="sm">
                                {CTA_SIGN_UP}
                            </Anchor>
                        </Text>
                    </Stack>
                </Stack>
            </form>
        </AuthLayout>
    );
};
