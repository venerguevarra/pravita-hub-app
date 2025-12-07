import axios from "axios";
import type {
    AuthenticationApiLoginRequest,
    AuthenticationDto,
    AuthenticationTokenDto,
} from "../api/hub-api/__openapi-generated";
import { authenticationApi } from "../api/hubApiClient.ts";
import { type AuthRequestConfig, localStorageTokenStorage } from "../http";

export const INVALID_USERNAME_CODE = "invalid-username";
export const INVALID_PASSWORD_CODE = "invalid-password";
export const USER_ACCOUNT_INACTIVE = "user-account-inactive";
export const UNKNOWN_ERROR_CODE = "unknown";

export type LoginErrorCode =
    | typeof INVALID_USERNAME_CODE
    | typeof INVALID_PASSWORD_CODE
    | typeof USER_ACCOUNT_INACTIVE
    | typeof UNKNOWN_ERROR_CODE;

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
                throw new LoginError(INVALID_USERNAME_CODE, "Invalid username");
            }
            if (status === 400 || status === 401) {
                throw new LoginError(INVALID_PASSWORD_CODE, "Invalid password");
            }
            if (status === 409 && err.response?.data?.status === "user_account_inactive") {
                throw new LoginError(USER_ACCOUNT_INACTIVE, "Account is not active");
            }
        }
        throw new LoginError("unknown", "Login failed");
    }
}

export function logout(): void {
    localStorageTokenStorage.clearTokens();
}
