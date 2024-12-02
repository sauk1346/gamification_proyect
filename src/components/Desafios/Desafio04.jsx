import React, { useState } from 'react';
import desafio04_img from "../../assets/desafio04.png";
import { useUser } from '../UserContext';
import ConfettiAnimation from "../ConfettiAnimation";

export default function Desafio04() {
  const [feedback, setFeedback] = useState(null); // Estado para el feedback al usuario
  const { increaseScore } = useUser();
  const [showConfetti, setShowConfetti] = useState(false); // Estado para activar el confeti
  
  // Respuesta correcta
  const correctAnswer = "12.6 m";

  // Manejar el clic en los botones de las alternativas
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("¡Correcto! La altura de la torre es 12.6 m.");
      increaseScore(100); // Aumenta 100 puntos
      setShowConfetti(true); // Activa la animación de confeti
      setTimeout(() => setShowConfetti(false), 2000); // Detén la animación después de 2 segundos
    } else {
      setFeedback("Incorrecto. Inténtalo nuevamente.");
      increaseScore(-100); // Resta 100 puntos si la respuesta es incorrecta
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={desafio04_img} alt="La Torre Maldita" />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>La Torre Maldita</h3>
        <p className='text-gray-600 mb-6'>
          Calcula la altura de la torre si nuestro personaje está a 7 m de la torre, 
          el ángulo con el que está observando la cúspide es de 60° y sostiene el artilugio a una altura de 1.5 m.
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("10.5 m")}
          >
            10.5 m
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("12.6 m")}
          >
            12.6 m
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("11.0 m")}
          >
            11.0 m
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("13.2 m")}
          >
            13.2 m
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
