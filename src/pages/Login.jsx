import { useState } from "react";
import { useUser } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import logo_img from "../assets/logo1.png"

export default function Login() {
    const [inputUsername, setInputUsername] = useState(""); // Estado local para el nombre del usuario
    const { updateUsername } = useUser();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputUsername) {
          updateUsername(inputUsername); // Actualizar el nombre en el contexto
          navigate("/main");
        }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-center mb-8">
            <img className="motion-translate-y-loop-[2%] motion-duration-2000" src={logo_img}/>
            <h1 className="motion-preset-blur-right text-3xl font-bold text-gray-900 mb-2">Bienvenido a Trigonautas</h1>
            <p className="motion-preset-focus text-gray-600">Ingresa tu nombre para comenzar la aventura</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ingresa tu nombre"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
