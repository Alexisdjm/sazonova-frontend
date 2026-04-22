import { InstagramIcon, TikTokIcon, SazonovaLettersIcon, OnionThreeIcon, GarlicTwoIcon } from './icons';
import images from "../assets/exporting";
import RainEffect from "./RainEffect";

const rainItems = [
  {
    image: images.onionRain,
    positionX: '10%',
    duration: 15,
    delay: 0,
    width: '90px',
    rotation: '15deg',
    opacity: 1,
    blur: '2px'
  },
  {
    image: images.cilantroRain,
    positionX: '35%',
    duration: 12,
    delay: 3,
    width: '60px',
    rotation: '-30deg',
    opacity: 1,
    blur: '2px'
  },
  {
    image: images.garlicRain,
    positionX: '60%',
    duration: 4,
    delay: 1,
    width: '60px',
    rotation: '45deg',
    opacity: 1,
    blur: '3px'
  },
  {
    image: images.chiliRain,
    positionX: '85%',
    duration: 6,
    delay: 5,
    width: '80px',
    rotation: '-10deg',
    opacity: 1,
    blur: '2px'
  },
  {
    image: images.garlicRain,
    positionX: '20%',
    duration: 5,
    delay: 8,
    width: '65px',
    rotation: '85deg',
    opacity: 1,
    blur: '2px'
  },
  {
    image: images.onionRain,
    positionX: '50%',
    duration: 8,
    delay: 4,
    width: '75px',
    rotation: '-45deg',
    opacity: 1,
    blur: '2px'
  },
  {
    image: images.cilantroRain,
    positionX: '75%',
    duration: 7,
    delay: 6,
    width: '85px',
    rotation: '110deg',
    opacity: 1,
    blur: '2px'
  },
  {
    image: images.chiliRain,
    positionX: '5%',
    duration: 4,
    delay: 2,
    width: '65px',
    rotation: '15deg',
    opacity: 1,
    blur: '3px'
  },
];

const Footer = () => {
  return (
    <footer className="h-screen bg-hero-gradient w-full py-5 relative overflow-hidden font-ubuntu">
      <RainEffect items={rainItems} />
      {/* Absolute Background Icons */}
      <div className="absolute w-full flex flex-row justify-between right-0 opacity-10 -bottom-20 z-0">
        <OnionThreeIcon className="w-80 h-80 md:w-[600px] md:h-[600px] -ml-48 rotate-[-20deg]" color="var(--secondary-beige)" />
        <GarlicTwoIcon className="w-80 h-80 md:w-[600px] md:h-[600px] -mr-32 rotate-[15deg]" color="var(--secondary-beige)" />
      </div>

      <div className="mx-auto flex flex-col h-full w-full px-10 md:px-15 relative z-20">

        {/* Top Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-b border-secondary-beige/30 shrink-0">
          <SazonovaLettersIcon width="200" height="100" className="w-100 h-100" color="var(--secondary-beige)" />

          <div className="flex space-x-4">
            <a href="#" className="bg-secondary-beige text-primary-red rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition">
              <InstagramIcon className="w-6 h-6 fill-current" />
            </a>
            <a href="#" className="bg-secondary-beige text-primary-red rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </a>
            <a href="#" className="bg-secondary-beige text-primary-red rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition">
              <TikTokIcon className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="bg-secondary-beige text-primary-red rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z"/></svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-10 text-secondary-beige h-full">
          <div className="flex gap-[15vw] w-fit mx-auto">
            <div className="flex flex-col">
              <h4 className="text-xl font-medium mb-4">Menú</h4>
              <ul className="space-y-3 font-light text-1xl font-ubuntu">
                <li><a href="#" className="hover:opacity-80 transition">Productos</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Recetas</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Nosotros</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-xl font-medium mb-4">Marcas Aliadas</h4>
              <ul className="space-y-3 font-light text-1xl font-ubuntu">
                <li><a href="#" className="hover:opacity-80 transition">La Casa de los Condimentos</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Distribuidora Grimar</a></li>
                <li><a href="#" className="hover:opacity-80 transition ">Se distribuidor</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-xl font-medium mb-4">Contáctanos</h4>
              <ul className="space-y-3 font-light text-1xl font-ubuntu">
                <li><a href="mailto:mysazonova@gmail.com" className="hover:opacity-80 transition">mysazonova@gmail.com</a></li>
                <li><a href="tel:+584222828001" className="hover:opacity-80 transition">+58 422-2828001</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 pb-2 border-t border-secondary-beige/30 text-center shrink-0">
          <p className="font-ubuntu text-secondary-beige text-xs font-light">2026 Sazonova. Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
