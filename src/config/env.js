/**
 * Variables de entorno (CRA: prefijo REACT_APP_, inyectadas en build).
 * En Docker se pasan como ARG/ENV en la etapa de npm run build.
 */
export const API_URL =
  process.env.REACT_APP_API_URL?.replace(/\/$/, "") ||
  "http://127.0.0.1:8000";

export const MAPBOX_ACCESS_TOKEN =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || "";

export const MAPBOX_STYLE =
  process.env.REACT_APP_MAPBOX_STYLE ||
  "mapbox://styles/mapbox/streets-v12";

export const SITE_URL = process.env.REACT_APP_SITE_URL || "";
