import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./app/providers/StoreProvider/index.ts";
import { YMaps } from "@pbe/react-yandex-maps";
import { ErrorBoundary } from "./app/providers/ErrorBoundary/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StoreProvider>
        <React.StrictMode>
            <BrowserRouter>
                <ErrorBoundary>
                    <YMaps>
                        <App />
                    </YMaps>
                </ErrorBoundary>
            </BrowserRouter>
        </React.StrictMode>
    </StoreProvider>
);
