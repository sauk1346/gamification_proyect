import React from 'react'
import desafio04_img from "../../assets/desafio04.png"
export default function Desafio04() {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={desafio04_img} />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>La Torre Maldita </h3>
        <p className='text-gray-600 mb-6'>Calcula la altura de la torre si nuestro personaje está a
          7m de la torre, el ángulo con el que está observando la cúspide es de 60° y sostiene el artilugio a una altura de 1.5m
        </p>
      </div>

    </div>
    )
  }
  