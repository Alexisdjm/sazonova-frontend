import { useEffect, useState } from "react";
import { RecipeCard } from "./index";
import { useRecipes } from "../context/RecipesContext";
import { SazonovaIcon } from "./icons";
import images from "../assets/exporting";
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1366 }, items: 4 },
  desktop: { breakpoint: { max: 1365, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const getColumnsFromWidth = (width) => {
  for (const key in responsive) {
    const { breakpoint, items } = responsive[key];
    if (width <= breakpoint.max && width >= breakpoint.min) return items;
  }
  return 1;
};

const RecipesGallery = () => {
  const [columns, setColumns] = useState(() =>
    typeof window !== "undefined" ? getColumnsFromWidth(window.innerWidth) : 1,
  );
  const { recipes, isLoading } = useRecipes();

  useEffect(() => {
    const handleResize = () =>
      setColumns(getColumnsFromWidth(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-12 relative mt-20">
      <img
        width={250}
        height={250}
        src={images.cuchara}
        alt="cuchara"
        className="rotate-[0deg] absolute z-[0] -top-[0] -right-10"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <SazonovaIcon
          color="var(--adobo-orange-bg)"
          width="min(90vw, 620px)"
          height="min(94vw, 645px)"
          boxShadow="0 10px 20px rgba(101, 2, 8, 0.15), 0 28px 56px rgba(101, 2, 8, 0.2)"
          className="opacity-[0.09]"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-sugo text-5xl font-medium text-brand-orange">
            NUESTRAS
          </h2>
          <h2 className="font-calling-heart text-5xl font-medium text-primary-red">
            Elecciones
          </h2>
        </div>
        {isLoading ? (
          <p className="text-center py-8 font-ubuntu">Cargando recetas...</p>
        ) : recipes.length === 0 ? (
          <h1 className="text-center py-8 font-sugo text-2xl">
            No hay resultados
          </h1>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {recipes.map((r) => (
              <div key={r.id} className="flex justify-center">
                <RecipeCard
                  slug={r.slug}
                  image={r.card_image}
                  title={r.name}
                  time={r.preparation_time}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipesGallery;
