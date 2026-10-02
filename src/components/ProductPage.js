import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  Header,
  Footer,
  FeaturedRecipes,
  ProductInformation,
  RepeatingBrandBackground,
  Breadcrumbs,
} from "./";
import { useProducts } from "../context/ProductsContext";
import JsonLd from "./JsonLd";
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "../seo/jsonLd";
import { toMetaDescription, usePageMeta } from "../seo/usePageMeta";

const ProductPage = () => {
  const { slug } = useParams();
  const { getBySlug, getRelated, isLoading } = useProducts();

  const product = useMemo(() => getBySlug(slug), [getBySlug, slug]);
  const relatedProduct = useMemo(() => getRelated(slug), [getRelated, slug]);
  const productJsonLd = useMemo(() => buildProductJsonLd(product), [product]);
  const breadcrumbJsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Inicio", path: "/" },
        { name: "Productos", path: "/products/all" },
        { name: product?.name || "Producto", path: `/product/${slug}` },
      ]),
    [product?.name, slug],
  );

  usePageMeta({
    title: product
      ? `${product.name} Sazonova${product.quantity ? ` | ${product.quantity}` : ""}`
      : "Producto Sazonova",
    description: toMetaDescription(
      product?.description,
      "Ajo molido y adobo en polvo de Sazonova. Condimentos para sazonar cada plato.",
    ),
    path: `/product/${slug || ""}`,
    image: product?.primary_image || undefined,
  });

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
        <main className="relative pt-28 md:pt-32 pb-12 md:pb-20">
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
      <JsonLd data={[productJsonLd, breadcrumbJsonLd]} />
      <Header scrollAware={false} />
      <main className="relative pt-28 md:pt-24 pb-12 md:pb-20">
        <div className="relative z-10">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 mb-4 sm:mb-6">
            <Breadcrumbs
              items={[
                { label: "Inicio", to: "/" },
                { label: "Productos", to: "/products/all" },
                { label: product.name },
              ]}
            />
          </div>
        </div>
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
