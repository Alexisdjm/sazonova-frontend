
import images from '../assets/exporting';

const Compare = () => {
  return (
    <section className="relative w-full min-h-screen bg-primary-red overflow-hidden flex items-center justify-center">
      {/* Fondo naranja cortado en forma de rayo (zig-zag) */}
      {/* El polygon traza la mitad derecha de la pantalla: esquina superior derecha, esquina inferior derecha, baja en diagonal hacia la izquierda, corte horizontal hacia la derecha y baja en diagonal final */}
      <div
        className="absolute inset-0 bg-brand-orange z-0 transition-all duration-300"
        style={{ clipPath: 'polygon(59.5% 0, 100% 0, 100% 100%, 43.7% 100%, 54% 51%, 47% 49%)' }}
      />

      {/* Contenedor central absoluto */}
      <div className="relative z-10 w-full flex justify-center items-center pointer-events-none">
        <img
          src={images.plate}
          alt="Comparación"
          className="w-auto h-[200px] md:h-[300px] lg:h-[400px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Compare;
