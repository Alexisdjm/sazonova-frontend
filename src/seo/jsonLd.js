/** Origen canónico del sitio (URLs absolutas para schema.org). */
export const SITE_URL = "https://mysazonova.com";
export const SITE_NAME = "Sazonova";
export const INSTAGRAM_URL = "https://www.instagram.com/sazonova.ve/";
export const TIKTOK_URL = "https://www.tiktok.com/@sazonova.ve";
export const PHONE_TEL = "tel:+584222828001";

const MEAL_TYPE_LABELS = {
  DES: "Desayuno",
  ALM: "Almuerzo",
  CEN: "Cena",
  MER: "Merienda",
  PAS: "Pasapalo",
  ENT: "Entrada",
  POS: "Postre",
};

/**
 * Convierte textos tipo "55 minutos" / "1 hora" a ISO 8601 Duration (PT…).
 * @param {string|number|null|undefined} value
 * @returns {string|undefined}
 */
export function toIso8601Duration(value) {
  if (value == null || value === "") return undefined;
  if (typeof value === "number" && Number.isFinite(value)) {
    return `PT${Math.round(value)}M`;
  }

  const text = String(value).trim().toLowerCase();
  if (/^PT/i.test(text)) return text.toUpperCase();

  const hoursMatch = text.match(/(\d+(?:[.,]\d+)?)\s*h(?:ora|oras|r)?/);
  const minsMatch = text.match(/(\d+(?:[.,]\d+)?)\s*m(?:in|inuto|inutos)?/);

  let hours = hoursMatch ? parseFloat(hoursMatch[1].replace(",", ".")) : 0;
  let mins = minsMatch ? parseFloat(minsMatch[1].replace(",", ".")) : 0;

  if (!hours && !mins) {
    const onlyNumber = text.match(/^(\d+(?:[.,]\d+)?)$/);
    if (onlyNumber) mins = parseFloat(onlyNumber[1].replace(",", "."));
  }

  if (!hours && !mins) return undefined;

  const totalMins = Math.round(hours * 60 + mins);
  if (totalMins <= 0) return undefined;

  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  if (h && m) return `PT${h}H${m}M`;
  if (h) return `PT${h}H`;
  return `PT${m}M`;
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    description:
      "Ajo y adobo en polvo para sazonar con autenticidad. Recetas, productos y puntos de venta Sazonova.",
    sameAs: [INSTAGRAM_URL, TIKTOK_URL],
    telephone: "+584222828001",
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "es",
  };
}

/**
 * @param {object} product
 * @returns {object|null}
 */
export function buildProductJsonLd(product) {
  if (!product?.name || !product?.slug) return null;

  const images = [];
  if (product.primary_image) images.push(product.primary_image);
  if (Array.isArray(product.images)) {
    product.images.forEach((img) => {
      const url = typeof img === "string" ? img : img?.url;
      if (url && !images.includes(url)) images.push(url);
    });
  }

  const ingredientList = Array.isArray(product.ingredients)
    ? product.ingredients
        .map((item) => (typeof item === "string" ? item : item?.text))
        .filter(Boolean)
    : [];

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.product_details || undefined,
    image: images.length ? images : undefined,
    sku: product.slug,
    url: `${SITE_URL}/product/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    category: "Condimentos y especias",
  };

  if (product.quantity) {
    data.size = product.quantity;
  }

  if (ingredientList.length) {
    data.material = ingredientList.join(", ");
  }

  if (product.product_details) {
    data.additionalProperty = [
      {
        "@type": "PropertyValue",
        name: "Usos recomendados",
        value: product.product_details,
      },
    ];
  }

  // Sin precio en la API: no inventamos Offer (Google Product rich results lo exige).
  return data;
}

/**
 * @param {object} recipe
 * @param {{ getIngredientItems: Function, getSortedSteps: Function }} helpers
 * @returns {object|null}
 */
export function buildRecipeJsonLd(recipe, helpers) {
  if (!recipe?.name || !recipe?.slug) return null;

  const { getIngredientItems, getSortedSteps } = helpers;
  const ingredients = getIngredientItems(recipe.ingredients);
  const steps = getSortedSteps(recipe.steps);
  const images = [recipe.detailed_image, recipe.card_image].filter(Boolean);
  const duration = toIso8601Duration(recipe.preparation_time);
  const mealLabel = MEAL_TYPE_LABELS[recipe.meal_type] || undefined;

  const data = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description || undefined,
    image: images.length ? images : undefined,
    url: `${SITE_URL}/recipes/${recipe.slug}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: recipe.created_at || undefined,
    dateModified: recipe.updated_at || undefined,
    recipeYield:
      recipe.portions != null && recipe.portions !== ""
        ? String(recipe.portions)
        : undefined,
    recipeCategory: mealLabel,
    recipeCuisine: "Latinoamericana",
    keywords: [SITE_NAME, mealLabel, "receta"].filter(Boolean).join(", "),
    recipeIngredient: ingredients.length ? ingredients : undefined,
    recipeInstructions: steps.length
      ? steps.map((step, index) => ({
          "@type": "HowToStep",
          position: step.step_number ?? index + 1,
          name:
            step.show_name && step.fase_name
              ? step.fase_name
              : `Paso ${step.step_number ?? index + 1}`,
          text: step.instruction,
        }))
      : undefined,
  };

  if (duration) {
    data.totalTime = duration;
    data.prepTime = duration;
  }

  if (recipe.calories != null && recipe.calories !== "") {
    data.nutrition = {
      "@type": "NutritionInformation",
      calories: `${recipe.calories} calorías`,
    };
  }

  return data;
}
