import React, { useState } from 'react';
import tuberias_img from "../../assets/tuberias.jpg";
import { BlockMath, InlineMath } from 'react-katex';
import { useUser } from '../UserContext';
import ConfettiAnimation from "../ConfettiAnimation";

export default function Desafio03() {
  const [feedback, setFeedback] = useState(null); // Estado para el feedback al usuario
  const { increaseScore } = useUser();
  const [showConfetti, setShowConfetti] = useState(false); // Estado para activar el confeti
  
  // Respuesta correcta
  const correctAnswer = "Máx: 35°C, Distancia: 0.25 m";

  // Manejar el clic en los botones de las alternativas
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("¡Correcto! El valor máximo de la temperatura es 35°C y ocurre a 0.25 metros.");
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
      <img className='w-full h-64 object-cover' src={tuberias_img} alt="Tuberías" />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Temperatura de una Tubería</h3>
        <p className='text-gray-600 mb-6'>La ecuación de la variación de temperatura en una tubería es:</p>
        <BlockMath math="T(x) = 25 + 10\cdot \cos(3\pi x - \pi/4)" />
        <p className='text-gray-600 mb-6'>
          Donde <InlineMath math="x" /> es la distancia en metros desde el origen, y <InlineMath math="T(x)" /> es la temperatura en grados Celsius.
        </p>
        <p className='text-gray-600 mb-6'>
          ¿Cuál es el valor máximo de la temperatura a lo largo de la tubería y a qué distancia del centro de equilibrio se encuentra?
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("Máx: 30°C, Distancia: 0.5 m")}
          >
            Máx: 30°C, Distancia: 0.5 m
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("Máx: 35°C, Distancia: 0.25 m")}
          >
            Máx: 35°C, Distancia: 0.25 m
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("Máx: 25°C, Distancia: 0 m")}
          >
            Máx: 25°C, Distancia: 0 m
          </button>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            onClick={() => handleAnswerClick("Máx: 40°C, Distancia: 1 m")}
          >
            Máx: 40°C, Distancia: 1 m
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
