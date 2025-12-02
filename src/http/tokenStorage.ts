import type { TokenPair, TokenStorage } from "./types";

const ACCESS_KEY = "access_token";
const REFRESH_KEY = "refresh_token";

export const localStorageTokenStorage: TokenStorage = {
    getAccessToken() {
        if (typeof window === "undefined") return null;
        return localStorage.getItem(ACCESS_KEY);
    },
    getRefreshToken() {
        if (typeof window === "undefined") return null;
        return localStorage.getItem(REFRESH_KEY);
    },
    setTokens(tokens: TokenPair) {
        if (typeof window === "undefined") return;
        localStorage.setItem(ACCESS_KEY, tokens.accessToken);
        if (tokens.refreshToken) {
            localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
        }
    },
    clearTokens() {
        if (typeof window === "undefined") return;
        localStorage.removeItem(ACCESS_KEY);
        localStorage.removeItem(REFRESH_KEY);
    },
};
