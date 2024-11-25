import React from 'react'
import { BlockMath } from 'react-katex'

export default function Teoria() {
  return (
    <div>
        <section className='pt-6 pb-6'> 
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Ley del Seno
            </h2>
            <div className='bg-blue-50 p-6 rounded-lg'>
                <p className='text-lg mb-4'>
                    Establece que en cualquier triángulo la relación entre el seno de un angulo y el lado opuesto es constante:
                </p>
                <div className='bg-white p-4 rounded-lg shadow-sm text-center text-xl'>
                    <BlockMath math="\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)} = 2R" />    
                </div>
                <p className='mt-4 text-gray-600'>
                    Donde R es el radio del círculo circunscrito al triángulo.
                </p>
            </div>
        </section>
        
        <section className='pt-6 pb-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Ley del Coseno
            </h2>
            <div className='bg-blue-50 p-6 rounded-lg'>
                <p className='text-lg mb-4'>
                    Relaciona un lado de un triángulo con los otros dos lados y el ángulo comprendido:
                </p>
                <div className='bg-white p-4 rounded-lg shadow-sm text-center text-xl'>
                    <BlockMath math="c^2 = a^2 + b^2 - 2ab \cdot \cos(\gamma)" />    
                </div>
                <p className='mt-4 text-gray-600'>
                    Esta ley es una generalización del teorema de Pitágoras.
                </p>
            </div>
        </section>

        <section className='pt-6 pb-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Ley de la Tangente
            </h2>
            <div className='bg-blue-50 p-6 rounded-lg'>
                <p className='text-lg mb-4'>
                    Relaciona 2 lados y ángulos de un triángulo:
                </p>
                <div className='bg-white p-4 rounded-lg shadow-sm text-center text-xl'>
                    <BlockMath math="\frac{a+b}{a-b} = \frac{\tan\left(\frac{\alpha + \beta}{2}\right)}{\tan\left(\frac{\alpha - \beta}{2}\right)}" />    
                </div>
                <p className='mt-4 text-gray-600'>
                    Esta ley es una generalización del teorema de Pitágoras.
                </p>
            </div>
        </section>
        <div className='mt-8 p-4 bg-yellow-50 rounded-lg'>
            <h3 className="text-lg font-semibold text-gray-800 mb-2"> 💡 Tip de Estudio</h3>
            <p className='text-gray-700'>
                Practica con la calculadora interactiva para reforzar estos conceptos. Intenta resolver problemas variando los valores de lados y ángulos.
            </p>
        </div>
    </div>
  )
}
