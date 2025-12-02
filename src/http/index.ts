import { createHttpClient } from "./client";
import { localStorageTokenStorage } from "./tokenStorage";
import { refreshTokenRequest } from "./refresh";
import type { AuthRequestConfig, HttpClientOptions } from "./types";
import { pravitaAdminApiBaseUrl } from "../env.ts";
import type { AxiosInstance, AxiosResponse } from "axios";

const baseURL: string = pravitaAdminApiBaseUrl;

const options: HttpClientOptions = {
    baseURL,
    tokenStorage: localStorageTokenStorage,
    refreshToken: refreshTokenRequest,
    onLogout: (): void => {
        window.location.href = "/login";
    },
};

export const http = createHttpClient(options);

export const axiosInstance: AxiosInstance = http.axios;
export const requestWithCancel: <T = unknown>(
    config: AuthRequestConfig,
) => {
    promise: Promise<AxiosResponse<T>>;
    cancel: () => void;
    signal: AbortSignal;
} = http.requestWithCancel;

export * from "./types";
export * from "./tokenStorage";
