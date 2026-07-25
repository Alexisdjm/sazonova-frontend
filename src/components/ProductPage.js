import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Header,
  Footer,
  FeaturedRecipes,
  ProductInformation,
  RepeatingBrandBackground,
} from "./";
import { useProducts } from "../context/ProductsContext";

const ProductPage = () => {
  const { slug } = useParams();
  const { getBySlug, getRelated, isLoading } = useProducts();

  const product = useMemo(() => getBySlug(slug), [getBySlug, slug]);
  const relatedProduct = useMemo(
    () => getRelated(slug),
    [getRelated, slug],
  );

  if (!slug?.trim()) {
    return <Navigate to="/404" replace />;
  }

  if (!isLoading && !product) {
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
