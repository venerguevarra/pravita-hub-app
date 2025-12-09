import type React from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import RegisterPage from "../pages/RegistrationPage.tsx";
import EmailVerificationPage from "../pages/EmailVerificationPage.tsx";

export const PublicRoutes: React.JSX.Element = (
    <>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
    </>
);
