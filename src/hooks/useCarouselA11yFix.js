import { useEffect } from "react";

/**
 * Refuerzo para slides del carrusel: inert en items con aria-hidden="true".
 * RecipeCard además evita renderizar <Link> cuando el slide está oculto.
 */
export function useCarouselA11yFix(containerRef) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const sync = () => {
      root.querySelectorAll(".react-multi-carousel-item").forEach((item) => {
        item.inert = item.getAttribute("aria-hidden") === "true";
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["aria-hidden"],
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [containerRef]);
}
