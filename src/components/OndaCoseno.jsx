import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OndaCoseno = () => {
  const [angle, setAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // Convert degrees to radians
  const toRadians = (degrees) => degrees * (Math.PI / 180);

  // Animate the angle
  useEffect(() => {
    if (isAnimating) {
      animationRef.current = requestAnimationFrame(() => {
        const newAngle = (angle + 1) % 360;
        setAngle(newAngle);
      });
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [angle, isAnimating]);

  // Draw the cosine wave visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Cosine wave parameters
    const xOffset = 50;  // Starting x-coordinate
    const amplitude = 40;
    const frequency = 0.66 * Math.PI / 180;  // Controls wave repetition
    const waveWidth = width - xOffset;

    // Draw coordinate system
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(xOffset, 0);
    ctx.lineTo(xOffset, height);
    ctx.strokeStyle = '#ccc';
    ctx.stroke();

    // Draw unit circle
    const centerX = xOffset;
    const centerY = height / 2;
    const radius = 40;

    // Unit circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Angle line in unit circle
    const radAngle = toRadians(angle);
    const circleX = centerX + radius * Math.cos(radAngle);
    const circleY = centerY - radius * Math.sin(radAngle);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(circleX, circleY);
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Point on unit circle
    ctx.beginPath();
    ctx.arc(circleX, circleY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();

    // Cosine wave
    ctx.beginPath();
    ctx.moveTo(xOffset, centerY);
    for (let x = 0; x <= waveWidth; x++) {
      const cosValue = Math.cos(x * frequency);
      const yPos = centerY - cosValue * amplitude;
      ctx.lineTo(x + xOffset, yPos);
    }
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    // Current cosine point
    // Calculate the x-coordinate based on the angle (converting to wave's context)
    const cosinePointX = (angle * waveWidth / 360) + xOffset;
    const cosinePointY = centerY - Math.cos(radAngle) * amplitude;

    ctx.beginPath();
    ctx.arc(cosinePointX, cosinePointY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // Dashed line connecting cosine point to x-axis
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.moveTo(cosinePointX, cosinePointY);
    ctx.lineTo(cosinePointX, centerY);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash

    // Angle and cosine value text
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.fillText(`Ángulo: ${angle}°`, width - 100, 20);
    ctx.fillText(`Coseno: ${Math.cos(radAngle).toFixed(2)}`, width - 100, 40);
  }, [angle]);

  const handleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const handleAngleChange = (change) => {
    setAngle((prev) => {
      const newAngle = (prev + change + 360) % 360;
      return newAngle;
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          width="600" 
          height="300" 
          className="w-full border border-gray-300"
        />
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button 
            onClick={() => handleAngleChange(-10)} 
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={handleAnimation} 
            className={`px-4 py-2 rounded transition ${
              isAnimating 
                ? 'bg-red-500 text-white' 
                : 'bg-green-500 text-white'
            }`}
          >
            {isAnimating ? 'Detener' : 'Animar'}
          </button>
          <button 
            onClick={() => handleAngleChange(10)} 
            className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <ul className="list-disc list-inside text-gray-600 max-w-md mx-auto text-left mt-2">
          <li>El punto rojo representa el ángulo del círculo unitario</li>
          <li>El punto azul muestra el valor de la función Coseno</li>
          <li>La función varía en el rango -1 a 1</li>
        </ul>
      </div>
    </div>
  );
};

export default OndaCoseno;
