import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToastProvider } from "ui-component-library";
import "./index.css";



createRoot(document.getElementById("root")!).render(
  <ToastProvider position="top-right" max={3} duration={3000}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ToastProvider>
);
