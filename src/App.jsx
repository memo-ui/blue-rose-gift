import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import von react-router-dom für Routen
import StartPage from "./pages/StartPage"; // Deine Startseite
import ChapterOne from "./pages/ChapterOne"; // Kapitel 1 Seite
import FinalPage from "./pages/FinalPage"; // Finale Seite
import "./styles.scss"; // Benutzerdefinierte SCSS-Datei für die Styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />  {/* StartPage ist die Home-Seite */}
        <Route path="/chapter1" element={<ChapterOne />} />  {/* Kapitel 1 Seite */}
        <Route path="/final" element={<FinalPage />} />  {/* Finale Seite */}
      </Routes>
    </Router>
  );
}

export default App;
