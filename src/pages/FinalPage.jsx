import React from "react";
import animeDreamLightConcert from "../assets/anime-dreamlight-concert-hamburg-tickets_338645_2903047_222x222.jpg"; // Dein Bild importieren
import keramikKurs from "../assets/unnamed.jpg"; // Dein Bild importieren
import { useNavigate } from "react-router-dom"; // Zum Navigieren

export default function FinalPage() {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-800 p-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Finale: Happy Birthday!</h2>
            <p className="text-lg text-white mb-4">Ich hoffe, du hattest eine großartige Zeit! Alles Gute zum Geburtstag!</p>

            {/* Zwei Bilder mit externen Links */}
            <div className="gift-container mt-6 flex justify-center gap-6">
                <div className="flex flex-col items-center">
                    <a href="https://www.lamooi.de/" target="_blank" rel="noopener noreferrer">
                        <img src={keramikKurs} alt="Gift 2" className="w-32 h-auto" />
                    </a>
                    <p className="mt-2 text-sm text-gray-300">Kleines Geschenk 1</p>
                </div>
                <div className="flex flex-col items-center">

                    <a href="https://www.dreamlight-labs.com/de" target="_blank" rel="noopener noreferrer">
                        <img src={animeDreamLightConcert} alt="Gift 2" className="w-32 h-auto" />
                    </a>
                    <p className="mt-2 text-sm text-gray-300">Kleines Geschenk 1</p>
                </div>
            </div>
                  {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate(-1)} // Zurück zur vorherigen Seite
          className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-xl text-sm transition"
        >
          Zurück
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-sm transition"
        >
          Zur Startseite
        </button>
      </div>
        </div>
    );
}
