import type React from "react";
import { Alert, Text } from "@mantine/core";
import {
    IconInfoCircle,
    IconAlertTriangle,
    IconAlertCircle,
} from "@tabler/icons-react";

export type BannerVariant = "info" | "warning" | "error";

export interface BannerProps {
    message: React.ReactNode;
    title?: string;
    variant?: BannerVariant;
    color?: string;
    icon?: React.ReactNode;
    radius?: "xs" | "sm" | "md" | "lg" | "xl";
}

const DEFAULT_VARIANT: BannerVariant = "info";

function getDefaultColor(variant: BannerVariant): string {
    switch (variant) {
        case "warning":
            return "yellow";
        case "error":
            return "red";
        case "info":
        default:
            return "blue";
    }
}

function getDefaultIcon(variant: BannerVariant): React.ReactNode {
    switch (variant) {
        case "warning":
            return <IconAlertTriangle size="1.1rem" />;
        case "error":
            return <IconAlertCircle size="1.1rem" />;
        case "info":
        default:
            return <IconInfoCircle size="1.1rem" />;
    }
}

export function Banner({
                           message,
                           title,
                           variant = DEFAULT_VARIANT,
                           color,
                           icon,
                           radius = "md",
                       }: BannerProps): React.JSX.Element {
    const resolvedColor: string = color ?? getDefaultColor(variant);
    const resolvedIcon: React.ReactNode = icon ?? getDefaultIcon(variant);

    return (
        <Alert
            variant="light"
            color={resolvedColor}
            radius={radius}
            icon={resolvedIcon}
        >
            {title && (
                <Text fw={500} mb={4}>
                    {title}
                </Text>
            )}
            <Text size="sm">{message}</Text>
        </Alert>
    );
}
