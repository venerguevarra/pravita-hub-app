import type React from 'react';
import {MainLayout} from '../layouts/MainLayout';

export const DashboardPage = (): React.JSX.Element => {
    return (
        <MainLayout>
            <div className="main-page-header">
                <div>
                    <h1 className="main-page-title">Header</h1>
                    <p className="main-page-subtitle">
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
