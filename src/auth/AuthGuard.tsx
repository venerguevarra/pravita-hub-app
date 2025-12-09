import type React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "../auth/session.ts";

export function AuthGuard(): React.JSX.Element {
    const location = useLocation();
    const path: string = location.pathname;

    const isUserAuthenticated: boolean = isAuthenticated();

    if (!isUserAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    if (isUserAuthenticated && path === "/login") {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}
