import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/Theme";

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM
    .createRoot(document.getElementById("root") as HTMLElement)
    .render(
        <ThemeProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeProvider>
    )
});


