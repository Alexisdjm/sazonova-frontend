import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapLocations.css';

// 1. Aquí colocas las ubicaciones.
// Para sacar coordenadas exactas: En Google Maps busca tu local, dale clic derecho al pin rojo y ahí te saldrán los dos números (el primero es Latitud, el segundo Longitud). Cópialos.
const locationsData = [
  {
    id: 1,
    name: "Sazonova Kari La Mata",
    address: "Coloca aquí la dirección exacta de Barquisimeto",
    longitude: -69.25716573430124, // <- Cuidado: En Google Maps el 'menos' (-69...) suele ser el SEGUNDO número (Longitud)
    latitude: 10.034124418974999    // <- En Google Maps el 'diez' (10...) es el PRIMER número (Latitud)
  },
  {
    id: 2,
    name: "Sazonova Kari Traki",
    address: "Coloca aquí la dirección exacta de Cabudare",
    longitude: -69.23484975653544,
    latitude: 10.021277453469008
  }
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
        <button style="pointer-events: auto;">Ver ubicación</button>
      `;

      el.appendChild(pin);
      el.appendChild(tooltip);

      // Programar los "hovers" a mano para que funcionen perfecto en mapa puro
      el.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
        pin.style.transform = 'scale(1.3)';
        pin.style.backgroundColor = '#C5670B'; // Naranja más oscuro al hacer hover
      });
      el.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        pin.style.transform = 'scale(1)';
        pin.style.backgroundColor = '#E47E1A';
      });

      // Insertar marcador
      new mapboxgl.Marker({ element: el })
        .setLngLat([loc.longitude, loc.latitude])
        .addTo(map.current);
    });

  }, []);

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-transparent">
      {/* El contenedor debe tener tamaño exacto para que mapbox sepa donde dibujarse */}
      <div className="relative w-full h-[600px] z-10 rounded-xl shadow-lg ring-1 ring-gray-200" ref={mapContainer} />
    </section>
  );
};

export default MapLocations;
