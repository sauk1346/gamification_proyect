import React, { useState } from 'react';
import desafio05_img from "../../assets/desafio05.png";
import { useUser } from '../UserContext';
import ConfettiAnimation from "../ConfettiAnimation";

export default function Desafio05() {
  const [feedback, setFeedback] = useState(null); // Estado para feedback
  const { increaseScore } = useUser();
  const [showConfetti, setShowConfetti] = useState(false); // Estado para activar el confeti

  // Respuesta correcta
  const correctAnswer = "32°";

  // Manejo de clic en los botones de respuesta
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("¡Correcto! El ángulo de elevación es 32°.");
      increaseScore(100); // Sumar 100 puntos por respuesta correcta
      setShowConfetti(true); // Activar confeti
      setTimeout(() => setShowConfetti(false), 2000); // Detener confeti después de 2 segundos
    } else {
      setFeedback("Incorrecto. Inténtalo nuevamente.");
      increaseScore(-100); // Restar 100 puntos por respuesta incorrecta
    }
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={desafio05_img} alt="Viaje en Globo Aerostático" />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Viaje en Globo Aerostático</h3>
        <p className='text-gray-600 mb-6'>
          Un grupo de estudiantes realiza un viaje en globo aerostático como parte
          de un proyecto de investigación. El globo se eleva gradualmente hasta llegar
          a una altitud de 500 metros y recorre una distancia horizontal de 800 metros. ¿Cuál
          es la medida del ángulo de elevación del globo respecto del punto de partida?
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("30°")}
          >
            30°
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("32°")}
          >
            32°
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("35°")}
          >
            35°
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("40°")}
          >
            40°
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
