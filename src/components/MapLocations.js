import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import images from '../assets/exporting';
import './MapLocations.css';

// 1. Aquí colocas las ubicaciones.
// Para sacar coordenadas exactas: En Google Maps busca tu local, dale clic derecho al pin rojo y ahí te saldrán los dos números (el primero es Latitud, el segundo Longitud). Cópialos.
const locationsData = [
  {
    id: 1,
    name: "Hipermercado Kari La Mata",
    address: "Cabudare 3023, Lara",
    longitude: -69.25716573430124,
    latitude: 10.034124418974999
  },
  {
    id: 2,
    name: "Hipermercado Kari Ciudad Traki Cabudare",
    address: "Av. Intercomunal Barquisimeto-Cabudare, Cabudare, Lara",
    longitude: -69.23484975653544,
    latitude: 10.021277453469008
  },
  {
    id: 3,
    name: "Hipermercado Kari",
    address: "Av Pedro León Torres, con C. 50, Barquisimeto 3001, Lara",
    longitude: -69.3401547201263,
    latitude: 10.068306873587398
  },
  {
    id: 4,
    name: "Supermercado Mega Lucky C.A.",
    address: "2PMQ+425, Av. Libertador, Cabudare 3023, Lara",
    longitude: -69.26226688564915,
    latitude: 10.033551178749573
  },
  {
    id: 5,
    name: "Bull Market & Brunch",
    address: "Galeria Gastronomica, 24e, Av Los leones cruce con Libertador C.C. Las Trinitarias local 23e, Barquisimeto 3001, Lara",
    longitude: -69.28228067680453,
    latitude: 10.078909724743054
  },
  {
    id: 6,
    name: "Segomarket",
    address: "Carrera 1 entre calles 2 y 3 Edif. Alena piso PB APT 2-64 Urb. Nueva Segovia, Av Lara, Barquisimeto 3001, Lara",
    longitude: -69.29578540677812,
    latitude: 10.064629283464983
  },
  {
    id: 7,
    name: "Minimarket DG del Centro C.A.",
    address: "Local 1-2, Calle 29 entre 19 y 20 C.C City Center, Barquisimeto 3001, Lara",
    longitude: -69.32005716075257,
    latitude: 10.066213491100985
  },
  {
    id: 8,
    name: "Automercado Las Amapolas",
    address: "Frente a, residencias riachuelo, Cabudare 3023, Lara",
    longitude: -69.23726351813266,
    latitude: 10.025172142313798
  },
  {
    id: 9,
    name: "Supermercado carorita 16",
    address: "3MWP+3VC, Barquisimeto 3001, Lara",
    longitude: -69.3128570895876,
    latitude: 10.095394081838052
  },
  {
    id: 10,
    name: "Todo Pollos",
    address: "3MFP+MRR, Calle 20-A, Barquisimeto 3001, Lara",
    longitude: -69.3131956767093,
    latitude: 10.075085725993363
  },
];

