import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Header, Footer, RecipeDetail, FeaturedRecipes } from "./";
import { useRecipes } from "../context/RecipesContext";

const RecipeDetailPage = () => {
  const { slug } = useParams();
  const { recipes, isLoading } = useRecipes();

  const recipe = useMemo(
    () => recipes.find((r) => r.slug === slug),
    [recipes, slug]
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
      <main className="pt-28 md:pt-32 pb-20">
        <RecipeDetail recipe={recipe} />
        <div className="mt-12 md:mt-16">
          <FeaturedRecipes />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecipeDetailPage;
