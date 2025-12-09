import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Center, Text } from "@mantine/core";
import UserService from "./services/userService";
import Loader from "./components/Loader";
import { useUserStore } from "./stores/userStore";

export function RootApp(): React.JSX.Element {
    const userService = UserService.getInstance();

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const setCurrentUser = useUserStore((state) => state.setCurrentUser);

    async function loadUser() {
        try {
            setLoading(true);
            setError(null);
            const currentUser = await userService.getCurrentUser();
            setCurrentUser(currentUser);
            console.log('~~ currentUser', currentUser);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err: unknown) {
            setError("Failed to load user");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        void loadUser();
    }, []);

    if (loading) {
        return <Loader message="Loading..." />;
    }

    if (error) {
        return (
            <Center h="100vh">
                <Text c="red" size="sm">
                    {error}
                </Text>
            </Center>
        );
    }

    return <Outlet />;
}
