// src/http/refresh.ts
import axios from "axios";
import type { RefreshTokenFn, TokenPair } from "./types";

/**
 * Implement this to match your Spring Boot /auth/refresh endpoint.
 * The library does NOT assume any path or response shape.
 */
export const refreshTokenRequest: RefreshTokenFn = async (refreshToken: string): Promise<TokenPair> => {
    // TODO: change this URL + payload + response type to your real API
    const response = await axios.post<{
        accessToken: string;
        refreshToken?: string | null;
    }>(
        "/auth/refresh", // e.g. 'http://localhost:8080/api/auth/refresh'
        { refreshToken },
    );

    return {
        accessToken: response.data.accessToken,
        // if backend doesn't always send a new refreshToken, keep the old one
        refreshToken: response.data.refreshToken ?? refreshToken,
    };
};
