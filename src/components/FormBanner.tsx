import type React from "react";
import { Alert } from "@mantine/core";

export interface FormBannerProps {
    message: string | null;
    title?: string;
    color?: string;
}

export const FormBanner: React.FC<FormBannerProps> = ({ message, title, color = "red" }) => {
    if (!message) {
        return null;
    }

    return (
        <Alert color={color} variant="light" title={title}>
            {message}
        </Alert>
    );
};
