import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RecipeCard } from "./index";
import { CustomLeftArrow, CustomRightArrow, CustomDot } from "./CarouselControls";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  }
};

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(`${url}/api/recipes/all/`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.results || [];
        setRecipes(list);
      } catch (err) {
        console.error("Error fetching featured recipes:", err);
        setRecipes([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const items = recipes.slice(0, 6);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-sugo text-center mb-8">Recetas Destacadas</h2>
        {isLoading ? (
          <p className="text-center py-8 font-ubuntu">Cargando recetas destacadas...</p>
        ) : items.length === 0 ? (
          <h1 className="text-center py-8 font-sugo text-2xl">No hay resultados</h1>
        ) : (
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={true}
            removeArrowOnDeviceType={["mobile", "tablet"]}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot colorClass="bg-primary-red" />}
            dotListClass="!bottom-0"
            itemClass="px-2 flex justify-center"
            containerClass="carousel-container !pb-14"
          >
            {items.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={recipe.recipe_image}
                title={recipe.name}
                time={recipe.preparation_time}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
