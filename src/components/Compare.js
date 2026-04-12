import React from 'react';
import images from '../assets/exporting';

const Compare = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/*
        El SVG mágico: Todo lo que esté adentro (fondo, polígonos, imágenes) pertenece al mismo mundo (1000x1000).
        El preserveAspectRatio="xMidYMid slice" se asegura de estirar/cortar el "lienzo" para abarcar todo el espacio
        del navegador (como background-size: cover) pero TODO adentro escala proporcionalmente.
      */}
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Fondo rojo izquierdo (Cubre todo, luego es tapado parcialmente por el naranja) */}
        <rect x="0" y="0" width="100%" height="100%" fill="var(--gradient-dark-red)" />

        {/* Fondo naranja cortado en forma de rayo.
            Usamos tus últimos porcentajes pero adaptándolos a escala de 1000 puntos.
            ej: 59.5% -> 595, 43.7% -> 437. Así es más fácil visualizarlo. */}
        <polygon
          points="750,0   1000,0   1000,1000   310,1000   535,510   470,495"
          fill="var(--adobo-orange-bg)"
        />

        {/* Imagen centrada internamente en el "mundo" SVG.
            Un cuadro de 500x500 posicionado en X:250 Y:250 está perfectamente al medio de un lienzo 1000x1000. */}
        <image
          href={images.plate}
          x="375"
          y="375"
          width="250"
          height="250"
        />
      </svg>
    </section>
  );
};

export default Compare;
