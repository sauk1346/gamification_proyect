import React, { useState } from 'react';
import Desafio01 from '../components/Desafios/Desafio01';
import Desafio02 from '../components/Desafios/Desafio02';
import Desafio03 from '../components/Desafios/Desafio03';
import Desafio04 from '../components/Desafios/Desafio04';
import Desafio05 from '../components/Desafios/Desafio05';

export default function Desafios() {
  const [desafio, setDesafio] = useState(1); // Estado para almacenar el desafío seleccionado

  const handleClick = (numero) => {
    setDesafio(numero); // Cambia el desafío según el botón presionado
  };

  // Renderiza el desafío correspondiente según el valor de 'desafio'
  const renderDesafio = () => {
    switch (desafio) {
      case 1:
        return <Desafio01 />;
      case 2:
        return <Desafio02 />;
      case 3:
        return <Desafio03 />;
      case 4:
        return <Desafio04 />;
      case 5:
        return <Desafio05 />;
      default:
        return <Desafio01 />;
    }
  };

  return (
    <div className="motion-preset-expand bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-sm sm:text-2xl font-bold text-gray-800">Desafíos Trigonométricos</h2>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((numero) => (
            <button
              key={numero}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                desafio === numero ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              } `}
              onClick={() => handleClick(numero)}
            >
              {numero}
            </button>
          ))}
        </div>
      </div>
      <div className='p-5'>
        {renderDesafio()}
      </div>
    </div>
  );
}
