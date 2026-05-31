import { Link } from "react-router-dom";
import {
  getRecipeImage,
  getIngredientItems,
  getSortedSteps,
  splitBlocks,
  formatPortions,
  formatCalories,
} from "../utils/recipeUtils";

const RecipeImage = ({ recipe, className = "" }) => {
  const src = getRecipeImage(recipe);
  if (!src) return null;

  return (
    <div
      className={`rounded-2xl sm:rounded-3xl overflow-hidden bg-secondary-beige shadow-[0_12px_32px_rgba(0,0,0,0.12)] w-full aspect-[4/5] sm:aspect-[3/4.5] max-h-[min(70vh,520px)] lg:max-h-[calc(100vh-9rem)] ${className}`}
    >
      <img
        src={src}
        alt={recipe.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const RecipeMeta = ({ preparationTime, caloriesLabel, portionsLabel }) => {
  const items = [
    preparationTime && { key: "time", label: preparationTime },
    caloriesLabel && { key: "calories", label: caloriesLabel },
    portionsLabel && { key: "portions", label: portionsLabel },
  ].filter(Boolean);

  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4">
      {items.map((item, index) => (
        <li key={item.key} className="flex items-center gap-3">
          {index > 0 && (
            <span
              className="text-primary-red/40 select-none"
              aria-hidden="true"
            >
              ·
            </span>
          )}
          <span className="font-ubuntu text-sm sm:text-base text-primary-red/80">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
};

const RecipeDetail = ({ recipe }) => {
  const ingredients = getIngredientItems(recipe.ingredients);
  const steps = getSortedSteps(recipe.steps);
  const portionsLabel = formatPortions(recipe.portions ?? recipe.porciones);
  const caloriesLabel = formatCalories(recipe.calories ?? recipe.calorias);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 md:gap-10 lg:gap-14">
        {/* Imagen primero en móvil y tablet; derecha sticky en desktop */}
        <aside className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none lg:w-[40%] lg:mx-0 lg:ml-auto flex-shrink-0">
          <div className="lg:sticky lg:top-28 xl:top-32">
            <RecipeImage recipe={recipe} />
          </div>
        </aside>

        <article className="order-2 lg:order-1 flex-1 min-w-0">
          <header className="mb-8 md:mb-10">
            <p className="font-ubuntu font-bold text-brand-orange text-xs sm:text-sm uppercase tracking-widest mb-2">
              Receta
            </p>
            <h1 className="font-sugo text-3xl sm:text-4xl md:text-5xl text-primary-red font-medium leading-tight">
              {recipe.name}
            </h1>
            <RecipeMeta
              preparationTime={recipe.preparation_time}
              caloriesLabel={caloriesLabel}
              portionsLabel={portionsLabel}
            />
          </header>

          {recipe.description?.trim() && (
            <section className="mb-8 md:mb-10">
              <h2 className="font-sugo text-xl sm:text-2xl text-primary-red mb-3 sm:mb-4">
                Descripción
              </h2>
              <p className="font-ubuntu text-sm sm:text-base text-primary-red/90 leading-relaxed whitespace-pre-line">
                {recipe.description.trim()}
              </p>
            </section>
          )}

          {ingredients.length > 0 && (
            <section className="mb-8 md:mb-10">
              <h2 className="font-sugo text-xl sm:text-2xl text-primary-red mb-3 sm:mb-4">
                Ingredientes
              </h2>
              <ul className="font-ubuntu text-sm sm:text-base text-primary-red/90 space-y-2 list-disc pl-5">
                {ingredients.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {steps.length > 0 && (
            <section className="mb-8 md:mb-10">
              <h2 className="font-sugo text-xl sm:text-2xl text-primary-red mb-4 sm:mb-6">
                Preparación
              </h2>
              <ol className="space-y-6 sm:space-y-8">
                {steps.map((step) => {
                  const blocks = splitBlocks(step.instruction);
                  const showPhase =
                    step.show_name && step.fase_name?.trim();

                  return (
                    <li key={step.id} className="flex gap-3 sm:gap-4">
                      <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-red text-secondary-beige font-pangolin flex items-center justify-center text-base sm:text-lg">
                        {step.step_number}
                      </span>
                      <div className="flex-1 min-w-0 pt-0.5">
                        {showPhase && (
                          <p className="font-sugo text-base sm:text-lg text-primary-red font-medium mb-2 sm:mb-3">
                            {step.fase_name.trim()}
                          </p>
                        )}
                        <div className="space-y-2 sm:space-y-3">
                          {blocks.map((block, blockIndex) => (
                            <p
                              key={`${step.id}-${blockIndex}`}
                              className="font-ubuntu text-sm sm:text-base text-primary-red/90 leading-relaxed whitespace-pre-line"
                            >
                              {block}
                            </p>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          )}

          <section className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-secondary-beige shadow-[0_8px_12px_rgba(0,0,0,0.08)]">
            <h2 className="font-sugo text-lg sm:text-xl text-primary-red mb-2">
              ¿Listo para cocinar?
            </h2>
            <p className="font-ubuntu text-primary-red/80 text-sm mb-4">
              Consigue nuestros productos y lleva este sabor a tu mesa.
            </p>
            <Link
              to="/"
              className="inline-block font-pangolin bg-black text-white px-8 py-2 rounded-lg transition-colors duration-300 hover:bg-neutral-800"
            >
              Ver productos
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
};

export default RecipeDetail;
