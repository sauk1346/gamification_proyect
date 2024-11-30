import React from 'react'
import { BlockMath, InlineMath } from 'react-katex'
import LeySeno from '../components/LeySeno'
import LeyCoseno from '../components/LeyCoseno'
import FuncionSenoCoseno from '../components/FuncionSenoCoseno'

export default function Teoria() {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6'>
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
                <LeySeno />
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
                    <BlockMath math="a^2 = b^2 + c^2 - 2bc \cdot \cos(\alpha)" />
                    <BlockMath math="b^2 = a^2 + c^2 - 2ac \cdot \cos(\beta)" />
                    <BlockMath math="c^2 = a^2 + b^2 - 2ab \cdot \cos(\gamma)" />    
                </div>
                <p className='mt-4 text-gray-600'>
                    Esta ley es una generalización del teorema de Pitágoras.
                </p>
                <LeyCoseno />
            </div>
        </section>

        <section className='pt-6 pb-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Funciones Seno y Coseno
            </h2>
            <div className='bg-blue-50 p-6 rounded-lg'>
                <p className='text-lg mb-4'>
                    Representan oscilaciones y ciclos que se repiten en fenómenos naturales como el sonido, la luz y el movimiento armónico.
                </p>
                <div className='bg-white p-4 rounded-lg shadow-sm text-center text-xl'>
                    <BlockMath math="f(x) = a \cdot \sin(b\cdot x + c) + d" />
                    <BlockMath math="g(x) = a \cdot \cos(b\cdot x + c) + d" />    
                </div>
                <ul className='mt-4 text-gray-600'>
                    <li><InlineMath math="a:"/> Amplitud</li>
                    <li><InlineMath math="b:"/> Frecuencia angular</li>
                    <li><InlineMath math="\frac{b}{2\pi}:"/> Frecuencia</li>
                    <li><InlineMath math="\frac{c}{b}:"/> Desplazamiento Vertical</li>
                    <li><InlineMath math="d:"/> Desplazamiento Horizontal</li>
                    
                </ul>
                <FuncionSenoCoseno />
            </div>
        </section>
        
    </div>
  )
}
