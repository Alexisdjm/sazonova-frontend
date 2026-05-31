/**
 * Variables REACT_APP_* (CRA las inyecta en build; reinicia npm start al cambiar .env).
 *
 * Desarrollo: sin variable → http://127.0.0.1:8000 (ver .env.example).
 * Producción: define REACT_APP_API_URL con la URL pública del backend
 *   (ej. https://api.tudominio.com). Sin fallback a localhost en producción.
 */

const trimTrailingSlash = (url) =>
  typeof url === "string" ? url.replace(/\/$/, "") : "";

const envApiUrl = trimTrailingSlash(process.env.REACT_APP_API_URL);

export const API_URL =
  envApiUrl ||
  (process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "");

if (process.env.NODE_ENV === "production" && !API_URL) {
  console.error(
    "[Sazonova] REACT_APP_API_URL no está definida. El fetch al API fallará en producción."
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
