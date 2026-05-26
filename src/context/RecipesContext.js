import { createContext, useContext, useEffect, useState } from "react";

const API_BASE_URL = "http://127.0.0.1:8000";

const RecipesContext = createContext(null);

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/recipes/all/`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const list = Array.isArray(data) ? data : data.results || [];
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
