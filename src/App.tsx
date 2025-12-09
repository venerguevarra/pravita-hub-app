import type React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";

export default function App(): React.JSX.Element {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
