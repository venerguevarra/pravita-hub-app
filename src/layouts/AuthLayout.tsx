import type React from 'react';

type AuthLayoutProps = {
    children: React.ReactNode;
};

export function AuthLayout({children}: AuthLayoutProps): React.JSX.Element {
    return (
        <div className="auth-layout">
            {/* Left visual / marketing panel */}
            <section className="auth-panel--visual">
                <div className="auth-panel-visual-inner">
                    {/* <h1 className="auth-panel-visual-title">Pravita Care</h1>
          <p className="auth-panel-visual-text">
            Securely manage patient records, appointments, and clinical workflows
            from a single, intuitive dashboard.
          </p> */}
                    {/* <p className="auth-panel-visual-note">
            Built for clinics, hospitals, and multi-tenant healthcare organizations.
          </p> */}
                </div>
            </section>

            {/* Right login form panel */}
            <section className="auth-panel--form">
                <div className="auth-panel-form-inner">
                    <header style={{marginBottom: '1.5rem'}}>
                        <h2 className="auth-panel-form-header-title">Pravita Hub</h2>
                        <p className="auth-panel-form-header-subtitle">
                            Welcome back! Please sign in to your account.
                        </p>
                    </header>
                    {children}
                </div>
            </section>
        </div>
    );
}
