import type React from 'react';
import {Button} from '@mantine/core';
import {MainHeaderMenu} from '../components/MainHeaderMenu.tsx';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({children}: MainLayoutProps): React.JSX.Element {
    return (
        <div className="main-layout">
            {/* Top nav bar */}
            <header className="main-header">
                <div className="main-header-left">
                    <div className="main-header-logo"/>
                    <div className="main-header-title">Pravita Hub</div>
                    <MainHeaderMenu />
                </div>

                {/* Right side stays the same */}
                <div className="main-header-right">
                    <span>Admin</span>
                    <Button size="xs" variant="light">
                        Sign out
                    </Button>
                </div>
            </header>

            {/* Body: sidebar + main content */}
            <div className="main-body">
                <aside className="main-sidebar" aria-label="Primary navigation">
                    <div className="main-sidebar-section-label">Navigation</div>
                </aside>

                <main className="main-main">{children}</main>
            </div>
        </div>
    );
}
