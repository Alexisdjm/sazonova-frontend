import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { buildApiUrl, resolveMediaUrl } from "../config/env";

const ProductsContext = createContext(null);

const normalizeProduct = (raw) => {
  if (!raw || typeof raw !== "object") return null;

  const images = Array.isArray(raw.images)
    ? [...raw.images]
        .map((img) => ({
          ...img,
          url: resolveMediaUrl(img?.url),
        }))
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    : [];

  const primaryImage =
    resolveMediaUrl(raw.primary_image) ||
    images[0]?.url ||
    resolveMediaUrl(raw.image || raw.card_image || raw.detailed_image) ||
    "";

  return {
    ...raw,
    images,
    primary_image: primaryImage,
    image: primaryImage,
    card_image: resolveMediaUrl(raw.card_image),
    detailed_image: resolveMediaUrl(raw.detailed_image),
    nutritional_info: resolveMediaUrl(raw.nutritional_info),
  };
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchProducts = async () => {
      try {
        const response = await fetch(buildApiUrl("/api/products/all/"));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const raw = Array.isArray(data) ? data : data.results || [];
        const list = raw.map(normalizeProduct).filter(Boolean);
        if (!cancelled) setProducts(list);
      } catch (err) {
        console.error("Error fetching products:", err);
        if (!cancelled) {
          setError(err);
          setProducts([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      products,
      isLoading,
      error,
      getBySlug: (slug) => products.find((p) => p.slug === slug) || null,
      getRelated: (slug) =>
        products.find((p) => p.slug && p.slug !== slug) || null,
    }),
    [products, isLoading, error],
  );

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts debe usarse dentro de ProductsProvider");
  }
  return context;
};
