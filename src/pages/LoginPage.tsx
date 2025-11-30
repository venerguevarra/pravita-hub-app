import type React from 'react';
import {Button, PasswordInput, Stack, TextInput} from '@mantine/core';
import {useNavigate} from 'react-router-dom';
import {AuthLayout} from '../layouts/AuthLayout';

export function LoginPage(): React.JSX.Element {
    const navigate = useNavigate();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        navigate('/admin');
    };

    return (
        <AuthLayout>
            <form onSubmit={handleSubmit} noValidate={true}>
                <Stack gap="md">
                    <TextInput
                        label="Email"
                        required
                        type="email"
                    />
                    <PasswordInput
                        label="Password"
                        required
                    />
                    <Button
                        type="submit"
                        fullWidth
                        className="auth-submit-button"
                    >
                        Sign in
                    </Button>
                </Stack>
            </form>
        </AuthLayout>
    );
}
