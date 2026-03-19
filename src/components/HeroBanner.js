import images from "../assets/exporting";
import { ClickDown } from "./index";

const HeroBanner = () => {
  return (
    <div className="relative w-[100vw] h-screen bg-hero-gradient bg-fixed overflow-hidden">
      <img className="absolute -bottom-[10%] -left-[10%] rotate-[-15deg] opacity-10 max-w-[600px] max-h-[600px] w-[45vw] h-[45vw] object-cover" src={images.onion} alt="onion" />
      <img className="absolute -bottom-[15%] -right-[10%] rotate-[15deg] opacity-10 max-w-[600px] max-h-[600px] w-[45vw] h-[45vw] object-cover" src={images.garlic} alt="garlic" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <h1
            data-text="el sabor"
            className="isolate relative text-9xl font-medium font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            el sabor
          </h1>
          <h2
            data-text="que define"
            className="isolate -mt-9 relative text-8xl font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            que define
          </h2>
          <h3
            data-text="tu cocina"
            className="isolate -mt-10 relative text-9xl font-calling-heart text-secondary-beige text-center lowercase before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:12px_transparent]"
          >
            tu cocina
          </h3>
        </div>
        <p className="text-secondary-beige text-center w-[35%] text-[12px]">Ajo y Adobo: el origen del buen gusto. Simplificamos el arte de sazonar para que tú solo te preocupes por disfrutar del resultado.</p>
        <div className="absolute flex w-[50rem] justify-between flex-row">
          <img className="w-[175px] h-[350px] rotate-[12deg]" src={images.ajo} alt="" />
          <img className="w-[175px] h-[350px] rotate-[-12deg]" src={images.adobo} alt="" />
        </div>
        <ClickDown />
        <img className="absolute rotate-[40deg] -right-[1%] -bottom-[8%] w-[85px] blur-[2px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-30deg] -left-[3%] -bottom-[8%] w-[95px] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[40deg] left-[30%] top-[-12%] w-[80px] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-45deg] right-[-2%] top-[20%] w-[95px] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[-90deg] right-[25%] bottom-[-12%] w-[85px] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[-85deg] right-[30%] top-[-12%] w-[85px] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[10deg] left-[-2%] top-[30%] w-[100px] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[55deg] left-[30%] bottom-[-12%] w-[90px] blur-[2px]" src={images.ajo} alt="" />
      </div>
    </div>
  )
}

export default HeroBanner
