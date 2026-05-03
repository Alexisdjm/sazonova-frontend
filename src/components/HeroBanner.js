import images from "../assets/exporting";
import { ClickDown } from "./index";
import { OnionIcon, GarlicIcon } from "./icons";

const HeroBanner = () => {
  return (
    <div className="relative w-[100vw] h-screen bg-hero-gradient bg-fixed overflow-hidden">
      <OnionIcon className="hidden md:block absolute md:-bottom-[10%] -left-[10%] rotate-[-15deg] opacity-10 max-w-[600px] max-h-[600px] w-[100vw] h-[100vw] md:w-[45vw] md:h-[45vw]" color="#4D0005" />
      <GarlicIcon className="absolute -bottom-[10%] -right-[10%] rotate-[15deg] opacity-10 max-w-[600px] max-h-[600px] w-[500px] h-[500px] md:w-[45vw] md:h-[45vw]" color="#4D0005" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center mb-20 md:mb-0">
          <h1
            data-text="el sabor"
            className="isolate relative text-8xl md:text-9xl font-medium font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            el sabor
          </h1>
          <h2
            data-text="que define"
            className="isolate -mt-7 md:-mt-9 relative text-7xl md:text-8xl font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            que define
          </h2>
          <h3
            data-text="tu cocina"
            className="isolate -mt-8 md:-mt-10 relative text-8xl md:text-9xl font-calling-heart text-secondary-beige text-center lowercase before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:12px_transparent]"
          >
            tu cocina
          </h3>
        </div>
        <p className="md:block hidden text-secondary-beige text-center w-[80%] md:w-[35%] text-[12px]">Ajo y Adobo: el origen del buen gusto. Simplificamos el arte de sazonar para que tú solo te preocupes por disfrutar del resultado.</p>
        <div className="absolute flex gap-10 md:w-[50rem] md:justify-between flex-row bottom-[7rem] z-20">
          <img className="md:w-[175px] md:h-[350px] md:rotate-[-10deg] w-[130px] h-[260px] rotate-[-10deg]" src={images.ajo} alt="" />
          <img className="md:w-[175px] md:h-[350px] md:rotate-[10deg] w-[130px] h-[260px] rotate-[10deg]" src={images.adobo} alt="" />
        </div>
        <ClickDown />
        <img className="absolute rotate-[40deg] md:-right-[1%] -right-[1%] -bottom-[8%] w-[85px] blur-[2px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-30deg] -left-[3%] -bottom-[8%] w-[95px] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[40deg] md:left-[30%] md:top-[-12%] left-[%] top-[-10%] w-[80px] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-30deg] md:rotate-[-45deg] md:right-[-2%] right-[-12%] md:top-[20%] top-[55%] w-[95px] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[30deg] md:rotate-[-90deg] md:right-[25%] md:bottom-[-12%] left-[-10%] top-[20%] w-[85px] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute md:rotate-[-85deg] rotate-[10deg] md:right-[30%] right-[-5%] md:top-[-12%] top-[15%] w-[85px] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-25deg] md:left-[-2%] left-[-15%] md:top-[30%] top-[55%] w-[100px] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute md:rotate-[55deg] rotate-[10deg] md:left-[30%] left-[40%] bottom-[-12%] w-[90px] blur-[2px]" src={images.ajo} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner
