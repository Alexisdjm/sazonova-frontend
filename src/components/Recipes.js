import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RecipeCard } from "./index";
import images from "../assets/exporting";
import { GarlicTwoIcon, OnionThreeIcon } from "./icons";
import { CustomLeftArrow, CustomRightArrow, CustomDot } from "./CarouselControls";
import BrandSpin from "./BrandSpin";
import AnimatedButton from "./AnimatedButton";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  }
};

const Recipes = () => {
  return (
    <>
    <div className="relative w-full bg-[#650208] bg-fixed overflow-hidden">
      <div className="w-fit mx-auto pt-24 flex flex-col items-center justify-center relative z-10">
        <h2
          data-text="conoce"
          className="isolate relative uppercase font-sugo md:text-8xl text-6xl font-medium text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_#650208]"
        >
          conoce
        </h2>
        <h1
          data-text="nuestra"
          className="isolate relative uppercase font-sugo md:-mt-6 -mt-4 md:text-8xl text-6xl font-medium text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_#650208]"
        >
          nuestra
        </h1>
        <h3
          data-text="marca"
          className="isolate relative font-calling-heart md:-mt-10 -mt-6 md:text-8xl text-7xl font-bold text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:12px_#650208]"
        >
          marca
        </h3>
        </div>
        <div className="relative z-10 w-[80%] max-w-10xl mx-auto px-2 sm:px-7">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={true}
            removeArrowOnDeviceType={["mobile","tablet"]}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot />}
            dotListClass="!bottom-0"
            itemClass="px-2 flex justify-center"
            containerClass="carousel-container !pb-14"
          >
            <RecipeCard image={images.carne1} title="Costillas de Cerdo" description="6 ingredientes - 50min" time="15 min" />
            <RecipeCard image={images.carne2} title="Pollo al Adobo" description="Sabor tradicional." time="40 min" />
            <RecipeCard image={images.carne3} title="Sopa de Especias" description="Un abrazo al alma." time="25 min" />
            <RecipeCard image={images.carne4} title="Carne Marinada" description="Textura jugosa." time="60 min" />
            <RecipeCard image={images.empanadas} title="Papas con Ajo" description="Acompañante ideal." time="20 min" />
            <RecipeCard image={images.pescado} title="Pescado Horneado" description="Fresco y ligero." time="30 min" />
          </Carousel>
        </div>
        <div className="w-fit mx-auto my-10 relative z-10">
          <AnimatedButton
            styleKind="style3"
            className="cursor-pointer">Ver Recetas</AnimatedButton>
        </div>

        <OnionThreeIcon color="#78030A" width={400} height={400} className="rotate-12 absolute z-[0] top-[2em] right-[25%]" />
        <GarlicTwoIcon color="#78030A" width={400} height={400} className="rotate-[-12deg] absolute z-[0] bottom-[-7%] left-[25%]" />
        <img width={250} height={250} src={images.cuchara} alt="cuchara" className="rotate-[-90deg] absolute z-[0] -top-[2.5em] left-20" />
        <BrandSpin width={70} height={70} className="absolute z-[0] bottom-10 left-10 opacity-80" />
    </div>
    </>
  )
}

export default Recipes
