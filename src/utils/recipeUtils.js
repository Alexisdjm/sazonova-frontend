export const isRecipeFeatured = (recipe) =>
  recipe?.is_featured === true ||
  recipe?.is_featured === 1 ||
  recipe?.is_featured === "true";

/** Imagen principal del detalle (detalle > card). */
export const getRecipeImage = (recipe) =>
  recipe?.detailed_image || recipe?.card_image || "";

/** Ingredientes: array { id, text } o string con bloques separados por doble salto de línea. */
export const getIngredientItems = (ingredients) => {
  if (!ingredients) return [];
  if (Array.isArray(ingredients)) {
    return ingredients
      .map((item) => (typeof item === "string" ? item : item?.text))
      .filter(Boolean);
  }
  if (typeof ingredients === "string") {
    return splitBlocks(ingredients);
  }
  return [];
};

/** Pasos de preparación ordenados por step_number. */
export const getSortedSteps = (steps) => {
  if (!Array.isArray(steps)) return [];
  return [...steps].sort(
    (a, b) => (a.step_number ?? 0) - (b.step_number ?? 0)
  );
};

/** Sub-pasos dentro de un bloque de instrucción (doble salto de línea). */
export const splitBlocks = (text) => {
  if (!text || typeof text !== "string") return [];
  return text
    .split(/\r?\n\r?\n/)
    .map((block) => block.replace(/\r\n/g, "\n").trim())
    .filter(Boolean);
};

export const formatPortions = (portions) => {
  if (portions == null || portions === "") return null;
  const n = Number(portions);
  if (!Number.isNaN(n) && String(portions).trim() === String(n)) {
    return `${n} ${n === 1 ? "porción" : "porciones"}`;
  }
  return String(portions).includes("porci") ? portions : `${portions} porciones`;
};

export const formatCalories = (calories) => {
  if (calories == null || calories === "") return null;
  const s = String(calories).trim();
  return /cal/i.test(s) ? s : `${s} cal`;
};
