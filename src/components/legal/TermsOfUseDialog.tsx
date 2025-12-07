// src/components/legal/TermsOfUseDialog.tsx
import type React from "react";
import { Modal, ScrollArea, Stack, Text, Title, List } from "@mantine/core";

export interface TermsOfUseDialogProps {
    opened: boolean;
    onClose: () => void;
}

export function TermsOfUseDialog({ opened, onClose }: TermsOfUseDialogProps): React.JSX.Element {
    return (
        <Modal opened={opened} onClose={onClose} title="Terms of use" size="lg" centered className="legal-dialog-modal">
            <ScrollArea h={380} type="auto">
                <Stack gap="md" className="legal-dialog">
                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            1. Overview
                        </Title>
                        <Text size="sm">
                            These Terms of Use (&quot;Terms&quot;) govern your access to and use of Pravita Hub (the
                            &quot;Service&quot;). By creating an account or using the Service, you agree to be bound by
                            these Terms.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            2. Eligibility and accounts
                        </Title>
                        <Text size="sm">
                            You are responsible for the accuracy of the information you provide and for keeping your
                            account credentials secure. You must notify your organization or Pravita promptly if you
                            suspect unauthorized use of your account.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            3. Acceptable use
                        </Title>
                        <Text size="sm" mb="xs">
                            When using the Service, you agree not to:
                        </Text>
                        <List size="sm" className="legal-list" spacing={4} withPadding>
                            <List.Item>
                                Violate any applicable laws, regulations, or professional obligations.
                            </List.Item>
                            <List.Item>Attempt to gain unauthorized access to systems, data, or accounts.</List.Item>
                            <List.Item>
                                Introduce malware, automated scraping, or activities that could disrupt or degrade the
                                Service.
                            </List.Item>
                            <List.Item>
                                Misuse any patient or organizational data made available via the Service.
                            </List.Item>
                        </List>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            4. Data and privacy
                        </Title>
                        <Text size="sm">
                            Your use of the Service is also governed by our Privacy Policy, which describes how
                            information is collected, used, and shared. By using the Service, you consent to those
                            practices.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            5. Service changes and availability
                        </Title>
                        <Text size="sm">
                            We may update, suspend, or discontinue parts of the Service from time to time. Where
                            feasible, we will notify affected organizations in advance of material changes.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            6. Disclaimers and limitation of liability
                        </Title>
                        <Text size="sm">
                            The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the
                            fullest extent permitted by law, we disclaim all warranties and limit our liability for
                            indirect or consequential damages arising from your use of the Service.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            7. Termination
                        </Title>
                        <Text size="sm">
                            We may suspend or terminate access to the Service if you breach these Terms, if required by
                            law, or if your organization ends its relationship with Pravita. Upon termination, certain
                            provisions that by their nature should survive (such as ownership, limitations of liability,
                            and dispute terms) will continue to apply.
                        </Text>
                    </section>

                    <section className="legal-section">
                        <Title order={5} className="legal-section__title">
                            8. Contact
                        </Title>
                        <Text size="sm">
                            For questions about these Terms, please contact your administrator or the Pravita support
                            team.
                        </Text>
                    </section>
                </Stack>
            </ScrollArea>
        </Modal>
    );
}
