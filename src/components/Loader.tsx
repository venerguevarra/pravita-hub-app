import React from "react";
import { Center, Stack, Text } from "@mantine/core";
import { Oval } from "react-loader-spinner";

type AppLoaderProps = {
    message?: string;
};

export default function Loader({ message }: AppLoaderProps): React.JSX.Element {
    return (
        <Center h="100vh" w="100vw">
            <Stack align="center" gap="xs">
                <Oval
                    height={60}
                    width={60}
                    color="#228be6"
                    secondaryColor="#e7f5ff"
                    strokeWidth={4}
                    strokeWidthSecondary={4}
                    ariaLabel="loading"
                />
                {message && (
                    <Text size="sm" c="dimmed">
                        {message}
                    </Text>
                )}
            </Stack>
        </Center>
    );
}
