import React from 'react'
import desafio05_img from "../../assets/desafio05.png"
export default function Desafio05() {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={desafio05_img} />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Viaje en Globo Aerostático</h3>
        <p className='text-gray-600 mb-6'>Ejercicio de globo aerostatico
        </p>
      </div>

    </div>
    )
  }
  