import type React from 'react';
import { MainLayout } from '../layouts/MainLayout';

export function /**/DashboardPage(): React.JSX.Element {
    return (
        <MainLayout>
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">Header</h1>
                    <p className="admin-page-subtitle">
                        Overview of the page content and actions.
                    </p>
                </div>
                {/*<Group gap="sm">*/}
                {/*    <Button size="xs" variant="light">*/}
                {/*        Export*/}
                {/*    </Button>*/}
                {/*    <Button size="xs">New product</Button>*/}
                {/*</Group>*/}
            </div>
        </MainLayout>
    );
}
