import React from 'react'
import edificio_img from "../../assets/edificios.jpg"
export default function Desafio01() {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={edificio_img} />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>El Edificio Misterioso</h3>
        <p className='text-gray-600 mb-6'>
          Un edificio proyecta una sombra de 30 metros cuando el ángulo de elevación del sol es de 45°.
          ¿Cuál es la altura del edificio en metros?
        </p>
      </div>
    </div>
  )
}
