import {
  Header,
  HeroBanner,
  Recipes,
  VideoComponent,
  Slider,
  MapLocations,
  Compare,
  Form,
  Footer,
  ClickDown,
} from "./";
import images from "../assets/exporting";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroBanner>
        <div className="w-full flex flex-col items-center mb-[clamp(5rem,20vh,7rem)] lg:mb-0">
          <h1
            data-text="el sabor"
            className="isolate relative text-8xl lg:text-9xl font-medium font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            el sabor
          </h1>
          <h2
            data-text="que define"
            className="isolate -mt-7 lg:-mt-9 relative text-7xl lg:text-8xl font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            que define
          </h2>
          <h3
            data-text="tu cocina"
            className="isolate -mt-8 lg:-mt-10 relative text-8xl lg:text-9xl font-calling-heart text-secondary-beige text-center lowercase before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:12px_transparent]"
          >
            tu cocina
          </h3>
        </div>
        <p className="lg:block hidden text-secondary-beige text-center w-[80%] lg:w-[35%] text-[12px]">
          Ajo y Adobo: el origen del buen gusto. Simplificamos el arte de
          sazonar para que tú solo te preocupes por disfrutar del resultado.
        </p>
        <div className="absolute flex gap-6 lg:gap-10 lg:w-[50rem] lg:justify-between flex-row bottom-[clamp(2rem,7vh,8rem)] lg:bottom-[5rem] z-20">
          <img
            className="lg:w-[175px] lg:h-[350px] lg:rotate-[-10deg] w-[clamp(80px,30vw,150px)] h-auto object-contain rotate-[-10deg] drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
            src={images.ajo}
            alt=""
          />
          <img
            className="lg:w-[175px] lg:h-[350px] lg:rotate-[10deg] w-[clamp(80px,30vw,150px)] h-auto object-contain rotate-[10deg] drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
            src={images.adobo}
            alt=""
          />
        </div>
        <ClickDown />
      </HeroBanner>
      <Recipes />
      <VideoComponent videoSrc={images.video1} />
      <Slider />
      <MapLocations />
      <Compare />
      <Form />
      <Footer />
    </>
  );
};

export default Homepage;
