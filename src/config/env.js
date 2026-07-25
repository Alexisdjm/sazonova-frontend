/**
 * Variables REACT_APP_* (CRA las inyecta en build; reinicia npm start al cambiar .env).
 *
 * REACT_APP_API_DEBUG=true  → todas las llamadas van a http://127.0.0.1:8000
 * REACT_APP_API_DEBUG=false → usa REACT_APP_API_URL (producción / staging)
 */

const trimTrailingSlash = (url) =>
  typeof url === "string" ? url.replace(/\/$/, "") : "";

const LOCAL_API_URL = "http://127.0.0.1:8000";

/** true = forzar API local (debug). false = variables de entorno / producción. */
export const API_DEBUG =
  String(process.env.REACT_APP_API_DEBUG || "").toLowerCase() === "true" ||
  process.env.REACT_APP_API_DEBUG === "1";

const envApiUrl = trimTrailingSlash(process.env.REACT_APP_API_URL);

export const API_URL = API_DEBUG
  ? LOCAL_API_URL
  : envApiUrl ||
    (process.env.NODE_ENV === "development" ? LOCAL_API_URL : "");

if (API_DEBUG && typeof console !== "undefined") {
  console.info(
    `[Sazonova] API_DEBUG activo → todas las peticiones van a ${LOCAL_API_URL}`,
  );
}

if (process.env.NODE_ENV === "production" && !API_DEBUG && !API_URL) {
  console.error(
    "[Sazonova] REACT_APP_API_URL no está definida. El fetch al API fallará en producción.",
  );
}

/** Ruta o URL absoluta del API (ej. buildApiUrl('/api/recipes/all/')). */
export const buildApiUrl = (path) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return API_URL ? `${API_URL}${normalized}` : normalized;
};

const DEV_MEDIA_HOSTS = ["http://127.0.0.1:8000", "http://localhost:8000"];

/** Reescribe media devuelta por Django con host de desarrollo al host del API en prod. */
export const resolveMediaUrl = (url) => {
  if (!url || typeof url !== "string") return url;

  // En debug, dejar URLs locales tal cual (o reescribir al host local).
  if (API_DEBUG) {
    for (const host of DEV_MEDIA_HOSTS) {
      if (url.startsWith(host)) return url;
    }
    // Si el backend devolvió URL de prod en debug, opcionalmente no tocar.
    return url;
  }

  for (const host of DEV_MEDIA_HOSTS) {
    if (url.startsWith(host)) {
      const path = url.slice(host.length);
      return API_URL ? `${API_URL}${path}` : path;
    }
  }

  return url;
};

export const MAPBOX_ACCESS_TOKEN =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "";

export const MAPBOX_STYLE =
  process.env.REACT_APP_MAPBOX_STYLE ||
  "mapbox://styles/mapbox/streets-v12";

export const SITE_URL = process.env.REACT_APP_SITE_URL || "";
