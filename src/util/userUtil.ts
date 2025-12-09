import type { CurrentUserDto } from "../api/hub-api/__openapi-generated";

export const getAvatarInitials = (user: CurrentUserDto): string => {
    if (!user || !user.user?.firstName || !user.user?.lastName) {
        return "";
    }
    const first: string = user.user?.firstName.trim()[0].toUpperCase();
    const last: string = user.user?.lastName.trim()[0].toUpperCase();
    return `${first}${last}`;
}
