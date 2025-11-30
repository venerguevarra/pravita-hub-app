// src/http/types.ts
import type { AxiosRequestConfig } from "axios";

// A basic token pair; extend if your backend returns more fields
export interface TokenPair {
    accessToken: string;
    refreshToken?: string | null;
}

// How tokens are stored (localStorage, cookies, in-memory, etc.)
export interface TokenStorage {
    getAccessToken(): string | null;
    getRefreshToken(): string | null;
    setTokens(tokens: TokenPair): void;
    clearTokens(): void;
}

// Function you implement to call your backend refresh endpoint
export type RefreshTokenFn = (refreshToken: string) => Promise<TokenPair>;

// Config used to create the shared HTTP client
export interface HttpClientOptions {
    baseURL: string;
    tokenStorage: TokenStorage;
    refreshToken: RefreshTokenFn;
    onLogout?: () => void;
    axiosConfig?: AxiosRequestConfig;
}

// 🔹 Public config type you’ll use when calling the client
export interface AuthRequestConfig<D = unknown> extends AxiosRequestConfig<D> {
    /**
     * Internal flag to avoid infinite refresh loops
     */
    _retry?: boolean;
    /**
     * Skip auth for public endpoints (health, login, refresh, etc.)
     */
    skipAuth?: boolean;
}
