/** Origen canónico del sitio (URLs absolutas para schema.org). */
export const SITE_URL = "https://mysazonova.com";
export const SITE_NAME = "Sazonova";
export const INSTAGRAM_URL = "https://www.instagram.com/sazonova.ve/";
export const TIKTOK_URL = "https://www.tiktok.com/@sazonova.ve";
export const PHONE_TEL = "tel:+584222828001";
export const PHONE_E164 = "+584222828001";
export const CONTACT_EMAIL = "mysazonova@gmail.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

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

const plainText = (value) => {
  if (value == null || value === "") return "";
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const absoluteUrl = (path) => {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const parseGrams = (quantity) => {
  const match = String(quantity || "").match(/(\d+(?:[.,]\d+)?)\s*g\b/i);
  if (!match) return undefined;
  const value = parseFloat(match[1].replace(",", "."));
  return Number.isFinite(value) ? value : undefined;
};

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.png`,
      contentUrl: `${SITE_URL}/favicon.png`,
    },
    image: DEFAULT_OG_IMAGE,
    description:
      "Sazonova elabora ajo molido y adobo en polvo. Productos, recetas y puntos de venta de la marca.",
    email: CONTACT_EMAIL,
    telephone: PHONE_E164,
    sameAs: [INSTAGRAM_URL, TIKTOK_URL],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      email: CONTACT_EMAIL,
      contactType: "customer service",
      availableLanguage: ["es"],
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "es",
    description:
      "Sitio oficial de Sazonova: ajo molido, adobo completo, recetas y dónde comprar.",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * @param {{ name: string, path?: string }[]} items
 */
export function buildBreadcrumbJsonLd(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

/**
 * @param {object[]} products
 */
export function buildProductItemListJsonLd(products) {
  const items = (products || []).filter((product) => product?.name && product?.slug);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Productos Sazonova",
    numberOfItems: items.length,
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${SITE_URL}/product/${product.slug}`,
    })),
  };
}

/**
 * @param {object[]} recipes
 */
export function buildRecipeItemListJsonLd(recipes) {
  const items = (recipes || []).filter((recipe) => recipe?.name && recipe?.slug);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Recetas Sazonova",
    numberOfItems: items.length,
    itemListElement: items.map((recipe, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: recipe.name,
      url: `${SITE_URL}/recipes/${recipe.slug}`,
    })),
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

  const pageUrl = `${SITE_URL}/product/${product.slug}`;
  const description = plainText(product.description || product.product_details);
  const grams = parseGrams(product.quantity);

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: `${product.name} ${SITE_NAME}`,
    description: description || undefined,
    image: images.length ? images : DEFAULT_OG_IMAGE,
    sku: product.id != null ? String(product.id) : product.slug,
    productID: product.slug,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    category: "Condimentos y especias",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
      url: SITE_URL,
    },
    manufacturer: { "@id": ORG_ID },
  };

  if (product.quantity) data.size = String(product.quantity);

  if (grams) {
    data.weight = {
      "@type": "QuantitativeValue",
      value: grams,
      unitCode: "GRM",
      unitText: "g",
    };
  }

  const properties = [];
  if (product.quantity) {
    properties.push({
      "@type": "PropertyValue",
      name: "Presentación",
      value: String(product.quantity),
    });
  }
  if (ingredientList.length) {
    properties.push({
      "@type": "PropertyValue",
      name: "Ingredientes",
      value: ingredientList.join(", "),
    });
  }
  const uses = plainText(product.product_details);
  if (uses) {
    properties.push({
      "@type": "PropertyValue",
      name: "Usos recomendados",
      value: uses,
    });
  }
  if (properties.length) data.additionalProperty = properties;

  if (product.nutritional_info) {
    data.subjectOf = {
      "@type": "ImageObject",
      name: `Información nutricional de ${product.name} ${SITE_NAME}`,
      contentUrl: product.nutritional_info,
      url: product.nutritional_info,
    };
  }

  // Sin precio en la API: no inventamos Offer ni reseñas.
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
  const ingredients = getIngredientItems(recipe.ingredients)
    .map((item) => plainText(item))
    .filter(Boolean);
  const steps = getSortedSteps(recipe.steps);
  const images = [recipe.detailed_image, recipe.card_image].filter(Boolean);
  const duration = toIso8601Duration(recipe.preparation_time);
  const mealLabel = MEAL_TYPE_LABELS[recipe.meal_type] || undefined;
  const pageUrl = `${SITE_URL}/recipes/${recipe.slug}`;
  const description = plainText(recipe.description);
  const instructions = steps
    .map((step, index) => {
      const text = plainText(step.instruction);
      if (!text) return null;
      const position = step.step_number ?? index + 1;
      return {
        "@type": "HowToStep",
        position,
        name:
          step.show_name && step.fase_name
            ? plainText(step.fase_name)
            : `Paso ${position}`,
        text,
        url: `${pageUrl}#paso-${position}`,
      };
    })
    .filter(Boolean);

  const portions =
    recipe.portions != null && recipe.portions !== ""
      ? Number(recipe.portions)
      : undefined;

  const data = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "@id": `${pageUrl}#recipe`,
    name: recipe.name,
    description: description || undefined,
    image: images.length
      ? images.map((url) => ({
          "@type": "ImageObject",
          url,
          caption: `${recipe.name} — receta ${SITE_NAME}`,
        }))
      : DEFAULT_OG_IMAGE,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "es",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    datePublished: recipe.created_at || undefined,
    dateModified: recipe.updated_at || undefined,
    recipeCategory: mealLabel,
    recipeCuisine: "Venezolana",
    keywords: [recipe.name, SITE_NAME, mealLabel, "receta", "ajo", "adobo"]
      .filter(Boolean)
      .join(", "),
    recipeIngredient: ingredients.length ? ingredients : undefined,
    recipeInstructions: instructions.length ? instructions : undefined,
  };

  if (Number.isFinite(portions)) {
    data.recipeYield = `${portions} ${portions === 1 ? "porción" : "porciones"}`;
  }

  if (duration) {
    data.prepTime = duration;
    data.totalTime = duration;
  }

  if (recipe.calories != null && recipe.calories !== "") {
    data.nutrition = {
      "@type": "NutritionInformation",
      calories: `${recipe.calories} calories`,
    };
  }

  return data;
}
