import type React from "react";
import { Avatar, Menu } from "@mantine/core";
import { logout } from "../services/authService.ts";

export interface UserProfileMenuProps {
    userName: string;
    initials?: string;
    onProfileClick?: () => void;
    onSignOutClick?: () => void;
    triggerClassName?: string;
}

export function UserProfileMenu({
    userName,
    initials,
    onProfileClick,
    onSignOutClick,
    triggerClassName,
}: UserProfileMenuProps): React.JSX.Element {
    const avatarInitials: string = initials ?? userName.charAt(0).toUpperCase();

    const handleProfileClick = (): void => {
        if (onProfileClick) {
            onProfileClick();
        }
    };

    const handleSignOutClick = (): void => {
        logout();
        if (onSignOutClick) {
            onSignOutClick();
        }
    };

    return (
        <Menu withinPortal position="bottom-end" offset={4}>
            <Menu.Target>
                <button type="button" className={triggerClassName}>
                    <Avatar radius="xl" size={24} color="cyan">
                        {avatarInitials}
                    </Avatar>
                    <span>{userName}</span>
                </button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={handleProfileClick}>Profile</Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={handleSignOutClick}>Sign out</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
