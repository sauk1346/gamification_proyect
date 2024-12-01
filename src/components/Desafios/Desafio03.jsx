import React from 'react'
import tuberias_img from "../../assets/tuberias.jpg"
import { BlockMath, InlineMath } from 'react-katex'
export default function Desafio03() {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
      <img className='w-full h-64 object-cover' src={tuberias_img} />
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Temperatura de una Tubería</h3>
        <p className='text-gray-600 mb-6'>La ecuación de la variación de temperatura en una tubería es:</p>
        <BlockMath math="T(x) = 25 + 10\cdot \cos(3\pi x - \pi/4)"/>
        <p className='text-gray-600 mb-6'>Donde <InlineMath math="x"/> es la distancia en metros desde el origen, y <InlineMath math="T(x)"/> es la temperatura en grados Celsius.</p>
        <p className='text-gray-600 mb-6'>¿Cuál es el valor máximo de la temperatura a lo largo de la tubería y a qué distancia del centro de equilibrio se encuentra?</p>

      </div>

    </div>
    )
  }
  