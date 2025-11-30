import type React from 'react';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps): React.JSX.Element {
  return (
    <div className="app-root">
      <div className="app-shell">
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
          }}
        >
          <div>
            <h1 className="app-section-title-main">Admin dashboard</h1>
            <p className="app-section-title-sub">Manage tenants, users, and settings</p>
          </div>
          <nav style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem' }}>
            <span>Welcome, Admin</span>
          </nav>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
