import React from 'react'
import GeoGebraComponent from '../components/GeogeBraComponent'
import { BlockMath } from 'react-katex'
import CalculadoraUno from '../components/CalculadoraUno'


export default function Calculadora() {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6'>
        <section className='pt-6 pb-6'> 
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Calculadora Gráfica Seno/Coseno
            </h2>
            <div className='bg-blue-50 p-6 rounded-lg'>
                <p className='text-lg mb-4'>
                    Ingrese el el valor del ángulo en grados.
                </p>
                <CalculadoraUno />
            </div>
        </section>
        
                
    </div>
  )
}
