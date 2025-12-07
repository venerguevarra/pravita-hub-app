// src/components/legal/PrivacyPolicyDialog.tsx
import type React from "react";
import { Modal, ScrollArea, Stack, Text, Title, List } from "@mantine/core";

export interface PrivacyPolicyDialogProps {
    opened: boolean;
    onClose: () => void;
}

export function PrivacyPolicyDialog({ opened, onClose }: PrivacyPolicyDialogProps): React.JSX.Element {
    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Privacy policy"
            size="lg"
            centered
            className="legal-dialog-modal"
        >
            <ScrollArea h={380} type="auto">
                <Stack gap="md" className="legal-dialog">
                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            1. Information we collect
                        </Title>
                        <Text size="sm" mb="xs">
                            Depending on how your organization uses Pravita Hub, we may process:
                        </Text>
                        <List size="sm" className="legal-list" spacing={4} withPadding>
                            <List.Item>
                                <strong>Account details</strong> such as name, email address, and role.
                            </List.Item>
                            <List.Item>
                                <strong>Usage data</strong> such as log-in times, feature usage, and device information.
                            </List.Item>
                            <List.Item>
                                <strong>Organization data</strong> provided or managed by your organization in the
                                course of using the Service.
                            </List.Item>
                        </List>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            2. How we use information
                        </Title>
                        <List size="sm" className="legal-list" spacing={4} withPadding>
                            <List.Item>To provide and maintain the Service.</List.Item>
                            <List.Item>To secure the Service and prevent misuse.</List.Item>
                            <List.Item>
                                To support your organization in configuring and monitoring the Service.
                            </List.Item>
                            <List.Item>
                                To improve the Service based on aggregated or anonymized usage patterns.
                            </List.Item>
                        </List>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            3. Sharing and disclosure
                        </Title>
                        <Text size="sm">
                            We may share information with service providers acting on our behalf (such as hosting,
                            email, or analytics providers) and with your organization&apos;s administrators. We do not
                            sell personal data to third parties.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            4. Data retention
                        </Title>
                        <Text size="sm">
                            We retain information for as long as necessary to provide the Service to your organization
                            and to meet legal or contractual requirements. Retention periods may be defined in
                            agreements with your organization.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            5. Security
                        </Title>
                        <Text size="sm">
                            We use reasonable technical and organizational measures to protect information within the
                            Service. No system can be completely secure, and your organization also plays a role in
                            safeguarding access to accounts and devices.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            6. Your choices and rights
                        </Title>
                        <Text size="sm" mb="xs">
                            Depending on your location and your organization&apos;s policies, you may have rights to:
                        </Text>
                        <List size="sm" className="legal-list" spacing={4} withPadding>
                            <List.Item>Access or correct certain account information.</List.Item>
                            <List.Item>Request deletion of certain data.</List.Item>
                            <List.Item>Object to or restrict certain types of processing.</List.Item>
                        </List>
                        <Text size="sm" mt="xs">
                            Many requests should be directed to your organization&apos;s administrator, who manages your
                            account within Pravita Hub.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            7. Contact
                        </Title>
                        <Text size="sm">
                            For questions about this policy, please contact your organization or the Pravita support
                            team.
                        </Text>
                    </section>
                </Stack>
            </ScrollArea>
        </Modal>
    );
}
