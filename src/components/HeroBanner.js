import images from "../assets/exporting";
import { OnionIcon, GarlicIcon } from "./icons";

const HeroBanner = ({ children }) => {
  return (
    <div className="relative w-[100vw] h-screen bg-hero-gradient bg-fixed overflow-hidden max-h-[800px]">
      <OnionIcon className="hidden lg:block absolute lg:-bottom-[10%] -left-[10%] rotate-[-15deg] opacity-10 max-w-[600px] max-h-[600px] w-[100vw] h-[100vw] lg:w-[45vw] lg:h-[45vw]" color="#4D0005" />
      <GarlicIcon className="absolute -bottom-[10%] -right-[10%] rotate-[15deg] opacity-10 max-w-[600px] max-h-[600px] w-[500px] h-[500px] lg:w-[45vw] lg:h-[45vw]" color="#4D0005" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        {children}
        <img className="absolute lg:rotate-[-55deg] rotate-[50deg] lg:right-[25%] -right-[1%] -bottom-[8%] w-[clamp(35px,12vw,60px)] blur-[2px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[-30deg] -left-[3%] -bottom-[5%] w-[clamp(45px,15vw,75px)] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[40deg]  lg:rotate-[60deg] lg:left-[70%] lg:top-[-6%] left-[40%] top-[-4%] w-[clamp(45px,12vw,60px)] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute  rotate-[-30deg] lg:rotate-[15deg] lg:right-[-2%] right-[-7%] lg:top-[70%] top-[55%] w-[clamp(45px,15vw,75px)] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute rotate-[30deg] lg:rotate-[-100deg] lg:left-[25%] left-[-4%] top-[20%] lg:top-[-8%] w-[clamp(35px,12vw,60px)] blur-[2px]" src={images.adobo} alt="" />
        <img className="absolute lg:rotate-[-35deg] rotate-[10deg] lg:right-[-1%] right-[-5%] lg:top-[25%] top-[15%] w-[clamp(45px,12vw,75px)] blur-[3px]" src={images.ajo} alt="" />
        <img className="absolute rotate-[10deg] lg:left-[-2%] left-[-7%] lg:top-[35%] top-[50%] w-[clamp(55px,20vw,75px)] blur-[4px]" src={images.adobo} alt="" />
        <img className="absolute lg:rotate-[55deg] rotate-[10deg] lg:left-[30%] left-[40%] bottom-[-8%] w-[clamp(35px,12vw,60px)] blur-[2px]" src={images.ajo} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
