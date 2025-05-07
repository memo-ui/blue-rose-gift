import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ← DAS IST WICHTIG
import App from "./App";
import "./index.css";
import "./styles.scss"; // Benutzerdefinierte SCSS-Datei

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/blue-rose-gift">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);