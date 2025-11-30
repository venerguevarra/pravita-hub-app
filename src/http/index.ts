import { createHttpClient } from "./client";
import { localStorageTokenStorage } from "./tokenStorage";
import { refreshTokenRequest } from "./refresh";
import type { HttpClientOptions } from "./types";

const baseURL: string = "/api"; // TODO: change to your backend base URL or env var

const options: HttpClientOptions = {
    baseURL,
    tokenStorage: localStorageTokenStorage,
    refreshToken: refreshTokenRequest,
    onLogout: () => {
        window.location.href = "/login";
    },
};

export const http = createHttpClient(options);

export const axiosInstance = http.axios;
export const requestWithCancel = http.requestWithCancel;

export * from "./types";
export * from "./tokenStorage";
