import React from 'react';

const ArrowMeal = ({ text, isMirrored = false, className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Texto arriba de la flecha */}
      <span className="font-pangolin text-secondary-beige text-2xl text-center">
        {text}
      </span>

      {/*
        Contenedor de la flecha.
        -scale-x-100 invierte la flecha horizontalmente (modo espejo) para que curve a la izquierda.
      */}
      <div className={`w-8 h-16 flex items-center justify-center ${isMirrored ? '-scale-x-100' : ''}`}>
        <svg
          viewBox="0 0 60 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-secondary-beige"
        >
          {/* Tallo de la flecha: recta hacia abajo y luego curva hacia la derecha */}
          <path d="M30 15 L30 70 Q30 90 55 90" />
          {/* Cabeza de la flecha apuntando hacia arriba */}
          <path d="M15 30 L30 15 L45 30" />
        </svg>
      </div>
    </div>
  );
};

export default ArrowMeal;
