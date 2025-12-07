import type React from "react";
import { useNavigate } from "react-router-dom";
import {
    Drawer,
    NavLink,
    ScrollArea,
    Stack,
    Text,
} from "@mantine/core";

export interface MainNavDrawerProps {
    opened: boolean;
    onClose: () => void;
}

export function MainDrawer({
                                  opened,
                                  onClose,
                              }: MainNavDrawerProps): React.JSX.Element {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <Drawer
            opened={opened}
            onClose={onClose}
            position="left"
            size="xs"
            padding="md"
            overlayProps={{ opacity: 0.15, blur: 2 }}
            className="main-nav-drawer"
            title={
                <Text size="xs" fw={600} c="dimmed" tt="uppercase">
                    Navigation
                </Text>
            }
        >
            <ScrollArea h="100%">
                <Stack gap="xs" mt="sm">
                    <NavLink
                        label="Dashboard"
                        onClick={() => handleNavigate("/dashboard")}
                    />
                    {/* Add more links as you add sections */}
                    {/* <NavLink label="Patients" onClick={() => handleNavigate("/patients")} /> */}
                    {/* <NavLink label="Settings" onClick={() => handleNavigate("/settings")} /> */}
                </Stack>
            </ScrollArea>
        </Drawer>
    );
}
