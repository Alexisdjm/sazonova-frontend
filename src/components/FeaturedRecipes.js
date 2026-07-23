import { useMemo } from "react";
import Carousel from "react-multi-carousel";
import { useRecipes } from "../context/RecipesContext";
import { isRecipeFeatured } from "../utils/recipeUtils";
import "react-multi-carousel/lib/styles.css";
import { RecipeCard } from "./index";
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomDot,
} from "./CarouselControls";

const buildResponsive = (count) => {
  const n = Math.max(count, 1);
  return {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: Math.min(5, n),
    },
    desktop: {
      breakpoint: { max: 1599, min: 1024 },
      items: Math.min(4, n),
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: Math.min(3, n),
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };
};

const FeaturedRecipes = () => {
  const { recipes, isLoading } = useRecipes();

  const items = useMemo(() => recipes.filter(isRecipeFeatured), [recipes]);

  const responsive = useMemo(
    () => buildResponsive(items.length),
    [items.length],
  );
  const maxVisible = Math.min(4, items.length);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-sugo text-5xl font-medium text-brand-orange">
            RECETAS
          </h2>
          <h2 className="font-calling-heart text-5xl font-medium text-primary-red">
            Elecciones
          </h2>
        </div>
        {isLoading ? (
          <p className="text-center py-8 font-ubuntu">
            Cargando recetas destacadas...
          </p>
        ) : items.length === 0 ? (
          <h1 className="text-center py-8 font-sugo text-2xl">
            No hay resultados...
          </h1>
        ) : (
          <Carousel
            key={`featured-${items.length}`}
            responsive={responsive}
            infinite={items.length > maxVisible}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={items.length > maxVisible}
            removeArrowOnDeviceType={["mobile", "tablet"]}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDot colorClass="bg-primary-red" />}
            dotListClass="!bottom-0"
            itemClass="px-2 flex justify-center"
            containerClass="carousel-container pb-14 pt-10"
          >
            {items.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                slug={recipe.slug}
                image={recipe.card_image}
                title={recipe.name}
                time={recipe.preparation_time}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
