import { Anchor, Button, Divider, Group, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { PublicPageLayout } from "../layouts/PublicPageLayout";

export function RegisterPage() {
    return (
        <PublicPageLayout
            title="Create your account"
            subtitle="Join Pravita Hub"
            description="Set up your account to access Pravita Hub. Use your work email if you are joining an existing organization."
        >
            <Stack gap="xl">
                <Text size="sm" c="dimmed">
                    We’ll ask for your basic information now. You can complete your profile and organization details
                    after you sign in.
                </Text>

                <Stack gap="sm">
                    <Title order={4}>Account details</Title>
                    <Text size="sm" c="dimmed">
                        This will be used to sign in to Pravita Hub.
                    </Text>

                    <div className="register-page__form-placeholder">
                        <Text size="sm" c="dimmed">
                            Registration form fields go here (email, password, confirm password, name, etc.). We will
                            implement this in the next step.
                        </Text>
                    </div>
                </Stack>

                <Divider />

                <Group justify="space-between" mt="md">
                    <Text size="sm" c="dimmed">
                        Already have an account?{" "}
                        <Anchor component={Link} to="/login" size="sm">
                            Sign in instead
                        </Anchor>
                    </Text>

                    <Button type="button" disabled>
                        Continue
                    </Button>
                </Group>
            </Stack>
        </PublicPageLayout>
    );
}

export default RegisterPage;
