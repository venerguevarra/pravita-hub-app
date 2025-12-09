import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Burger, Text } from "@mantine/core";
import { MainHeaderMenu } from "../components/MainHeaderMenu";
import { UserProfileMenu } from "../components/UserProfileMenu";
import { MainDrawer } from "../components/MainDrawer.tsx";
import UserService from "../services/userService.ts";

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): React.JSX.Element {
    const year: number = new Date().getFullYear();
    const navigate = useNavigate();
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="main-layout">
            {/* Top nav bar */}
            <header className="main-header">
                <div className="main-header-left">
                    <Burger
                        opened={navOpen}
                        onClick={() => setNavOpen((o) => !o)}
                        size="sm"
                        className="main-header-burger"
                        aria-label="Toggle navigation"
                    />

                    <div className="main-header-logo" />
                    <div className="main-header-title">Pravita Hub</div>
                    <MainHeaderMenu />
                </div>

                <div className="main-header-right">
                    <UserProfileMenu
                        userName="Admin"
                        triggerClassName="main-header-menu-trigger main-header-profile-trigger"
                        onSignOutClick={() => navigate("/login")}
                    />
                </div>
            </header>

            {/* Navigation drawer */}
            <MainDrawer opened={navOpen} onClose={() => setNavOpen(false)} />

            {/* Body: main content */}
            <div className="main-body">
                <main className="main-main">{children}</main>
            </div>

            {/* Footer */}
            <footer className="main-footer">
                <div className="main-footer-inner">
                    <Text size="xs" c="dimmed">
                        © {year} Pravita. All rights reserved.
                    </Text>
                </div>
            </footer>
        </div>
    );
}
