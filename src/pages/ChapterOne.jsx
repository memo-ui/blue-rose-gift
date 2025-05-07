import { useNavigate } from "react-router-dom"; // Zum Navigieren
import roseImage from "../assets/ado-singer.gif"; // Dein Bild importieren
export default function ChapterOne() {
    const navigate = useNavigate();  // Zugriff auf das Navigationsobjekt

    return (
        <div className="p-6 flex flex-col items-center justify-center h-screen bg-white text-center">
            <img src={roseImage} alt="Rose" className="mx-auto mb-4" /> {/* Bild in der Mitte */}
            <h2 className="text-3xl font-semibold mb-4">Chapter 1: Discord Nitro</h2>
            <p className="max-w-xl text-lg">
                Als ich die random Notif bekommen habe,dass ich Nitro geschenkt bekommen habe, für das beste GIF ever, war ich happy
            </p>
            <button
                onClick={() => navigate('/final')}
                className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
            >
                Weiter
            </button>

        </div>
    );
}
