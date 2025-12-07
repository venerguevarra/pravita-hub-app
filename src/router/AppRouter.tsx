import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage.tsx";
import { AuthGuard } from "../auth/AuthGuard";
import RegisterPage from "../pages/RegistrationPage.tsx";
import EmailVerificationPage from "../pages/EmailVerificationPage.tsx";

export function AppRouter(): React.JSX.Element {
    return (
        <Routes>
            <Route element={<AuthGuard />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                {/* Public route(s) */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/verify-email" element={<EmailVerificationPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Protected route(s) */}
                <Route path="/dashboard" element={<DashboardPage />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}
