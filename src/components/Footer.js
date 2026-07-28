import {
  InstagramIcon,
  TikTokIcon,
  SazonovaLettersIcon,
  OnionThreeIcon,
  GarlicTwoIcon,
} from "./icons";
import images from "../assets/exporting";
import RainEffect from "./RainEffect";

const rainItems = [
  {
    image: images.onionRain,
    positionX: "10%",
    duration: 15,
    delay: 0,
    width: "90px",
    imgWidth: 90,
    imgHeight: 90,
    rotation: "15deg",
    opacity: 1,
    blur: "2px",
  },
  {
    image: images.cilantroRain,
    positionX: "35%",
    duration: 12,
    delay: 3,
    width: "60px",
    imgWidth: 60,
    imgHeight: 60,
    rotation: "-30deg",
    opacity: 1,
    blur: "2px",
  },
  {
    image: images.garlicRain,
    positionX: "60%",
    duration: 4,
    delay: 1,
    width: "60px",
    imgWidth: 60,
    imgHeight: 76,
    rotation: "45deg",
    opacity: 1,
    blur: "3px",
  },
  {
    image: images.chiliRain,
    positionX: "85%",
    duration: 6,
    delay: 5,
    width: "80px",
    imgWidth: 80,
    imgHeight: 100,
    rotation: "-10deg",
    opacity: 1,
    blur: "2px",
  },
  {
    image: images.garlicRain,
    positionX: "20%",
    duration: 5,
    delay: 8,
    width: "65px",
    imgWidth: 65,
    imgHeight: 82,
    rotation: "85deg",
    opacity: 1,
    blur: "2px",
  },
  {
    image: images.onionRain,
    positionX: "50%",
    duration: 8,
    delay: 4,
    width: "75px",
    imgWidth: 75,
    imgHeight: 75,
    rotation: "-45deg",
    opacity: 1,
    blur: "2px",
  },
  {
    image: images.cilantroRain,
    positionX: "75%",
    duration: 7,
    delay: 6,
    width: "85px",
    imgWidth: 85,
    imgHeight: 85,
    rotation: "110deg",
    opacity: 1,
    blur: "2px",
  },
  {
    image: images.chiliRain,
    positionX: "5%",
    duration: 4,
    delay: 2,
    width: "65px",
    imgWidth: 65,
    imgHeight: 81,
    rotation: "15deg",
    opacity: 1,
    blur: "3px",
  },
];

const Footer = () => {
  return (
    <footer className="h-auto lg:h-screen md:h-[60vh] bg-hero-gradient w-full md:py-5 pb-5 py-16 relative overflow-hidden font-ubuntu">
      <RainEffect items={rainItems} />
      {/* Absolute Background Icons */}
      <div className="absolute w-full flex flex-row justify-between right-0 opacity-10 -bottom-20 z-0">
        <OnionThreeIcon
          className="w-80 h-80 md:w-[600px] md:h-[600px] -ml-48 rotate-[-20deg]"
          color="var(--secondary-beige)"
        />
        <GarlicTwoIcon
          className="w-80 h-80 md:w-[600px] md:h-[600px] -mr-32 rotate-[15deg]"
          color="var(--secondary-beige)"
        />
      </div>

      <div className="mx-auto flex flex-col h-full w-full px-10 md:px-15 relative z-20">
        {/* Top Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:border-b md:border-secondary-beige/30 shrink-0">
          <SazonovaLettersIcon
            width="200"
            height="100"
            className="w-100 h-100"
            color="var(--secondary-beige)"
          />

          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/sazonova.ve/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Sazonova"
              className="bg-secondary-beige text-primary-red rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition"
            >
              <InstagramIcon className="w-6 h-6 fill-current" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@sazonova.ve"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Sazonova"
              className="bg-secondary-beige text-primary-red rounded-full w-10 h-10 flex items-center justify-center hover:opacity-80 transition"
            >
              <TikTokIcon className="w-5 h-5 fill-current" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-10 text-secondary-beige h-full">
          <div className="flex flex-col md:flex-row gap-[15vw] w-fit md:mx-auto">
            <div className="flex flex-col">
              <h4 className="text-xl font-medium mb-4">Menú</h4>
              <ul className="space-y-3 font-light text-1xl font-ubuntu">
                <li>
                  <a href="/" className="hover:opacity-80 transition">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:opacity-80 transition">
                    Recetas
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:opacity-80 transition">
                    Nosotros
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-xl font-medium mb-4">Marcas Aliadas</h4>
              <ul className="space-y-3 font-light text-1xl font-ubuntu">
                <li>
                  <a href="/" className="hover:opacity-80 transition">
                    La Casa de los Condimentos
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:opacity-80 transition">
                    Distribuidora Grimar
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:opacity-80 transition ">
                    Se distribuidor
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-xl font-medium mb-4">Contáctanos</h4>
              <ul className="space-y-3 font-light text-1xl font-ubuntu">
                <li>
                  <a
                    href="mailto:mysazonova@gmail.com"
                    className="hover:opacity-80 transition"
                  >
                    mysazonova@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+584222828001"
                    className="hover:opacity-80 transition"
                  >
                    +58 422-2828001
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 pb-2 border-t border-secondary-beige/30 text-center shrink-0">
          <p className="font-ubuntu text-secondary-beige text-xs font-light">
            2026 Sazonova. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
