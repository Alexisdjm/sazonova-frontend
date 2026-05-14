import images from "../assets/exporting";
import { ClickDown } from "./index";
import { OnionIcon, GarlicIcon } from "./icons";

const HeroBanner = () => {
  return (
    <div className="relative w-[100vw] h-screen bg-hero-gradient bg-fixed overflow-hidden">
      <OnionIcon className="hidden lg:block absolute lg:-bottom-[10%] -left-[10%] rotate-[-15deg] opacity-10 max-w-[600px] max-h-[600px] w-[100vw] h-[100vw] lg:w-[45vw] lg:h-[45vw]" color="#4D0005" />
      <GarlicIcon className="absolute -bottom-[10%] -right-[10%] rotate-[15deg] opacity-10 max-w-[600px] max-h-[600px] w-[500px] h-[500px] lg:w-[45vw] lg:h-[45vw]" color="#4D0005" />
      <div className="w-full h-full flex flex-col items-center justify-center">
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
        <p className="lg:block hidden text-secondary-beige text-center w-[80%] lg:w-[35%] text-[12px]">Ajo y Adobo: el origen del buen gusto. Simplificamos el arte de sazonar para que tú solo te preocupes por disfrutar del resultado.</p>
        <div className="absolute flex gap-6 lg:gap-10 lg:w-[50rem] lg:justify-between flex-row bottom-[clamp(2rem,7vh,8rem)] lg:bottom-[5rem] z-20">
          <img className="lg:w-[175px] lg:h-[350px] lg:rotate-[-10deg] w-[clamp(80px,30vw,150px)] h-auto object-contain rotate-[-10deg]" src={images.ajo} alt="" />
          <img className="lg:w-[175px] lg:h-[350px] lg:rotate-[10deg] w-[clamp(80px,30vw,150px)] h-auto object-contain rotate-[10deg]" src={images.adobo} alt="" />
        </div>
        <ClickDown />
        <img className="absolute rotate-[40deg] lg:-right-[1%] -right-[1%] -bottom-[5%] w-[clamp(35px,12vw,60px)] blur-[2px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-30deg] -left-[3%] -bottom-[5%] w-[clamp(45px,15vw,75px)] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[40deg] lg:left-[30%] lg:top-[-5%] left-[40%] top-[-4%] w-[clamp(45px,12vw,60px)] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-30deg] lg:rotate-[-45deg] lg:right-[-2%] right-[-7%] lg:top-[20%] top-[55%] w-[clamp(45px,15vw,75px)] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[30deg] lg:rotate-[-90deg] lg:right-[25%] lg:bottom-[-12%] left-[-4%] top-[20%] w-[clamp(35px,12vw,60px)] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute lg:rotate-[-85deg] rotate-[10deg] lg:right-[30%] right-[-5%] lg:top-[-12%] top-[15%] w-[clamp(45px,12vw,75px)] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[10deg] lg:left-[-2%] left-[-7%] lg:top-[30%] top-[50%] w-[clamp(55px,20vw,75px)] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute lg:rotate-[55deg] rotate-[10deg] lg:left-[30%] left-[40%] bottom-[-8%] w-[clamp(35px,12vw,60px)] blur-[2px]" src={images.ajo} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner
