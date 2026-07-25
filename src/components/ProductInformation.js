import { useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/exporting";
import useSplitName from "../hooks/useSplitName";

const DESCRIPTION_PREVIEW_LENGTH = 220;

const AccordionItem = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-primary-red">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 py-4 text-left"
    >
      <span className="font-ubuntu text-base sm:text-lg text-primary-red font-bold">
        {title}
      </span>
      <span
        className="flex-shrink-0 text-xl sm:text-2xl leading-none text-primary-red font-light select-none"
        aria-hidden="true"
      >
        {isOpen ? "−" : "+"}
      </span>
    </button>
    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="pb-4 font-ubuntu text-sm sm:text-base text-primary-red/90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const ProductInformation = ({ product, relatedProduct }) => {
  const [descExpanded, setDescExpanded] = useState(false);
  const [openPanels, setOpenPanels] = useState({});
  const { first, rest } = useSplitName(product?.name);

  if (!product) return null;

  const description = product.description?.trim() || "";
  const needsTruncate = description.length > DESCRIPTION_PREVIEW_LENGTH;
  const visibleDescription =
    !needsTruncate || descExpanded
      ? description
      : `${description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trim()}…`;

  const productImage = product.primary_image || product.images?.[0]?.url || "";
  const ingredients = Array.isArray(product.ingredients)
    ? product.ingredients
    : [];

  const togglePanel = (key) => {
    setOpenPanels((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToFeaturedRecipes = (e) => {
    e.preventDefault();
    document
      .getElementById("featured-recipes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 md:gap-10 lg:gap-14">
          <aside className="order-1 w-full max-w-md mx-auto lg:max-w-none lg:w-[40%] lg:mx-0 flex-shrink-0">
            <div className="lg:sticky lg:top-28 xl:top-32">
              <div className="flex items-center justify-center py-2 lg:py-4">
                {productImage ? (
                  <img
                    src={productImage}
                    alt={product.name}
                    className="w-auto max-w-[180px] sm:max-w-[200px] lg:max-w-[280px] max-h-[min(55vh,380px)] h-auto object-contain drop-shadow-[0_20px_32px_rgba(101,2,8,0.25)]"
                  />
                ) : null}
              </div>
            </div>
          </aside>

          <article className="order-2 flex-1 min-w-0">
            <header className="mb-5 sm:mb-6">
              <h1 className="leading-none">
                <span className="block font-sugo text-3xl sm:text-4xl text-brand-orange font-medium tracking-wide">
                  {first}
                </span>
                {rest && (
                  <span className="block font-calling-heart text-5xl sm:text-6xl md:text-7xl text-primary-red font-medium -mt-1 sm:-mt-2">
                    {rest}
                  </span>
                )}
              </h1>
            </header>

            {product.quantity && (
              <p className="font-ubuntu font-bold text-primary-red text-sm sm:text-base mb-4">
                Tamaño disponible: {product.quantity}
              </p>
            )}

            {description && (
              <div className="mb-6 sm:mb-8">
                <p className="font-ubuntu text-sm sm:text-base text-primary-red/90 leading-relaxed">
                  {visibleDescription}
                  {needsTruncate && (
                    <>
                      {" "}
                      <button
                        type="button"
                        onClick={() => setDescExpanded((v) => !v)}
                        className="font-ubuntu font-semibold uppercase underline underline-offset-2 text-primary-red hover:opacity-80 transition-opacity"
                      >
                        {descExpanded ? "Ver menos" : "Ver más"}
                      </button>
                    </>
                  )}
                </p>
              </div>
            )}

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-red text-secondary-beige font-ubuntu font-semibold text-sm sm:text-base px-8 py-3 shadow-[0_8px_16px_rgba(125,3,10,0.25)] transition-opacity hover:opacity-90 mb-6 sm:mb-8"
            >
              DÓNDE COMPRAR
            </Link>

            <div className="w-full flex items-center gap-3 sm:gap-4 rounded-2xl bg-white p-3 sm:p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)] mb-8 sm:mb-10">
              <img
                src={images.carne1}
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover flex-shrink-0"
              />
              <p className="flex-1 min-w-0 font-ubuntu text-sm sm:text-lg text-primary-red font-medium">
                Ver recetas para este producto
              </p>
              <div className="flex items-center gap-2 flex-shrink-0 text-primary-red">
                <button
                  type="button"
                  onClick={scrollToFeaturedRecipes}
                  className="hidden sm:inline font-ubuntu font-bold text-lg underline-offset-2 hover:underline"
                >
                  Explorar
                </button>
                <button
                  type="button"
                  onClick={scrollToFeaturedRecipes}
                  aria-label="Explorar recetas"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-primary-red bg-primary-red text-secondary-beige transition-colors duration-300 hover:bg-transparent hover:text-primary-red"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-10 sm:mb-12">
              <AccordionItem
                title="Detalles del Producto"
                isOpen={!!openPanels.details}
                onToggle={() => togglePanel("details")}
              >
                <p className="whitespace-pre-line">
                  {product.product_details?.trim() ||
                    "Sin detalles disponibles."}
                </p>
              </AccordionItem>

              <AccordionItem
                title="Valor Nutricional"
                isOpen={!!openPanels.nutrition}
                onToggle={() => togglePanel("nutrition")}
              >
                {product.nutritional_info ? (
                  <img
                    src={product.nutritional_info}
                    alt={`Valor nutricional de ${product.name}`}
                    className="w-full max-w-md h-auto rounded-lg"
                  />
                ) : (
                  <p>Sin información nutricional disponible.</p>
                )}
              </AccordionItem>

              <AccordionItem
                title="Ingredientes"
                isOpen={!!openPanels.ingredients}
                onToggle={() => togglePanel("ingredients")}
              >
                {ingredients.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {ingredients.map((item, index) => (
                      <li key={`${item}-${index}`}>
                        {typeof item === "string"
                          ? item.replace(/\.$/, "")
                          : item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Sin ingredientes disponibles.</p>
                )}
              </AccordionItem>
            </div>

            {relatedProduct && (
              <section>
                <h2 className="font-ubuntu text-xl sm:text-2xl text-primary-red font-bold mb-4">
                  Podría Gustarte
                </h2>
                <div className="flex items-center gap-3 sm:gap-4 rounded-2xl bg-white p-3 sm:p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                  <img
                    src={
                      relatedProduct.primary_image ||
                      relatedProduct.images?.[0]?.url ||
                      relatedProduct.image ||
                      ""
                    }
                    alt={relatedProduct.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
                  />
                  <p className="flex-1 min-w-0 font-ubuntu text-base sm:text-base text-primary-red font-semibold uppercase leading-snug">
                    {relatedProduct.name}
                    {relatedProduct.quantity
                      ? ` ${relatedProduct.quantity}`
                      : ""}
                    {relatedProduct.subtitle
                      ? ` (${relatedProduct.subtitle})`
                      : ""}
                  </p>
                  <Link
                    to={`/product/${relatedProduct.slug}`}
                    className="flex-shrink-0 inline-block font-pangolin text-primary-red border-2 border-primary-red bg-white px-5 sm:px-8 py-1.5 sm:py-2 rounded-lg transition-colors duration-300 hover:bg-primary-red hover:text-secondary-beige"
                  >
                    Ver
                  </Link>
                </div>
              </section>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
