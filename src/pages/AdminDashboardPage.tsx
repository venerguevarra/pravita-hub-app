import type React from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { AdminLayout } from '../layouts/AdminLayout';

export function AdminDashboardPage(): React.JSX.Element {
  return (
    <AdminLayout>
      <Stack gap="lg">
        <Group justify="space-between">
          <div>
            <Text size="lg" fw={600}>
              Overview
            </Text>
            <Text size="sm" c="dimmed">
              High-level metrics and quick actions for your tenants.
            </Text>
          </div>
          <Button variant="light">New tenant</Button>
        </Group>

        {/* Placeholder content */}
        <div className="app-card">
          <Text size="sm" c="dimmed">
            Dashboard content goes here (charts, tables, etc.).
          </Text>
        </div>
      </Stack>
    </AdminLayout>
  );
}
