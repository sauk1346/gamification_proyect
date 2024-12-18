import React, { useState } from 'react';
import desafio01_img from "../../assets/desafio01.png";
import { useUser } from "../UserContext";
import ConfettiAnimation from "../ConfettiAnimation"; 

export default function Desafio01() {
  const [feedback, setFeedback] = useState(null); // Estado para feedback
  const { increaseScore } = useUser(); // Accede a la función para incrementar el puntaje
  const [showConfetti, setShowConfetti] = useState(false); // Estado para controlar la animación de confeti
  
  // Respuesta correcta
  const correctAnswer = "30 metros";

  // Manejo de clic en los botones de respuesta
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("¡Correcto! La altura del edificio es de 30 metros.");
      increaseScore(100); // Suma 100 puntos si la respuesta es correcta
      setShowConfetti(true); // Muestra el confeti
      setTimeout(() => setShowConfetti(false), 2000); // Detenemos el confeti después de 2 segundos
    } else {
      setFeedback("Incorrecto. Inténtalo nuevamente.");
      increaseScore(-100);
    }
  };

  return (
    <div className='motion-preset-blur-right bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={desafio01_img} alt="Edificio" />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>El Edificio Misterioso</h3>
        <p className='text-gray-600 mb-6'>
          Un edificio proyecta una sombra de 30 metros cuando el ángulo de elevación del sol es de 45°.
          ¿Cuál es la altura del edificio en metros?
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-red-500'
            onClick={() => handleAnswerClick("15 metros")}
          >
            15 metros
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-green-500'
            onClick={() => handleAnswerClick("30 metros")}
          >
            30 metros
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-red-500'
            onClick={() => handleAnswerClick("45 metros")}
          >
            45 metros
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-red-500'
            onClick={() => handleAnswerClick("60 metros")}
          >
            60 metros
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
