import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Header,
  Footer,
  FeaturedRecipes,
  ProductInformation,
  RepeatingBrandBackground,
} from "./";
import { buildApiUrl, resolveMediaUrl } from "../config/env";

const normalizeProduct = (raw) => {
  if (!raw || typeof raw !== "object") return null;
  return {
    ...raw,
    image: resolveMediaUrl(raw.image || raw.card_image || raw.detailed_image),
    card_image: resolveMediaUrl(raw.card_image),
    detailed_image: resolveMediaUrl(raw.detailed_image),
    nutritional_info: resolveMediaUrl(raw.nutritional_info),
  };
};

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug?.trim()) return;

    let cancelled = false;

    const fetchProduct = async () => {
      setIsLoading(true);
      setNotFound(false);
      setProduct(null);
      setRelatedProduct(null);

      try {
        const response = await fetch(
          buildApiUrl(`/api/products/${encodeURIComponent(slug)}/`),
        );

        if (response.status === 404) {
          if (!cancelled) setNotFound(true);
          return;
        }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        const normalized = normalizeProduct(data);
        if (!cancelled) setProduct(normalized);

        // Otro producto para "Podría Gustarte" (solo hay 2).
        try {
          const allRes = await fetch(buildApiUrl("/api/products/all/"));
          if (allRes.ok) {
            const allData = await allRes.json();
            const list = (
              Array.isArray(allData) ? allData : allData.results || []
            ).map(normalizeProduct);
            const other = list.find(
              (p) => p?.slug && p.slug !== normalized.slug,
            );
            if (!cancelled && other) setRelatedProduct(other);
          }
        } catch {
          /* related opcional */
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!slug?.trim()) {
    return <Navigate to="/404" replace />;
  }

  if (!isLoading && (notFound || !product)) {
    return <Navigate to="/404" replace />;
  }

  if (isLoading || !product) {
    return (
      <>
        <Header scrollAware={false} />
        <main className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-20">
          <RepeatingBrandBackground opacity={0.4} />
          <p className="relative z-10 text-center py-16 font-ubuntu text-primary-red">
            Cargando producto...
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header scrollAware={false} />
      <main className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-20">
        <RepeatingBrandBackground opacity={0.4} />
        <div className="relative z-10">
          <ProductInformation
            product={product}
            relatedProduct={relatedProduct}
          />
          <div className="mt-12 md:mt-16">
            <FeaturedRecipes />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
