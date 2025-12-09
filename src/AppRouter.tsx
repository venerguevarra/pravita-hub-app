import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthGuard } from "./auth/AuthGuard.tsx";
import { PublicRoutes } from "./router/PublicRouter";
import { ProtectedRoutes } from "./router/ProtectedRouter";
import { RootApp } from "./RootApp.tsx";

export function AppRouter(): React.JSX.Element {
    return (
        <Routes>
            {PublicRoutes}

            <Route element={<AuthGuard />}>
                <Route element={<RootApp />}>{ProtectedRoutes}</Route>
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
