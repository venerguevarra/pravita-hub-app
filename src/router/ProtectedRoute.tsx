import type React from "react";
import { Navigate } from "react-router-dom";
import { localStorageTokenStorage } from "../http";

export interface ProtectedRouteProps {
    children: React.ReactElement;
}

export function ProtectedRoute({ children }: ProtectedRouteProps): React.ReactElement {
    const token: string | null = localStorageTokenStorage.getAccessToken();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
