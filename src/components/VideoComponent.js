import images from "../assets/exporting";

const VideoComponent = ({ videoSrc }) => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      {/* Reproductor de video ocultando controles y a pantalla completa */}
      <video
        src={videoSrc}
        className="w-full md:h-[75vh] lg:h-screen h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Contenedor absoluto para centrar el logo justo en medio de la sección */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={images.sazonovaLogoRed}
          alt="Sazonova Logo"
          width={403}
          height={423}
          className="h-[80%] w-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default VideoComponent;
