import React, { useState } from 'react';
import images from '../assets/exporting';

const Compare = () => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  return (
    <section className="relative w-full h-[100vh]">
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
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={hoveredLeft ? "#91030a" : "var(--gradient-dark-red)"}
          style={{ transition: "fill 0.3s ease" }}
        />

        {/* Fondo naranja cortado en forma de rayo.
            Usamos tus últimos porcentajes pero adaptándolos a escala de 1000 puntos.
            ej: 59.5% -> 595, 43.7% -> 437. Así es más fácil visualizarlo. */}
        <polygon
          points="750,0   1000,0   1000,1000   310,1000   535,510   470,495"
          fill={hoveredRight ? "#EE8B00" : "var(--adobo-orange-bg)"}
          style={{ transition: "fill 0.3s ease" }}
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
        {/* <image
          href={images.sazonovaMobile}
          x="440"
          y="440"
          width="125"
          height="125"
        /> */}
      </svg>
      <div className='flex flex-col relative justify-between h-full z-20'>
        <div className='px-10 pt-10 flex w-full h-full'>
          <div
            className='w-1/2 h-full flex items-center'
            onMouseEnter={() => setHoveredLeft(true)}
            onMouseLeave={() => setHoveredLeft(false)}
          >
            <div className='w-3/5 mx-auto rotate-[7deg]'>
              <h1 className='font-pangolin text-secondary-beige text-8xl font-medium'>Ajo En Polvo</h1>
              <p className='font-pangolin text-secondary-beige text-3xl font-medium w-3/5 pt-20'>El alma de la receta. Una explosión de especias para quienes no temen a la intensidad.</p>
            </div>
          </div>
          <div
            className='w-1/2 h-full flex items-end'
            onMouseEnter={() => setHoveredRight(true)}
            onMouseLeave={() => setHoveredRight(false)}
          >
            <div className='w-3/5 mx-auto flex flex-col items-end rotate-[-7deg]'>
              <p className='font-pangolin text-secondary-beige text-3xl font-medium w-3/5 text-right'>Tu solución todo en uno. Dale a tus platos un carácter vibrante y un color inconfundible.</p>
              <h1 className='font-pangolin text-secondary-beige text-8xl font-medium text-right pt-20'>Adobo</h1>
            </div>
          </div>
        </div>
        <div className="bottom-0 flex flex-col items-center justify-center w-full mb-12 z-10 ">
          <h4 className="font-sugo text-secondary-beige text-2xl font-bold">¿Con cuál</h4>
          <h1 className="font-sugo uppercase text-secondary-beige text-8xl font-medium">Sabe mejor?</h1>
        </div>
      </div>
      <div className="absolute -top-10 -left-10 flex flex-col justify-between h-[110vh] z-10">
        <img className='rotate-[20deg]' width={200}  src={images.ajo} alt="" />
        <img className='rotate-[20deg]' width={300} src={images.image38} alt="" />
      </div>
      <div className="absolute top-0 -right-28 flex flex-col justify-between h-[105vh] z-10">
        <img className='rotate-90' height={300} width={300} src={images.image39} alt="" />
        <img className='rotate-[15deg]' width={200}  src={images.adobo} alt="" />
      </div>
    </section>
  );
};

export default Compare;
