import type React from "react";
import { Navigate, Route } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage.tsx";

export const ProtectedRoutes: React.JSX.Element = (
    <>
        {/* Default redirect to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
    </>
);
