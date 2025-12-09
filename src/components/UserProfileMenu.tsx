import type React from "react";
import { Avatar, Menu } from "@mantine/core";
import { logout } from "../services/authService";
import { useUserStore } from "../stores/userStore";
import { getAvatarInitials } from "../util/userUtil";
import type { CurrentUserDto } from "../api/hub-api/__openapi-generated";

export interface UserProfileMenuProps {
    userName: string;
    initials?: string;
    onProfileClick?: () => void;
    onSignOutClick?: () => void;
    triggerClassName?: string;
}

export function UserProfileMenu({
    onProfileClick,
    onSignOutClick,
    triggerClassName,
}: UserProfileMenuProps): React.JSX.Element {
    const currentUser: CurrentUserDto | null = useUserStore((state) => state.currentUser);
    const avatarInitials: string = getAvatarInitials(currentUser ??  {});

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
