// File: src/main.tsx
// Purpose: Bootstraps the React application, attaches it to the DOM, and provides the global MUI theme.
import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import App from "./App";
import { AppThemeProvider } from "./theme";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
);

