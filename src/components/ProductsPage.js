import { Header, HeroBanner } from "./";
import ProductButton from "./ProductButton";
import JsonLd from "./JsonLd";
import { useProducts } from "../context/ProductsContext";
import {
  buildBreadcrumbJsonLd,
  buildProductItemListJsonLd,
} from "../seo/jsonLd";
import { usePageMeta } from "../seo/usePageMeta";

const ProductsPage = () => {
  const { products } = useProducts();

  usePageMeta({
    title: "Productos Sazonova | Ajo Molido y Adobo Completo",
    description:
      "Ajo Molido y Adobo Completo de Sazonova. Condimentos en polvo para sazonar carnes, guisos, arroz y más.",
    path: "/products/all",
  });

  return (
    <>
      <JsonLd
        data={[
          buildProductItemListJsonLd(products),
          buildBreadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Productos", path: "/products/all" },
          ]),
        ]}
      />
      <Header />
      <HeroBanner variant="split">
        <div className="relative z-10 w-full flex flex-col items-center px-4 mb-[clamp(7rem,22vh,10rem)] lg:mb-0 pointer-events-none">
          <h1
            data-text="dos grandes"
            className="products-title-stroke isolate relative font-sugo text-6xl sm:text-7xl lg:text-[84px] font-medium uppercase tracking-[4px] text-secondary-beige text-center before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10"
          >
            dos grandes
          </h1>
          <h2
            data-text="sabores"
            className="products-title-stroke isolate relative -mt-5 sm:-mt-6 lg:-mt-8 font-sugo text-7xl sm:text-8xl lg:text-9xl font-medium uppercase tracking-[4px] text-secondary-beige text-center before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10"
          >
            sabores
          </h2>
          <h3
            data-text="elige el tuyo"
            className="products-title-stroke products-title-stroke-script isolate relative -mt-6 sm:-mt-8 lg:-mt-10 font-calling-heart text-6xl sm:text-7xl lg:text-8xl text-secondary-beige text-center lowercase before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10"
          >
            elige el tuyo
          </h3>
          <p className="mt-3 max-w-[16rem] sm:max-w-md text-center font-ubuntu text-[11px] sm:text-sm leading-snug text-secondary-beige">
            Descubre recetas irresistibles donde el adobo y el ajo en polvo
            elevan cada plato.
          </p>
          <div className="relative z-30 mt-4 flex items-center gap-3 pointer-events-auto">
            <ProductButton color="red" to="/product/ajo-molido">
              Ajo Molido
            </ProductButton>
            <ProductButton color="orange" to="/product/adobo-completo">
              Adobo
            </ProductButton>
          </div>
        </div>
      </HeroBanner>
    </>
  );
};

export default ProductsPage;
