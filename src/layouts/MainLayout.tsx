import type React from "react";
import { MainHeaderMenu } from "../components/MainHeaderMenu.tsx";
import { UserProfileMenu } from "../components/UserProfileMenu.tsx";

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): React.JSX.Element {
    return (
        <div className="main-layout">
            {/* Top nav bar */}
            <header className="main-header">
                <div className="main-header-left">
                    <div className="main-header-logo" />
                    <div className="main-header-title">Pravita Hub</div>
                    <MainHeaderMenu />
                </div>

                {/* Right side stays the same */}
                <div className="main-header-right">
                    <UserProfileMenu
                        userName="Admin"
                        triggerClassName="main-header-menu-trigger main-header-profile-trigger"
                        // onProfileClick={() => navigate('/admin/profile')}
                        // onSignOutClick={handleSignOut}
                    />
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
