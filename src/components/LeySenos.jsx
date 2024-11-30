import React, { useState, useEffect } from 'react';
import { Triangle, Play, Info, Refresh } from 'lucide-react';

const LeySenos = () => {
  const [estado, setEstado] = useState({
    anguloA: 45,
    anguloB: 60,
    ladoA: 5,
    ladoB: null,
    explicacion: '',
    etapaAnimacion: 0
  });

  const resetearEstado = () => {
    setEstado({
      anguloA: 45,
      anguloB: 60,
      ladoA: 5,
      ladoB: null,
      explicacion: '',
      etapaAnimacion: 0
    });
  };

  const calcularLadoFaltante = () => {
    const { anguloA, anguloB, ladoA } = estado;
    
    // Convertir ángulos a radianes
    const radA = anguloA * (Math.PI / 180);
    const radB = anguloB * (Math.PI / 180);
    
    // Calcular el lado faltante
    const ladoB = (ladoA * Math.sin(radB)) / Math.sin(radA);
    
    setEstado(prev => ({
      ...prev,
      ladoB: Number(ladoB.toFixed(2)),
      explicacion: 'Aplicando la Ley de los Senos: a/sin(A) = b/sin(B)',
      etapaAnimacion: 1
    }));
  };

  const animarPasos = () => {
    const pasos = [
      'La Ley de los Senos relaciona los lados y ángulos de un triángulo',
      'Compara la razón entre cada lado y el seno de su ángulo opuesto',
      'Permite calcular lados desconocidos cuando conoces otros elementos'
    ];

    setEstado(prev => ({
      ...prev,
      etapaAnimacion: (prev.etapaAnimacion + 1) % (pasos.length + 1),
      explicacion: pasos[prev.etapaAnimacion] || ''
    }));
  };

  const handleCambioAngulo = (e) => {
    const { name, value } = e.target;
    setEstado(prev => ({
      ...prev,
      [name]: parseFloat(value),
      ladoB: null,
      etapaAnimacion: 0,
      explicacion: ''
    }));
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Ley de los Senos
      </h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Ángulo A (grados)
          </label>
          <input
            type="number"
            name="anguloA"
            value={estado.anguloA}
            onChange={handleCambioAngulo}
            className="w-full p-2 border rounded-md"
            min="1"
            max="179"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Ángulo B (grados)
          </label>
          <input
            type="number"
            name="anguloB"
            value={estado.anguloB}
            onChange={handleCambioAngulo}
            className="w-full p-2 border rounded-md"
            min="1"
            max="179"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Lado a
          </label>
          <input
            type="number"
            name="ladoA"
            value={estado.ladoA}
            onChange={handleCambioAngulo}
            className="w-full p-2 border rounded-md"
            min="0.1"
            step="0.1"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Lado b (calculado)
          </label>
          <input
            type="text"
            value={estado.ladoB || 'Sin calcular'}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div>
      </div>
      
      <div className="flex space-x-4 justify-center mb-6">
        <button
          onClick={calcularLadoFaltante}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center"
        >
          <Play className="mr-2" /> Calcular Lado b
        </button>
        
        <button
          onClick={animarPasos}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center"
        >
          <Info className="mr-2" /> Explicar
        </button>
        
        <button
          onClick={resetearEstado}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center"
        >
          <Refresh className="mr-2" /> Reiniciar
        </button>
      </div>
      
      {estado.explicacion && (
        <div 
          className={`p-4 rounded-md transition-all duration-500 ease-in-out ${
            estado.etapaAnimacion > 0 
              ? 'bg-blue-100 text-blue-800 opacity-100 transform translate-y-0' 
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <h3 className="font-semibold mb-2">Explicación Animada</h3>
          <p>{estado.explicacion}</p>
        </div>
      )}
      
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h3 className="font-semibold text-blue-800 mb-2">Fórmula Básica:</h3>
        <p className="text-gray-700">
          Ley de los Senos: a/sin(A) = b/sin(B) = c/sin(C)
        </p>
      </div>
    </div>
  );
};

export default LeySenos;