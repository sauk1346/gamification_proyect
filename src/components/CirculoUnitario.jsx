import React, { useState, useEffect } from 'react';

const CirculoUnitario = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setAngle((prevAngle) => (prevAngle + 0.5) % 360);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [angle]);

  // Convertir ángulo a radianes
  const radians = angle * (Math.PI / 180);
  
  // Calcular coordenadas del punto en el círculo unitario
  const x = Math.cos(radians);
  const y = Math.sin(radians);

  return (
    <div className="flex items-center justify-center p-4">
      <svg 
        width="500" 
        height="500" 
        viewBox="-250 -250 500 500" 
        className="border-2 border-gray-300"
      >
        {/* Plano cartesiano con cuadrículas */}
        {/* Líneas verticales */}
        {[...Array(11)].map((_, i) => (
          <line 
            key={`v-${i}`}
            x1={(i - 5) * 50} 
            y1="-250" 
            x2={(i - 5) * 50} 
            y2="250" 
            stroke="#f0f0f0" 
            strokeWidth="0.5"
          />
        ))}
        
        {/* Líneas horizontales */}
        {[...Array(11)].map((_, i) => (
          <line 
            key={`h-${i}`}
            x1="-250" 
            y1={(i - 5) * 50} 
            x2="250" 
            y2={(i - 5) * 50} 
            stroke="#f0f0f0" 
            strokeWidth="0.5"
          />
        ))}

        {/* Ejes principales */}
        <line 
          x1="-250" 
          y1="0" 
          x2="250" 
          y2="0" 
          stroke="black" 
          strokeWidth="1.5"
        />
        <line 
          x1="0" 
          y1="-250" 
          x2="0" 
          y2="250" 
          stroke="black" 
          strokeWidth="1.5"
        />

        {/* Flechas para ejes */}
        {/* Flecha eje X */}
        <polygon 
          points="250,0 235,-10 235,10" 
          fill="black"
        />
        <text 
          x="255" 
          y="20" 
          className="text-sm font-bold"
        >
          x
        </text>

        {/* Flecha eje Y */}
        <polygon 
          points="0,-250 -10,-235 10,-235" 
          fill="black"
        />
        <text 
          x="-20" 
          y="-255" 
          className="text-sm font-bold"
        >
          y
        </text>

        {/* Círculo unitario */}
        <circle 
          cx="0" 
          cy="0" 
          r="200" 
          fill="none" 
          stroke="gray" 
          strokeWidth="2"
        />

        {/* Radio */}
        <line 
          x1="0" 
          y1="0" 
          x2={x * 200} 
          y2={-y * 200} 
          stroke="blue" 
          strokeWidth="3"
        />

        {/* Proyección horizontal (coseno) */}
        <line 
          x1={x * 200} 
          y1={-y * 200} 
          x2={x * 200} 
          y2="0" 
          stroke="green" 
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <text 
          x={x * 200 + (x >= 0 ? 10 : -40)} 
          y="10" 
          className="text-sm"
        >
          cos: {x.toFixed(2)}
        </text>

        {/* Proyección vertical (seno) */}
        <line 
          x1="0" 
          y1="0" 
          x2={x * 200} 
          y2="0" 
          stroke="purple" 
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <text 
          x="-40" 
          y={-y * 200 + (y >= 0 ? 10 : -10)} 
          className="text-sm"
        >
          sin: {y.toFixed(2)}
        </text>

        {/* Punto en el círculo */}
        <circle 
          cx={x * 200} 
          cy={-y * 200} 
          r="10" 
          fill="red"
        />

        {/* Ángulo */}
        <text 
          x="20" 
          y="20" 
          className="text-sm"
        >
          Ángulo: {angle.toFixed(1)}°
        </text>
      </svg>
    </div>
  );
};

export default CirculoUnitario;