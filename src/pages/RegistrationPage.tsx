import {
    Alert,
    Anchor,
    Button,
    Checkbox,
    Divider,
    Group,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicPageLayout } from "../layouts/PublicPageLayout";
import { TermsOfUseDialog } from "../components/legal/TermsOfUseDialog";
import { PrivacyPolicyDialog } from "../components/legal/PrivacyPolicyDialog";

type RegisterFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
// At least 8 chars, one upper, one lower, one digit, one special
const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

export function RegisterPage() {
    const [termsOpen, setTermsOpen] = useState(false);
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const navigate = useNavigate();

    const form = useForm<RegisterFormValues>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
        },
        validateInputOnBlur: true,
        transformValues: (values) => ({
            ...values,
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
            email: values.email.trim(),
        }),
        validate: {
            firstName: (value) => {
                if (!value.trim()) return "First name is required.";
                if (value.length > 100) return "First name must be at most 100 characters.";
                return null;
            },
            lastName: (value) => {
                if (!value.trim()) return "Last name is required.";
                if (value.length > 100) return "Last name must be at most 100 characters.";
                return null;
            },
            email: (value) => {
                if (!value.trim()) return "Email is required.";
                if (!EMAIL_REGEX.test(value)) return "Enter a valid email address.";
                return null;
            },
            password: (value) => {
                if (!value) return "Password is required.";
                if (!STRONG_PASSWORD_REGEX.test(value)) {
                    return "Use at least 8 characters with upper, lower, number, and symbol.";
                }
                return null;
            },
            confirmPassword: (value, values) => {
                if (!value) return "Please confirm your password.";
                if (value !== values.password) return "Passwords do not match.";
                return null;
            },
            acceptTerms: (value) => (value ? null : "You must agree to the terms to continue."),
        },
    });

    const handleSubmit = form.onSubmit((values) => {
        // TODO: call backend API to register user
        console.log("register form submit", values);
        navigate("/verify-email", {
            state: { email: values.email }, // optional: pass the user’s email
        });
    });

    return (
        <>
            <TermsOfUseDialog opened={termsOpen} onClose={() => setTermsOpen(false)} />
            <PrivacyPolicyDialog opened={privacyOpen} onClose={() => setPrivacyOpen(false)} />

            <PublicPageLayout
                title="Create your account"
                subtitle="Join Pravita Hub."
                description="Set up your account to access Pravita Hub."
            >
                <form onSubmit={handleSubmit} className="register-form">
                    <Stack gap="xl">
                        <Stack gap="md" className="register-form__section">
                            <Title order={4} className="register-form__section-title">
                                Account details
                            </Title>

                            {/* Name row */}
                            <div className="register-form__grid">
                                <TextInput
                                    withAsterisk
                                    label="First name"
                                    size="md"
                                    radius="md"
                                    autoComplete="given-name"
                                    {...form.getInputProps("firstName")}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Last name"
                                    size="md"
                                    radius="md"
                                    autoComplete="family-name"
                                    {...form.getInputProps("lastName")}
                                />
                            </div>

                            {/* Email + hint */}
                            <TextInput
                                withAsterisk
                                label="Email"
                                type="email"
                                size="md"
                                radius="md"
                                autoComplete="email"
                                {...form.getInputProps("email")}
                            />
                            <Alert variant="light" color="blue" radius="md" className="register-form__hint">
                                For organization or tenant accounts, use your organization email address.
                            </Alert>

                            {/* Passwords */}
                            <PasswordInput
                                withAsterisk
                                label="Password"
                                size="md"
                                radius="md"
                                autoComplete="new-password"
                                {...form.getInputProps("password")}
                            />
                            <Text size="xs" c="dimmed">
                                Strong passwords include upper and lower case letters, numbers, and symbols.
                            </Text>

                            <PasswordInput
                                withAsterisk
                                label="Confirm password"
                                size="md"
                                radius="md"
                                autoComplete="new-password"
                                {...form.getInputProps("confirmPassword")}
                            />

                            <Checkbox
                                mt="sm"
                                {...form.getInputProps("acceptTerms", { type: "checkbox" })}
                                label={
                                    <Text size="sm">
                                        I agree to the{" "}
                                        <Anchor
                                            size="sm"
                                            component="button"
                                            type="button"
                                            onClick={() => setTermsOpen(true)}
                                        >
                                            terms of use
                                        </Anchor>{" "}
                                        and{" "}
                                        <Anchor
                                            size="sm"
                                            component="button"
                                            type="button"
                                            onClick={() => setPrivacyOpen(true)}
                                        >
                                            privacy policy
                                        </Anchor>
                                        .
                                    </Text>
                                }
                            />
                        </Stack>

                        <Divider className="register-form__divider" />

                        <Group justify="space-between" align="center" className="register-form__actions">
                            <Text size="sm" c="dimmed">
                                Already have an account?{" "}
                                <Anchor component={Link} to="/login" size="sm">
                                    Sign in instead
                                </Anchor>
                            </Text>

                            <Button type="submit" size="md" className="register-form__submit">
                                Continue
                            </Button>
                        </Group>
                    </Stack>
                </form>
            </PublicPageLayout>
        </>
    );
}

export default RegisterPage;
