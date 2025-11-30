import type React from 'react';
import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MantineProvider} from '@mantine/core';
import App from '../App';

function renderApp(ui: React.ReactElement) {
    return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('App', () => {
    it('renders the app root without crashing', () => {
        renderApp(<App/>);
        const rootElement = screen.getByText(/pravita/i);
        expect(rootElement).toBeInTheDocument();
    });
});
