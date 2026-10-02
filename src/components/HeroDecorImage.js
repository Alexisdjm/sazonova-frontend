import { useId } from "react";
import images from "../assets/exporting";

const SOURCES = {
  ajo: images.ajo,
  adobo: images.adobo,
};

const AXES = ["top", "right", "bottom", "left"];

/** Valor fijo o variante { base, lg }. `lg` corresponde al breakpoint lg de Tailwind (1024px). */
function at(value, viewport) {
  if (value == null || value === "") return undefined;
  if (typeof value === "string") return viewport === "base" ? value : undefined;
  return value[viewport];
}

/**
 * Imagen decorativa del hero (ajo o adobo), posicionada en absoluto.
 * @param {object} props
 * @param {object} props.item
 * @param {"ajo"|"adobo"} props.item.product
 * @param {string} props.item.size - ancho CSS, p. ej. "clamp(35px, 12vw, 60px)"
 * @param {string} [props.item.blur] - p. ej. "2px"
 * @param {string|{base?: string, lg?: string}} props.item.rotate
 * @param {string|{base?: string, lg?: string}} [props.item.top]
 * @param {string|{base?: string, lg?: string}} [props.item.bottom]
 * @param {string|{base?: string, lg?: string}} [props.item.left]
 * @param {string|{base?: string, lg?: string}} [props.item.right]
 */
const HeroDecorImage = ({ item }) => {
  const className = `hero-decor-${useId().replace(/:/g, "")}`;

  const style = {
    position: "absolute",
    width: item.size,
    height: "auto",
  };

  const baseRotate = at(item.rotate, "base");
  if (baseRotate) style.transform = `rotate(${baseRotate})`;
  if (item.blur) style.filter = `blur(${item.blur})`;

  AXES.forEach((axis) => {
    const value = at(item[axis], "base");
    if (value != null) style[axis] = value;
  });

  const lgRules = [];
  const lgRotate = at(item.rotate, "lg");
  if (lgRotate) lgRules.push(`transform: rotate(${lgRotate}) !important`);
  AXES.forEach((axis) => {
    const value = at(item[axis], "lg");
    if (value != null) lgRules.push(`${axis}: ${value} !important`);
  });

  const css =
    lgRules.length > 0
      ? `@media (min-width: 1024px) { .${className} { ${lgRules.join("; ")}; } }`
      : "";

  return (
    <>
      {css ? <style>{css}</style> : null}
      <img className={className} style={style} src={SOURCES[item.product]} alt="" />
    </>
  );
};

export default HeroDecorImage;
