import axios, {
    AxiosError,
    AxiosHeaders,
    type AxiosInstance,
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from "axios";
import type { AuthRequestConfig, HttpClientOptions, TokenPair } from "./types";

// Internal helper: what config looks like *inside* interceptors
type InternalAuthConfig<D = unknown> = InternalAxiosRequestConfig<D> & AuthRequestConfig<D>;

/**
 * Create a shared Axios client with:
 * - auth header injection
 * - refresh token handling
 * - helper for cancellable requests
 */
export function createHttpClient(options: HttpClientOptions): {
    axios: AxiosInstance;
    requestWithCancel: <T = unknown>(
        config: AuthRequestConfig,
    ) => {
        promise: Promise<AxiosResponse<T>>;
        cancel: () => void;
        signal: AbortSignal;
    };
} {
    const { baseURL, tokenStorage, refreshToken, onLogout, axiosConfig } = options;

    const instance = axios.create({
        baseURL,
        ...axiosConfig,
    });

    // Manage "only refresh once, queue everything else"
    let isRefreshing: boolean = false;
    let refreshPromise: Promise<TokenPair> | null = null;

    /**
     * REQUEST INTERCEPTOR
     * - attach Authorization header (unless skipAuth = true)
     */
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
            const authConfig: InternalAxiosRequestConfig<unknown> & AuthRequestConfig<unknown> =
                config as InternalAuthConfig;

            if (authConfig.skipAuth) {
                return authConfig;
            }

            const url: string = authConfig.url ?? "";

            // Only protect these backend routes
            const isProtected: boolean = url.startsWith("/platform-api") || url.startsWith("/tenant-api");

            if (!isProtected) {
                return authConfig;
            }

            const token: string | null = tokenStorage.getAccessToken();
            if (token) {
                const headers: AxiosHeaders = AxiosHeaders.from(authConfig.headers ?? {});
                headers.set("Authorization", `Bearer ${token}`);
                authConfig.headers = headers;
            }

            return authConfig;
        },
        (error) => Promise.reject(error),
    );

    /**
     * RESPONSE INTERCEPTOR
     * - on 401, try to refresh once, then retry original request
     */
    instance.interceptors.response.use(
        (response) => response,
        async (error: AxiosError) => {
            const status = error.response?.status;
            const originalConfig = error.config as InternalAuthConfig | undefined;

            if (!originalConfig || originalConfig._retry || status !== 401) {
                return Promise.reject(error);
            }

            originalConfig._retry = true;

            const refreshTokenValue = tokenStorage.getRefreshToken();
            if (!refreshTokenValue) {
                tokenStorage.clearTokens();
                onLogout?.();
                return Promise.reject(error);
            }

            if (!isRefreshing) {
                isRefreshing = true;
                refreshPromise = refreshToken(refreshTokenValue)
                    .then((tokens) => {
                        tokenStorage.setTokens(tokens);
                        return tokens;
                    })
                    .catch((refreshError) => {
                        tokenStorage.clearTokens();
                        onLogout?.();
                        throw refreshError;
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            }

            try {
                const newTokens = await refreshPromise!;
                const newAccessToken = newTokens.accessToken;

                const headers = AxiosHeaders.from(originalConfig.headers ?? {});
                headers.set("Authorization", `Bearer ${newAccessToken}`);
                originalConfig.headers = headers;

                return instance(originalConfig);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        },
    );

    /**
     * Helper to create a cancellable request.
     * - returns { promise, cancel, signal }
     * - you can pass your own signal if you want; otherwise we create one.
     */
    const requestWithCancel = <T = unknown>(
        config: AuthRequestConfig,
    ): {
        promise: Promise<AxiosResponse<T>>;
        cancel: () => void;
        signal: AbortSignal;
    } => {
        const controller = new AbortController();

        const finalConfig: AuthRequestConfig = {
            ...config,
            signal: config.signal ?? controller.signal,
        };

        const promise = instance.request<T>(finalConfig);
        const cancel = () => controller.abort();

        return { promise, cancel, signal: controller.signal };
    };

    return {
        axios: instance,
        requestWithCancel,
    };
}
