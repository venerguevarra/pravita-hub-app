import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import "./styles/main.scss";

import App from "./App.tsx";

import { DSProvider } from "pravita-react-ds";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <DSProvider>
            <App />
        </DSProvider>
    </React.StrictMode>,
);
