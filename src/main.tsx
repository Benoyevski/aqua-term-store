import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./app/providers/StoreProvider/index.ts";
import { ProfileProvider } from "./app/providers/ProfileContext/ProfileContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ProfileProvider>
        <StoreProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </StoreProvider>
    </ProfileProvider>,
);
