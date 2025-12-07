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
import { AxiosError, isAxiosError } from "axios";
import { PublicPageLayout } from "../layouts/PublicPageLayout";
import { TermsOfUseDialog } from "../components/legal/TermsOfUseDialog";
import { PrivacyPolicyDialog } from "../components/legal/PrivacyPolicyDialog";
import UserRegistrationService from "../services/userRegistrationService";
import { Banner } from "../components/Banner.tsx";

type RegisterFormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};

type ProblemDetails = {
    title?: string;
    detail?: string;
    status?: number;
};

const EMAIL_REGEX: RegExp = /^\S+@\S+\.\S+$/;
const STRONG_PASSWORD_REGEX: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
const DEFAULT_SUBMIT_ERROR: string = "We couldn’t create your account. Please try again in a moment.";
const DUPLICATE_EMAIL_ERROR: string = "An account with this email already exists. Try signing in instead.";

export function RegistrationPage(): React.JSX.Element {
    const [termsOpen, setTermsOpen] = useState<boolean>(false);
    const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const navigate = useNavigate();
    const registrationService = UserRegistrationService.getInstance();

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
            firstName: (value: string): string | null => {
                if (!value.trim()) return "First name is required.";
                if (value.length > 100) return "First name must be at most 100 characters.";
                return null;
            },
            lastName: (value: string): string | null => {
                if (!value.trim()) return "Last name is required.";
                if (value.length > 100) return "Last name must be at most 100 characters.";
                return null;
            },
            email: (value: string): string | null => {
                if (!value.trim()) return "Email is required.";
                if (!EMAIL_REGEX.test(value)) return "Enter a valid email address.";
                return null;
            },
            password: (value: string): string | null => {
                if (!value) return "Password is required.";
                if (!STRONG_PASSWORD_REGEX.test(value)) {
                    return "Use at least 8 characters with upper, lower, number, and symbol.";
                }
                return null;
            },
            confirmPassword: (value: string, values: RegisterFormValues): string | null => {
                if (!value) return "Please confirm your password.";
                if (value !== values.password) return "Passwords do not match.";
                return null;
            },
            acceptTerms: (value: boolean): string | null => (value ? null : "You must agree to the terms to continue."),
        },
    });

    const resolveSubmitErrorMessage = (axiosError: AxiosError<ProblemDetails>): string => {
        const status = axiosError.response?.status;

        if (status === 409) {
            return DUPLICATE_EMAIL_ERROR;
        }

        return DEFAULT_SUBMIT_ERROR;
    };

    const handleSubmit = form.onSubmit(async (values: RegisterFormValues): Promise<void> => {
        setSubmitError(null);
        setIsSubmitting(true);

        try {
            await registrationService.registerUser({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                rawPassword: values.password,
            });

            navigate("/verify-email", {
                state: { email: values.email },
            });
        } catch (error: unknown) {
            let message: string = DEFAULT_SUBMIT_ERROR;

            if (isAxiosError<ProblemDetails>(error)) {
                const axiosError = error as AxiosError<ProblemDetails>;
                message = resolveSubmitErrorMessage(axiosError);
            }

            setSubmitError(message);
        } finally {
            setIsSubmitting(false);
        }
    });

    return (
        <>
            <TermsOfUseDialog opened={termsOpen} onClose={(): void => setTermsOpen(false)} />
            <PrivacyPolicyDialog opened={privacyOpen} onClose={(): void => setPrivacyOpen(false)} />

            <PublicPageLayout
                title="Create your account"
                subtitle="Join Pravita Hub."
                description="Set up your account to access Pravita Hub."
            >
                <form onSubmit={handleSubmit} className="register-form">
                    <Stack gap="xl">
                        {submitError && (
                            <Alert variant="light" color="red" radius="md" className="register-form__submit-error">
                                {submitError}
                            </Alert>
                        )}

                        <Stack gap="md" className="register-form__section">
                            <Title order={4} className="register-form__section-title">
                                Account details
                            </Title>

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

                            <TextInput
                                withAsterisk
                                label="Email"
                                type="email"
                                size="md"
                                radius="md"
                                autoComplete="email"
                                {...form.getInputProps("email")}
                            />

                            <Banner variant="info" message="For organization accounts, use your organization email address." />

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
                                {...form.getInputProps("acceptTerms", {
                                    type: "checkbox",
                                })}
                                label={
                                    <Text size="sm">
                                        I agree to the{" "}
                                        <Anchor
                                            size="sm"
                                            component="button"
                                            type="button"
                                            onClick={(): void => setTermsOpen(true)}
                                        >
                                            terms of use
                                        </Anchor>{" "}
                                        and{" "}
                                        <Anchor
                                            size="sm"
                                            component="button"
                                            type="button"
                                            onClick={(): void => setPrivacyOpen(true)}
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

                            <Button type="submit" size="md" className="register-form__submit" disabled={isSubmitting}>
                                {isSubmitting ? "Creating account…" : "Continue"}
                            </Button>
                        </Group>
                    </Stack>
                </form>
            </PublicPageLayout>
        </>
    );
}

export default RegistrationPage;
