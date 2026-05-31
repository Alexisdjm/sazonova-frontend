import { createContext, useContext, useEffect, useState } from "react";
import { buildApiUrl, resolveMediaUrl } from "../config/env";

const RecipesContext = createContext(null);

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchRecipes = async () => {
      try {
        const response = await fetch(buildApiUrl("/api/recipes/all/"));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const raw = Array.isArray(data) ? data : data.results || [];
        const list = raw.map((recipe) => ({
          ...recipe,
          card_image: resolveMediaUrl(recipe.card_image),
          detailed_image: resolveMediaUrl(recipe.detailed_image),
        }));
        if (!cancelled) setRecipes(list);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        if (!cancelled) {
          setError(err);
          setRecipes([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchRecipes();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, isLoading, error }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error("useRecipes debe usarse dentro de RecipesProvider");
  }
  return context;
};
