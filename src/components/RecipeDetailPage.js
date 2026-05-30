import { Link, useParams } from "react-router-dom";
import { Header, Footer } from "./";
import { useRecipes } from "../context/RecipesContext";

const RecipeDetailPage = () => {
  const { slug } = useParams();
  const { recipes, isLoading } = useRecipes();
  const recipe = recipes.find((r) => r.slug === slug);

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 px-6 max-w-3xl mx-auto text-center">
        {isLoading ? (
          <p className="font-ubuntu">Cargando receta...</p>
        ) : !recipe ? (
          <>
            <h1 className="font-sugo text-3xl text-primary-red mb-4">
              Receta no encontrada
            </h1>
            <Link to="/recipes" className="font-ubuntu underline">
              Volver a recetas
            </Link>
          </>
        ) : (
          <>
            <h1 className="font-sugo text-4xl text-primary-red mb-6">
              {recipe.name}
            </h1>
            {recipe.recipe_image && (
              <img
                src={recipe.recipe_image}
                alt={recipe.name}
                className="mx-auto max-w-md w-full h-auto rounded-3xl mb-6"
              />
            )}
            {recipe.preparation_time && (
              <p className="font-ubuntu opacity-70">
                {recipe.preparation_time}
              </p>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default RecipeDetailPage;
