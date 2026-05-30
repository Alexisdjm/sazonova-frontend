import {
  Header,
  HeroBanner,
  RecipesGallery,
  FeaturedRecipes,
  Footer,
} from "./";
import images from "../assets/exporting";

const RecipesPage = () => {
  return (
    <>
      <Header />
      <HeroBanner>
        <div className="w-full flex flex-col items-center mb-[clamp(5rem,20vh,7rem)] lg:mb-0">
          <h1
            data-text="las mejores"
            className="isolate relative text-6xl lg:text-7xl font-medium font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            las mejores
          </h1>
          <h2
            data-text="recetas"
            className="isolate -mt-5 lg:-mt-6 relative text-8xl lg:text-9xl font-sugo text-secondary-beige text-center uppercase tracking-[5px] before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:16px_transparent]"
          >
            recetas
          </h2>
          <h3
            data-text="para tu cocina"
            className="isolate -mt-6 lg:-mt-10 relative text-7xl lg:text-8xl font-calling-heart text-secondary-beige text-center lowercase before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:bg-hero-gradient before:bg-fixed before:bg-clip-text before:text-transparent before:[-webkit-text-stroke:12px_transparent]"
          >
            para tu cocina
          </h3>
        </div>
        <p className="lg:block hidden text-secondary-beige text-center w-[80%] lg:w-[35%] text-[12px]">
          Descubre recetas irresistibles donde el adobo y el ajo en polvo elevan
          cada plato.
        </p>
        <div className="absolute flex gap-6 lg:gap-10 lg:w-[50rem] lg:justify-between flex-row bottom-[clamp(2rem,7vh,8rem)] lg:bottom-[5rem] z-20">
          <img
            className="lg:w-[175px] lg:h-[350px] lg:rotate-[-10deg] w-[clamp(80px,30vw,150px)] h-auto object-contain rotate-[-10deg] drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
            src={images.ajo}
            alt=""
          />
          <img
            className="lg:w-[175px] lg:h-[350px] lg:rotate-[10deg] w-[clamp(80px,30vw,150px)] h-auto object-contain rotate-[10deg] drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
            src={images.adobo}
            alt=""
          />
        </div>
      </HeroBanner>
      <section className="relative overflow-hidden">
        <RecipesGallery />
        <FeaturedRecipes />
        <img
          width={70}
          height={250}
          src={images.powder}
          alt="powder"
          className="absolute z-[0] bottom-[30%] right-0"
        />
        <img
          width={70}
          height={250}
          src={images.powder}
          alt="powder"
          className="absolute z-[0] top-[15%] left-0 rotate-180"
        />
      </section>
      <Footer />
    </>
  );
};

export default RecipesPage;
