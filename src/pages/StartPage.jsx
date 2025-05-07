import React from "react";
import { Link } from "react-router-dom"; // Zum Verlinken der Seiten
import roseImage from "../assets/ado-ado-cute (2).gif"; // Dein Bild importieren

function StartPage() {
  return (
    <div className="container text-center">
      <img src={roseImage} alt="Rose" className="mx-auto mb-4" /> {/* Bild in der Mitte */}
      <h1 className="text-3xl font-semibold text-white mb-4">Happy Birthday!</h1>
      <p className="text-lg text-white mb-6">Willkommen zum Exkurs des Cringe</p>

      {/* Links zu den anderen Seiten */}
      <div className="gift-container">
        <Link to="/chapter1" className="gift-link text-blue-400 hover:text-blue-600">Chapter 1</Link>
        <Link to="/final" className="gift-link text-blue-400 hover:text-blue-600">End my Suffering(Ending)</Link>
      </div>
    </div>
  );
}

export default StartPage;
