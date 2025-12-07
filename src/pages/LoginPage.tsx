// LoginPage.tsx
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Anchor, Button, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { login, LoginError } from "../services/authService.ts";
import type { AuthenticationDto } from "../api/hub-api/__openapi-generated";
import { FormBanner } from "../components/FormBanner.tsx";
import { localStorageTokenStorage } from "../http";

export interface LoginFormValues {
    email: string;
    password: string;
}

export const LoginPage = (): React.JSX.Element => {
    const navigate = useNavigate();

    const [bannerError, setBannerError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const form = useForm<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
        },
        validateInputOnBlur: true,
        validate: {
            email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : "Please enter a valid email address."),
            password: (value) => (value.trim().length >= 6 ? null : "Your password must be at least 6 characters."),
        },
    });

    useEffect(() => {
        const token = localStorageTokenStorage.getAccessToken();

        if (token) {
            navigate("/dashboard", { replace: true });
        }
    }, [navigate]);

    // Auto-focus first field with an error (client or server)
    useEffect(() => {
        if (form.errors.email) {
            emailRef.current?.focus();
        } else if (form.errors.password) {
            passwordRef.current?.focus();
        }
    }, [form.errors.email, form.errors.password]);

    const handleSubmit = async (values: LoginFormValues) => {
        form.clearErrors();
        setBannerError(null);
        setIsSubmitting(true);

        const accountCredentials: AuthenticationDto = {
            email: values.email,
            password: values.password,
        };

        try {
            await login(accountCredentials);
            navigate("/dashboard");
        } catch (err) {
            if (err instanceof LoginError) {
                if (err.code === "invalid-username" || err.code === "invalid-password") {
                    setBannerError("Invalid credentials. Please check your details and try again.");
                }

                if (err.code === "invalid-username") {
                    form.setFieldError("email", "We couldn’t find an account with this email.");
                } else if (err.code === "invalid-password") {
                    form.setFieldError("password", "The password you entered is incorrect. Please try again.");
                } else {
                    setBannerError("We couldn’t sign you in. Please check your details and try again.");
                }
            } else {
                setBannerError("Something went wrong while signing you in. Please try again later.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthLayout>
            <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
                <Stack gap="md">
                    {bannerError && <FormBanner message={bannerError} title="Sign-in failed" color="red" />}

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

                    <Button type="submit" fullWidth className="auth-submit-button" loading={isSubmitting}>
                        Sign in
                    </Button>

                    <Stack gap="xs" mt="md" align="center">
                        <Text size="sm" c="dimmed">
                            Don&apos;t have an account?{" "}
                            <Anchor component={Link} to="/register" size="sm">
                                Sign up
                            </Anchor>
                        </Text>
                    </Stack>
                </Stack>
            </form>
        </AuthLayout>
    );
};
