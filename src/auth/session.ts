import { localStorageTokenStorage } from "../http";

export function isAuthenticated(): boolean {
    const token: string | null = localStorageTokenStorage.getAccessToken();
    return Boolean(token);
}
