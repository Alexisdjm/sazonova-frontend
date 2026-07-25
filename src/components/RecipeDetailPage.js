import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Header,
  Footer,
  RecipeDetail,
  FeaturedRecipes,
  RepeatingBrandBackground,
  Breadcrumbs,
} from "./";
import { useRecipes } from "../context/RecipesContext";

const RecipeDetailPage = () => {
  const { slug } = useParams();
  const { recipes, isLoading } = useRecipes();

  const recipe = useMemo(
    () => recipes.find((r) => r.slug === slug),
    [recipes, slug],
  );

  if (!slug?.trim()) {
    return <Navigate to="/404" replace />;
  }

  if (!isLoading && !recipe) {
    return <Navigate to="/404" replace />;
  }

  if (!recipe) {
    return null;
  }

  return (
    <>
      <Header scrollAware={false} />
      <main className="relative pt-28 md:pt-32 pb-20">
        <RepeatingBrandBackground opacity={0.4} />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-4 sm:mb-6">
            <Breadcrumbs
              items={[
                { label: "Inicio", to: "/" },
                { label: "Recetas", to: "/recipes" },
                { label: recipe.name },
              ]}
            />
          </div>
          <RecipeDetail recipe={recipe} />
          <div className="mt-12 md:mt-16">
            <FeaturedRecipes />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecipeDetailPage;
