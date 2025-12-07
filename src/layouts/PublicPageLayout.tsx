import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Anchor, Container, Group, Stack, Text, Title } from "@mantine/core";

export interface PublicPageLayoutProps {
    title: string;
    subtitle?: string;
    description?: string;
    children: ReactNode;
}

export function PublicPageLayout({ title, subtitle, description, children }: PublicPageLayoutProps) {
    const year: number = new Date().getFullYear();

    return (<div className="public-page">
            <header className="public-page__header">
                <Container size="lg" className="public-page__header-inner">
                    <div className="public-page__brand">
                        <span className="public-page__brand-mark" />
                        <span className="public-page__brand-text">Pravita Hub</span>
                    </div>
                </Container>
            </header>

            <main className="public-page__main">
                <Container size="lg" className="public-page__main-inner">
                    <Stack gap="md" className="public-page__content">
                        <div>
                            <Title order={1}>{title}</Title>
                            {subtitle && (<Text size="sm" c="dimmed" mt="xs">
                                    {subtitle}
                                </Text>)}
                            {description && (<Text size="sm" mt="md">
                                    {description}
                                </Text>)}
                        </div>

                        <div className="public-page__card">
                            {children}
                        </div>
                    </Stack>
                </Container>
            </main>

            <footer className="public-page__footer">
                <Container size="lg" className="public-page__footer-inner">
                    <Text size="xs" c="dimmed">
                        © {year} Pravita. All rights reserved.
                    </Text>

                    <Group gap="xs">
                        {/* Optional: add privacy/terms later */}
                    </Group>
                </Container>
            </footer>
        </div>);
}
