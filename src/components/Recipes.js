import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RecipeCard } from "./index";
import images from "../assets/exporting";

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

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-0 md:left-2 top-1/2 -translate-y-[calc(50%+2rem)] bg-secondary-beige text-[#650208] p-3 rounded-full z-10 hover:scale-110 transition-transform shadow-lg"
      aria-label="Previous"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute right-0 md:right-2 top-1/2 -translate-y-[calc(50%+2rem)] bg-secondary-beige text-[#650208] p-3 rounded-full z-10 hover:scale-110 transition-transform shadow-lg"
      aria-label="Next"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  );
};

const CustomDot = ({ onClick, active }) => {
  return (
    <li className="mx-1">
      <button
        style={{ cursor: "pointer" }}
        className={`block h-3 rounded-full transition-all duration-300 ${active ? "bg-[#FFEDCE] w-8 shadow-md" : "bg-[#FFEDCE] w-3 opacity-50 hover:opacity-100"}`}
        onClick={() => onClick()}
      />
    </li>
  );
};

const Recipes = () => {
  return (
    <>
    <div className="w-full h-[900px] bg-[#650208] bg-fixed overflow-hidden">
      <div className="w-fit mx-auto pt-24 flex flex-col items-center justify-center">
        <h2
          data-text="conoce"
          className="isolate relative uppercase font-sugo text-8xl font-medium text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_#650208]"
        >
          conoce
        </h2>
        <h1
          data-text="nuestra"
          className="isolate relative uppercase font-sugo -mt-6 text-8xl font-medium text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:16px_#650208]"
        >
          nuestra
        </h1>
        <h3
          data-text="marca"
          className="isolate relative font-calling-heart -mt-10 text-8xl font-bold text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:12px_#650208]"
        >
          marca
        </h3>
        </div>
        <div className="w-[80%] max-w-10xl mx-auto px-2 sm:px-7">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={true}
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
    </div>
    </>
  )
}

export default Recipes
