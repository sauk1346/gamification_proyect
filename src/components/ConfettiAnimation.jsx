import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiAnimation = ({ duration = 2000 }) => {
  useEffect(() => {
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [duration]);

  return null; // El componente no necesita renderizar nada, solo activar la animación
};

export default ConfettiAnimation;
