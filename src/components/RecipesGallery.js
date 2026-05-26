import { useEffect, useState } from "react";
import { RecipeCard } from "./index";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1366 }, items: 4 },
  desktop: { breakpoint: { max: 1365, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const getColumnsFromWidth = (width) => {
  for (const key in responsive) {
    const { breakpoint, items } = responsive[key];
    if (width <= breakpoint.max && width >= breakpoint.min) return items;
  }
  return 1;
};

const RecipesGallery = () => {
  const [columns, setColumns] = useState(() => (typeof window !== 'undefined' ? getColumnsFromWidth(window.innerWidth) : 1));
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://127.0.0.1:8000";

  useEffect(() => {
    const handleResize = () => setColumns(getColumnsFromWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${url}/api/recipes/all/`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.results || [];
        setRecipes(list);
      } catch (error) {
        console.error('Error fetching gallery recipes:', error);
        setRecipes([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-sugo text-center mb-6">Galería de Recetas</h2>
        {isLoading ? (
          <p className="text-center py-8 font-ubuntu">Cargando recetas...</p>
        ) : recipes.length === 0 ? (
          <h1 className="text-center py-8 font-sugo text-2xl">No hay resultados</h1>
        ) : (
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
          >
            {recipes.map((r) => (
              <div key={r.id} className="flex justify-center">
                <RecipeCard
                  image={r.recipe_image}
                  title={r.name}
                  time={r.preparation_time}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipesGallery;
