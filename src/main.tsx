import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import App from "./app";
import i18n from "./lib/translations/i18n";
import "./global.css";

import { BrowserRouter as RouterProvider } from "react-router-dom";
import { store } from "./store/api/redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider basename="/">
          <App />
        </RouterProvider>
      </I18nextProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
