import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/exporting";
import { OnionIcon, GarlicIcon } from "./icons";
import HeroDecorImage from "./HeroDecorImage";

/** Por debajo de `lg` el hero de productos no se parte: alterna un solo color. */
const PRODUCTS_MOBILE_QUERY = "(max-width: 1023px)";
const PRODUCTS_TONE_MS = 7000;

/** Fondo de botellas del hero. `base` = móvil; `lg` = escritorio (≥1024px). */
const heroDecorItems = [
  {
    product: "ajo",
    size: "clamp(35px, 12vw, 60px)",
    blur: "2px",
    rotate: { base: "50deg", lg: "-55deg" },
    right: { base: "-1%", lg: "25%" },
    bottom: "-8%",
  },
  {
    product: "adobo",
    size: "clamp(45px, 15vw, 75px)",
    blur: "2px",
    rotate: "-30deg",
    left: "-3%",
    bottom: "-5%",
  },
  {
    product: "ajo",
    size: "clamp(45px, 12vw, 60px)",
    blur: "3px",
    rotate: { base: "40deg", lg: "60deg" },
    left: { base: "40%", lg: "70%" },
    top: { base: "-4%", lg: "-6%" },
  },
  {
    product: "adobo",
    size: "clamp(45px, 15vw, 75px)",
    blur: "4px",
    rotate: { base: "-30deg", lg: "15deg" },
    right: { base: "-7%", lg: "-2%" },
    top: { base: "55%", lg: "70%" },
  },
  {
    product: "adobo",
    size: "clamp(35px, 12vw, 60px)",
    blur: "2px",
    rotate: { base: "30deg", lg: "-100deg" },
    left: { base: "-4%", lg: "25%" },
    top: { base: "20%", lg: "-8%" },
  },
  {
    product: "ajo",
    size: "clamp(45px, 12vw, 75px)",
    blur: "3px",
    rotate: { base: "10deg", lg: "-35deg" },
    right: { base: "-5%", lg: "-1%" },
    top: { base: "15%", lg: "25%" },
  },
  {
    product: "adobo",
    size: "clamp(55px, 20vw, 75px)",
    blur: "4px",
    rotate: "10deg",
    left: { base: "-7%", lg: "-2%" },
    top: { base: "50%", lg: "35%" },
  },
  {
    product: "ajo",
    size: "clamp(35px, 12vw, 60px)",
    blur: "2px",
    rotate: { base: "10deg", lg: "55deg" },
    left: { base: "40%", lg: "30%" },
    bottom: "-8%",
  },
];

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
 * @param {"default"|"split"} [props.variant] - split: mitades rojo/naranja (página de productos)
 */
const HeroBanner = ({
  children,
  ajoTo = "/product/ajo-molido",
  adoboTo = "/product/adobo-completo",
  ajoAlt = "Ajo Molido Sazonova",
  adoboAlt = "Adobo Completo Sazonova",
  variant = "default",
}) => {
  const isSplit = variant === "split";
  const [isCompact, setIsCompact] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(PRODUCTS_MOBILE_QUERY).matches
  );
  const [tone, setTone] = useState("ajo");

  useEffect(() => {
    if (!isSplit) return undefined;
    const media = window.matchMedia(PRODUCTS_MOBILE_QUERY);
    const sync = () => setIsCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [isSplit]);

  useEffect(() => {
    if (!isSplit || !isCompact) return undefined;
    const id = window.setInterval(() => {
      setTone((current) => (current === "ajo" ? "adobo" : "ajo"));
    }, PRODUCTS_TONE_MS);
    return () => window.clearInterval(id);
  }, [isSplit, isCompact]);

  const mobileTone = isSplit && isCompact;
  const ajoBobbing = mobileTone && tone === "ajo";
  const adoboBobbing = mobileTone && tone === "adobo";

  return (
    <div
      data-tone={mobileTone ? tone : undefined}
      className={`relative w-[100vw] overflow-hidden ${
        isSplit
          ? "h-screen bg-products-split"
          : "h-screen bg-hero-gradient bg-fixed max-h-[800px]"
      }`}
    >
      {mobileTone && (
        <>
          <div className="absolute inset-0 bg-products-red" aria-hidden="true" />
          <div
            className={`products-tone-orange absolute inset-0 bg-products-orange ${
              tone === "adobo" ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </>
      )}
      <OnionIcon
        className="hidden lg:block absolute lg:-bottom-[10%] -left-[10%] rotate-[-15deg] opacity-10 max-w-[600px] max-h-[600px] w-[100vw] h-[100vw] lg:w-[45vw] lg:h-[45vw]"
        color="#4D0005"
      />
      <GarlicIcon
        className="absolute -bottom-[10%] -right-[10%] rotate-[15deg] opacity-10 max-w-[600px] max-h-[600px] w-[500px] h-[500px] lg:w-[45vw] lg:h-[45vw]"
        color="#4D0005"
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}

        <div
          className={
            isSplit
              ? "absolute z-20 flex w-full justify-between px-[5%] bottom-[clamp(0.5rem,3vh,1.5rem)] lg:bottom-auto lg:top-[62%] lg:-translate-y-1/2 lg:px-[16%] xl:px-[18%] pointer-events-none"
              : "absolute flex gap-6 lg:gap-10 lg:w-[50rem] lg:justify-between flex-row bottom-[clamp(2rem,7vh,8rem)] lg:bottom-[5rem] z-20"
          }
        >
          <Link
            to={ajoTo}
            aria-label={ajoAlt}
            className={`group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-beige rounded-sm ${isSplit ? "pointer-events-auto" : ""}`}
          >
            <span
              className={`inline-block group-hover:animate-bob-short ${
                ajoBobbing ? "animate-bob-short" : ""
              }`}
            >
              <img
                className={`${bottleBaseClass} rotate-[-10deg] lg:rotate-[-10deg] ${
                  ajoBobbing
                    ? "drop-shadow-[0_16px_28px_rgba(125,3,10,0.75)]"
                    : "drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_16px_28px_rgba(125,3,10,0.75)]"
                }`}
                src={ajoLcpSrc}
                alt={ajoAlt}
                fetchPriority="high"
              />
            </span>
          </Link>

          <Link
            to={adoboTo}
            aria-label={adoboAlt}
            className={`group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-beige rounded-sm ${isSplit ? "pointer-events-auto" : ""}`}
          >
            <span
              className={`inline-block group-hover:animate-bob-short ${
                adoboBobbing ? "animate-bob-short" : ""
              }`}
            >
              <img
                className={`${bottleBaseClass} rotate-[10deg] lg:rotate-[10deg] ${
                  adoboBobbing
                    ? "drop-shadow-[0_16px_28px_rgba(228,126,26,0.75)]"
                    : "drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_16px_28px_rgba(228,126,26,0.75)]"
                }`}
                src={images.adobo}
                alt={adoboAlt}
              />
            </span>
          </Link>
        </div>

        {heroDecorItems.map((item, index) => (
          <HeroDecorImage key={`${item.product}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
