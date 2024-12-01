import React from 'react'
import puente_img from "../../assets/puente2.jpg"

export default function Desafio02() {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={puente_img} />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>El Puente Suspendido</h3>
        <p className='text-gray-600 mb-6'>
          Un puente suspendido tiene cables que forman un ángulo de 60° con la horizontal.
          Si la altura del puente es de 50 metros, ¿cuál es la longitud de los cables en metros?
        </p>
      </div>
    </div>
  )
}
