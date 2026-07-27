import { Link } from "react-router-dom";
import images from "../assets/exporting";
import { OnionIcon, GarlicIcon } from "./icons";

const bottleBaseClass =
  "lg:w-[175px] lg:h-[350px] w-[clamp(80px,30vw,150px)] h-auto object-contain transition-[filter] duration-300";

/** Misma URL que el preload en public/index.html (LCP del hero). */
const ajoLcpSrc = `${process.env.PUBLIC_URL || ""}/images/ajo.webp`;

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.ajoTo] - Ruta del producto Ajo (ej. /product/ajo-molido)
 * @param {string} [props.adoboTo] - Ruta del producto Adobo/Comino (ej. /product/adobo-completo)
 * @param {string} [props.ajoAlt]
 * @param {string} [props.adoboAlt]
 */
const HeroBanner = ({
  children,
  ajoTo = "/product/ajo-molido",
  adoboTo = "/product/adobo-completo",
  ajoAlt = "Ajo Molido Sazonova",
  adoboAlt = "Adobo Completo Sazonova",
}) => {
  return (
    <div className="relative w-[100vw] h-screen bg-hero-gradient bg-fixed overflow-hidden max-h-[800px]">
      <OnionIcon
        className="hidden lg:block absolute lg:-bottom-[10%] -left-[10%] rotate-[-15deg] opacity-10 max-w-[600px] max-h-[600px] w-[100vw] h-[100vw] lg:w-[45vw] lg:h-[45vw]"
        color="#4D0005"
      />
      <GarlicIcon
        className="absolute -bottom-[10%] -right-[10%] rotate-[15deg] opacity-10 max-w-[600px] max-h-[600px] w-[500px] h-[500px] lg:w-[45vw] lg:h-[45vw]"
        color="#4D0005"
      />
      <div className="w-full h-full flex flex-col items-center justify-center">
        {children}

        <div className="absolute flex gap-6 lg:gap-10 lg:w-[50rem] lg:justify-between flex-row bottom-[clamp(2rem,7vh,8rem)] lg:bottom-[5rem] z-20">
          <Link
            to={ajoTo}
            aria-label={ajoAlt}
            className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-beige rounded-sm"
          >
            <span className="inline-block group-hover:animate-bob-short">
              <img
                className={`${bottleBaseClass} rotate-[-10deg] lg:rotate-[-10deg] drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_16px_28px_rgba(125,3,10,0.75)]`}
                src={ajoLcpSrc}
                alt={ajoAlt}
                fetchPriority="high"
              />
            </span>
          </Link>

          <Link
            to={adoboTo}
            aria-label={adoboAlt}
            className="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-beige rounded-sm"
          >
            <span className="inline-block group-hover:animate-bob-short">
              <img
                className={`${bottleBaseClass} rotate-[10deg] lg:rotate-[10deg] drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_16px_28px_rgba(228,126,26,0.75)]`}
                src={images.adobo}
                alt={adoboAlt}
              />
            </span>
          </Link>
        </div>

        <img
          className="absolute lg:rotate-[-55deg] rotate-[50deg] lg:right-[25%] -right-[1%] -bottom-[8%] w-[clamp(35px,12vw,60px)] blur-[2px]"
          src={images.ajo}
          alt=""
        />
        <img
          className="absolute rotate-[-30deg] -left-[3%] -bottom-[5%] w-[clamp(45px,15vw,75px)] blur-[2px]"
          src={images.adobo}
          alt=""
        />
        <img
          className="absolute rotate-[40deg] lg:rotate-[60deg] lg:left-[70%] lg:top-[-6%] left-[40%] top-[-4%] w-[clamp(45px,12vw,60px)] blur-[3px]"
          src={images.ajo}
          alt=""
        />
        <img
          className="absolute rotate-[-30deg] lg:rotate-[15deg] lg:right-[-2%] right-[-7%] lg:top-[70%] top-[55%] w-[clamp(45px,15vw,75px)] blur-[4px]"
          src={images.adobo}
          alt=""
        />
        <img
          className="absolute rotate-[30deg] lg:rotate-[-100deg] lg:left-[25%] left-[-4%] top-[20%] lg:top-[-8%] w-[clamp(35px,12vw,60px)] blur-[2px]"
          src={images.adobo}
          alt=""
        />
        <img
          className="absolute lg:rotate-[-35deg] rotate-[10deg] lg:right-[-1%] right-[-5%] lg:top-[25%] top-[15%] w-[clamp(45px,12vw,75px)] blur-[3px]"
          src={images.ajo}
          alt=""
        />
        <img
          className="absolute rotate-[10deg] lg:left-[-2%] left-[-7%] lg:top-[35%] top-[50%] w-[clamp(55px,20vw,75px)] blur-[4px]"
          src={images.adobo}
          alt=""
        />
        <img
          className="absolute lg:rotate-[55deg] rotate-[10deg] lg:left-[30%] left-[40%] bottom-[-8%] w-[clamp(35px,12vw,60px)] blur-[2px]"
          src={images.ajo}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroBanner;
