import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Tailwind-Direktiven
import "./styles.scss"; // Benutzerdefinierte SCSS-Datei

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter basename="/blue-rose-gift"> {/* <-- wichtig */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );