import React, { useState, useEffect } from 'react';
import images from '../assets/exporting';
import ArrowMeal from './ArrowMeal';

const Compare = () => {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);
  const [rotateToggle, setRotateToggle] = useState(false);

  useEffect(() => {
    // Alternar entre 45 y -45 grados cada 500ms
    const interval = setInterval(() => {
      setRotateToggle(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen max-h-[600px] md:max-h-[650px] lg:max-h-[800px] xl:max-h-[100vh]">
      {/* Flechas superiores independientes.
          Puedes ajustar el top, left o right de forma individual para cada tamaño de pantalla:
          por defecto, md: (tablets) y lg: (desktop). */}
      <ArrowMeal
        text="Pollo"
        className="absolute z-40 top-32 left-[15vw] md:left-[25vw] lg:left-[30vw] xl:hidden"
      />
      <ArrowMeal
        text="Carne"
        isMirrored={true}
        className="absolute z-40 top-36 right-[12vw] md:right-[25vw] lg:right-[28vw] xl:hidden"
      />

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
        {/* Fondo naranja cortado en forma de rayo. Mobile (< 1024px, 500x500) */}
        <polygon
          points="717,0   1000,0   1000,1000   350,1000   570,520   440,490"
          fill={hoveredRight ? "#EE8B00" : "var(--adobo-orange-bg)"}
          style={{ transition: "fill 0.3s ease" }}
          className="lg:hidden"
        />
        {/* Fondo naranja cortado en forma de rayo. Desktop pequeño (1024px-1279px, 400x400) */}
        <polygon
          points="730,0   1000,0   1000,1000   334,1000   556,516   452,492"
          fill={hoveredRight ? "#EE8B00" : "var(--adobo-orange-bg)"}
          style={{ transition: "fill 0.3s ease" }}
          className="hidden lg:block xl:hidden"
        />
        {/* Fondo naranja cortado en forma de rayo. Desktop grande (ajustado para imagen original de 250x250) */}
        <polygon
          points="750,0   1000,0   1000,1000   310,1000   535,510   470,495"
          fill={hoveredRight ? "#EE8B00" : "var(--adobo-orange-bg)"}
          style={{ transition: "fill 0.3s ease" }}
          className="hidden xl:block"
        />

        {/* Imagen centrada internamente en el "mundo" SVG.
            Un cuadro de 500x500 posicionado en X:250 Y:250 está perfectamente al medio de un lienzo 1000x1000. */}
        {/* Plato Mobile (500x500) */}
        <image
          href={images.plate}
          x="250"
          y="250"
          width="500"
          height="500"
          className="lg:hidden"
        />
        {/* Plato Desktop Pequeño (400x400) */}
        <image
          href={images.plate}
          x="300"
          y="300"
          width="400"
          height="400"
          className="hidden lg:block xl:hidden"
        />
        {/* Desktop grande */}
        <image
          href={images.plate}
          x="375"
          y="375"
          width="250"
          height="250"
          className="hidden xl:block"
        />
        {/* Logo rotatorio Mobile (250x250) */}
        <image
          href={images.sazonovaMobile}
          x="375"
          y="375"
          width="250"
          height="250"
          className={`lg:hidden origin-center ${rotateToggle ? 'rotate-45' : '-rotate-45'}`}
        />
        {/* Logo rotatorio Desktop Pequeño (200x200) */}
        <image
          href={images.sazonovaMobile}
          x="400"
          y="400"
          width="200"
          height="200"
          className={`hidden lg:block xl:hidden origin-center ${rotateToggle ? 'rotate-45' : '-rotate-45'}`}
        />
      </svg>
      {/* Desktop: mitades a pantalla completa, independientes del título */}
      <div className="absolute inset-0 z-20 hidden xl:flex">
        <div
          className="w-1/2 h-full px-10"
          onMouseEnter={() => setHoveredLeft(true)}
          onMouseLeave={() => setHoveredLeft(false)}
        >
          <div className="h-full flex items-center">
            <div className="w-3/5 mx-auto rotate-[7deg]">
              <h1 className="font-pangolin text-secondary-beige text-8xl font-medium leading-tight">
                Ajo En Polvo
              </h1>
              <p className="font-pangolin text-secondary-beige text-3xl font-medium w-3/5 pt-20 leading-snug">
                El alma de la receta. Una explosión de especias para quienes no temen a la intensidad.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-1/2 h-full px-10"
          onMouseEnter={() => setHoveredRight(true)}
          onMouseLeave={() => setHoveredRight(false)}
        >
          <div className="h-full flex items-center justify-end">
            <div className="w-3/5 mx-auto flex flex-col items-end rotate-[-7deg]">
              <p className="font-pangolin text-secondary-beige text-3xl font-medium w-3/5 text-right leading-snug">
                Tu solución todo en uno. Dale a tus platos un carácter vibrante y un color inconfundible.
              </p>
              <h1 className="font-pangolin text-secondary-beige text-8xl font-medium text-right pt-20 leading-tight">
                Adobo
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Título separado (no comparte flex con los textos) */}
      <div className="absolute inset-x-0 bottom-12 z-30 flex flex-col items-center justify-center pointer-events-none">
        <h4 className="font-sugo text-secondary-beige text-4xl xl:text-5xl font-medium">
          ¿Con cuál
        </h4>
        <h1 className="font-sugo uppercase text-secondary-beige text-6xl xl:text-8xl font-medium text-center">
          Sabe mejor?
        </h1>
      </div>
      <div className="absolute -top-10 -bottom-10 -left-10 hidden xl:flex flex-col justify-between z-10">
        <img className='rotate-[20deg]' width={200}  src={images.ajo} alt="" />
        <img className='rotate-[20deg]' width={300} src={images.image38} alt="" />
      </div>
      <div className="xl:flex hidden absolute -top-10 -bottom-10 -right-28 flex-col justify-between z-10">
        <img className='rotate-90' height={300} width={300} src={images.image39} alt="" />
        <img className='rotate-[15deg]' width={200}  src={images.adobo} alt="" />
      </div>
    </section>
  );
};

export default Compare;
