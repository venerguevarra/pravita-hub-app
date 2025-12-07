import axios from "axios";
import type {
    AuthenticationApiLoginRequest,
    AuthenticationDto,
    AuthenticationTokenDto,
} from "../api/hub-api/__openapi-generated";
import { authenticationApi } from "../api/hubApiClient.ts";
import { type AuthRequestConfig, localStorageTokenStorage } from "../http";

export type LoginErrorCode = "invalid-username" | "invalid-password" | "unknown";

export class LoginError extends Error {
    code: LoginErrorCode;

    constructor(code: LoginErrorCode, message: string) {
        super(message);
        this.code = code;
    }
}

export async function login(credentials: AuthenticationDto): Promise<void> {
    try {
        const response = await authenticationApi.login(
            {
                authenticationDto: credentials,
            } as AuthenticationApiLoginRequest,
            {
                skipAuth: true,
            } as AuthRequestConfig,
        );

        const tokenPair = response.data as AuthenticationTokenDto;

        localStorageTokenStorage.setTokens({
            accessToken: tokenPair.accessToken ?? "",
            refreshToken: tokenPair.refreshToken ?? null,
        });
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const status = err.response?.status;
            if (status === 404) {
                throw new LoginError("invalid-username", "Invalid username");
            }
            if (status === 400 || status === 401) {
                throw new LoginError("invalid-password", "Invalid password");
            }
        }
        throw new LoginError("unknown", "Login failed");
    }
}

export function logout(): void {
    localStorageTokenStorage.clearTokens();
}
