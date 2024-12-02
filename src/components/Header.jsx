import logo_img from "../assets/logo1.png";
import { useUser } from "./UserContext";

export default function Header() {
  const { username, score } = useUser(); // Obtenemos el username y el puntaje

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 sm:h-16" src={logo_img} alt="Logo" />
            <span className="ml-2 text-lg sm:text-2xl font-bold text-gray-800">Trigonautas</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-bold">{username || "Nombre_usuario"}</span>
            <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trophy w-4 h-4 text-yellow-600 mr-1"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <span className="text-yellow-800 font-medium">{score} puntos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
