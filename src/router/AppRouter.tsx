import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage.tsx";

export function AppRouter(): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
