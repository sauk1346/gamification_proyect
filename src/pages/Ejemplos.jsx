import React from 'react'
import faro_img from "../assets/faro_barco.png"
import pagoda_img from "../assets/pagoda.jpeg"
import puente_img from "../assets/puente.png"
import { BlockMath } from 'react-katex'

export default function Ejemplos() {
  return (
    
    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6'>
      <div className='space-y-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Ejemplos Prácticos</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>  
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img className='w-full h-48 object-cover' src={faro_img}/>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-3'>El Faro y el Barco</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Problema:</h4>
                  <p className="text-gray-600">
                    Un faro observa un barco con un ángulo de elevación de 30°. Si el faro tiene
                    una altura de 50 metros, ¿a qué distancia está el barco de la base del faro?
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Solución:</h4>
                  <p className='text-gray-600'>Usando definición de Tangente</p>
                  <div className='text-sm sm:text-base'>
                    <BlockMath math="distancia = \frac{altura}{\tan(30°)} = \frac{50}{0.577} "/>
                    <BlockMath math="distancia = 86.6\;metros"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img className='w-full h-48 object-cover' src={pagoda_img}/>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-3'>La Torre Inclinada</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Problema:</h4>
                  <p className='text-gray-600'>
                    Una torre de 20 metros está inclinada formando un ángulo de 75° con el suelo.
                    ¿Cuál es la distancia desde la punta de la torre hasta el suelo?
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Solución:</h4>
                  <p className='text-gray-600'>Usando definición de Seno</p>
                  <div className='text-sm sm:text-base'>
                    <BlockMath math="distancia = \frac{20}{\sin(75°)}"/>
                    <BlockMath math="distancia = 20.7\; metros"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img className='w-full h-48 object-cover' src={puente_img}/>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-3'>El Puente Colgante</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Problema:</h4>
                  <p className='text-gray-600'>
                    Un puente colgante forma un triángulo con sus cables. Si la distancia
                    entre los postes es de 100m y los cables miden 60m cada uno, ¿cuál es
                    el ángulo que forman los cables con el suelo?
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-700 mb-2'>Solución:</h4>
                  <p className='text-gray-600'>
                    Usando la Ley del Coseno
                  </p>
                  <div className='text-sm sm:text-base'>
                    <BlockMath math="100^2 = 60^2 + 60^2 - 2\cdot 60\cdot 60\cdot \cos(\alpha)"/>
                    <BlockMath math="cos(\alpha) = \frac{100^2 - 2\cdot 60^2}{2\cdot 60^2}"/>
                    <BlockMath math="\alpha = cos^{-1}\left(\frac{100^2 - 2\cdot 60^2}{2\cdot 60^2}\right) = 56.4°"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
