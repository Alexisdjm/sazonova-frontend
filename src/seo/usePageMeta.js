import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_URL } from "./jsonLd";

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const toMetaDescription = (text, fallback) => {
  const clean = String(text || "")
    .replace(/\s+/g, " ")
    .trim();
  const source = clean || fallback;
  if (!source) return "";
  if (source.length <= 160) return source;
  return `${source.slice(0, 157).trim()}…`;
};

/**
 * Título, descripción, canónica y Open Graph de la ruta actual.
 * Google renderiza el JS; la canónica evita duplicar la home en cada URL.
 */
export function usePageMeta({
  title,
  description,
  path = "/",
  image,
  type = "website",
  robots = "index, follow",
}) {
  useEffect(() => {
    const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
    const shareImage = image || DEFAULT_OG_IMAGE;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:image", shareImage);
    upsertMeta("property", "og:locale", "es_VE");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", shareImage);
    upsertLink("canonical", url);
  }, [title, description, path, image, type, robots]);
}