const MapLocations = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Si ya inicializamos el mapa, salimos
    if (map.current) return;

    // Aquí inyectamos tu token directamente
    mapboxgl.accessToken = 'pk.eyJ1IjoianVsaW1lbmRvemExNCIsImEiOiJjbW50czd0MGcwcmxvMnNvaGR4eXQyNGZuIn0.5Z7WVKuNTGNxNbbQewcG_w';

    // Inicializamos el mapa puro
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/julimendoza14/cmntsuojg002l01s32vub2sw1', // Reemplaza esto con tu estilo personalizado de calles rojas
      center: [-69.2460, 10.0280], // Centro movido a la zona de Cabudare para mostrar ambas sucursales de Kari
      zoom: 13, // Zoom para iniciar viendo las calles
      projection: 'mercator',

      // Habilitar Scroll limitado con distancias máximas y mínimas
      scrollZoom: true,
      minZoom: 12,  // Distancia máxima de "alejamiento" (no podrán ver el país completo)
      maxZoom: 14,  // Distancia máxima de "acercamiento" (no podrán ver más allá del nivel de casas)

      // Desactivar rotación y perspectiva 3D
      dragRotate: false, // Desactiva click derecho + arrastrar para rotar/perspectiva
      touchPitch: false, // Desactiva usar dos dedos para cambiar la perspectiva en pantallas táctiles

      maxBounds: [
        [-69.4600, 9.9200], // Suroeste (Un poco más allá del sur de Cabudare y oeste de BQTO)
        [-69.1500, 10.1500] // Noreste (Norte de Barquisimeto y este de Cabudare)
      ]
    });

    // 2. Este bloque dibuja los puntos en el mapa por cada ubicación de la lista de arriba
    locationsData.forEach((loc) => {
      // Contenedor principal del pin
      const el = document.createElement('div');
      el.className = 'map-pin-container cursor-pointer flex justify-center items-center';
      el.style.width = '24px';
      el.style.height = '24px';

      // El circulo de branding rojo (Construido con Tailwind para forzar su visibilidad)
      const pin = document.createElement('div');
      pin.className = 'w-6 h-6 rounded-full border-[3px] border-white shadow-lg transition-transform duration-200';
      pin.style.backgroundColor = '#E47E1A';

      // La tarjeta o tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'map-tooltip z-50 opacity-0 transition-opacity duration-300';
      tooltip.style.pointerEvents = 'none'; // Para que no quite hover al pin
      tooltip.innerHTML = `
        <h4>${loc.name}</h4>
        <p>${loc.address}</p>
        <button class="btn-location" style="pointer-events: auto;">Ver ubicación</button>
      `;

      // Evento para el botón interior del tooltip para centrar mapa al hacer clic
      const btn = tooltip.querySelector('button');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          map.current.flyTo({
            center: [loc.longitude, loc.latitude],
            zoom: 14, // Zoom máximo configurado en el mapa
            speed: 1.5, // Velocidad de la animación
            curve: 1.2, // Efecto panorámico de la animación
            essential: true
          });
        });
      }

      el.appendChild(pin);
      el.appendChild(tooltip);

      // Programar los "hovers" a mano para que funcionen perfecto en mapa puro
      el.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        pin.style.transform = 'scale(1.3)';
        pin.style.backgroundColor = '#C5670B'; // Naranja más oscuro al hacer hover
        el.style.zIndex = '999'; // Traer al frente al hacer hover (usamos 999 para que supere el z-index: 10 por defecto)
      });
      el.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        pin.style.transform = 'scale(1)';
        pin.style.backgroundColor = '#E47E1A';
        el.style.zIndex = ''; // Restaurar nivel original al quitar hover
      });

      // Insertar marcador
      new mapboxgl.Marker({ element: el })
        .setLngLat([loc.longitude, loc.latitude])
        .addTo(map.current);
    });

  }, []);

  return (
    <section className="w-full relative overflow-hidden bg-transparent">
      {/* Fondo repetitivo igual al Slider */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col gap-y-3 py-3 -ml-16">
        {[...Array(35)].map((_, i) => (
          <div key={i} className={`flex gap-x-3 min-w-max ${i % 2 !== 0 ? '-translate-x-[62px]' : ''}`}>
            {[...Array(40)].map((_, j) => (
              <img key={j} src={images.sazonovaLetters} className="h-[60px] w-auto opacity-[0.7] object-contain" alt="" />
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 font-sugo flex flex-col items-center mb-10 mt-20 px-10">
        <h1 className="text-brand-orange md:text-8xl text-7xl font-medium text-center md:-mb-10 -mb-7">DONDE</h1>
        <h2 data-text="encontrarnos?" className="isolate relative text-primary-red font-calling-heart md:text-8xl text-7xl font-medium text-center before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_var(--bg-color)]">encontrarnos?</h2>
      </div>
      {/* El contenedor debe tener tamaño exacto para que mapbox sepa donde dibujarse */}
      <div className="relative w-full h-[600px] z-10 rounded-xl shadow-lg ring-1 ring-gray-200" ref={mapContainer} />
    </section>
  );
};

export default MapLocations;
