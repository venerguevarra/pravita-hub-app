// auth/AuthGuard.tsx
import type React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { localStorageTokenStorage } from "../http";

const PUBLIC_PATHS: string[] = ["/login"];

export function AuthGuard(): React.JSX.Element {
    const location = useLocation();
    const token: string | null = localStorageTokenStorage.getAccessToken();
    const path: string = location.pathname;

    const isPublic: boolean = PUBLIC_PATHS.includes(path);
    const isAuthenticated: boolean = !!token;

    if (!isAuthenticated && !isPublic) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    if (isAuthenticated && path === "/login") {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}
