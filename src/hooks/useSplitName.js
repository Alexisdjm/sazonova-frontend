import { useMemo } from "react";

/**
 * Separa un nombre en la primera palabra y el resto.
 * Útil para títulos: primera línea naranja (Sugo) + resto en Calling Heart.
 */
export const splitDisplayName = (name = "") => {
  const trimmed = String(name ?? "").trim();
  if (!trimmed) return { first: "", rest: "" };

  const parts = trimmed.split(/\s+/);
  if (parts.length <= 1) return { first: trimmed, rest: "" };

  return {
    first: parts[0],
    rest: parts.slice(1).join(" "),
  };
};

const useSplitName = (name) =>
  useMemo(() => splitDisplayName(name), [name]);

export default useSplitName;
