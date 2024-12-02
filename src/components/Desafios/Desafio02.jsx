import React, { useState } from 'react';
import puente_img from "../../assets/puente2.jpg";
import { useUser } from '../UserContext';
import ConfettiAnimation from "../ConfettiAnimation";

export default function Desafio02() {
  const [feedback, setFeedback] = useState(null); // Estado para el feedback al usuario
  const { increaseScore } = useUser();
  const [showConfetti, setShowConfetti] = useState(false); // Estado para activar el confeti
  
  // Respuesta correcta
  const correctAnswer = "86.6 metros";

  // Manejar el clic en los botones de las alternativas
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("¡Correcto! La longitud de los cables es 86.6 metros.");
      increaseScore(100); // Aumenta 100 puntos
      setShowConfetti(true); // Activa la animación de confeti
      setTimeout(() => setShowConfetti(false), 2000); // Detén la animación después de 2 segundos
    } else {
      setFeedback("Incorrecto. Inténtalo nuevamente.");
      increaseScore(-100); // Resta 100 puntos si la respuesta es incorrecta
    }
  };

  return (
    <div className='motion-preset-blur-right bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={puente_img} alt="Puente" />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>El Puente Suspendido</h3>
        <p className='text-gray-600 mb-6'>
          Un puente suspendido tiene cables que forman un ángulo de 60° con la horizontal.
          Si la altura del puente es de 50 metros, ¿cuál es la longitud de los cables en metros?
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-red-500'
            onClick={() => handleAnswerClick("100 metros")}
          >
            100 metros
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-red-500'
            onClick={() => handleAnswerClick("75 metros")}
          >
            75 metros
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-red-500'
            onClick={() => handleAnswerClick("50 metros")}
          >
            50 metros
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-green-500'
            onClick={() => handleAnswerClick("86.6 metros")}
          >
            86.6 metros
          </button>
        </div>
        {feedback && (
          <p className={`mt-4 text-lg font-semibold ${feedback.includes("¡Correcto!") ? 'text-green-700' : 'text-red-700'}`}>
            {feedback}
          </p>
        )}
      </div>

      {/* Mostrar el confeti si la respuesta es correcta */}
      {showConfetti && <ConfettiAnimation duration={2000} />}
    </div>
  );
}
