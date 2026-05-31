import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SazonovaIcon } from "./icons";
import { useRecipes } from "../context/RecipesContext";

const ROUTE_OVERLAY_MS = 500;
const MAX_INITIAL_WAIT_MS = 12000;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForPageReady = () =>
  new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    window.addEventListener("load", resolve, { once: true });
  });

const waitForPaint = () =>
  new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });

const getRecipeSlugFromPath = (pathname) => {
  const match = pathname.match(/^\/recipes\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

const hideOverlayAfterPaint = async (cancelledRef) => {
  await waitForPaint();
  await delay(ROUTE_OVERLAY_MS);
  return !cancelledRef.current;
};

/**
 * Overlay al recargar y al cambiar de ruta.
 * En detalle de receta: permanece hasta que el listado del API termine de cargar.
 */
const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading } = useRecipes();
  const recipeSlug = getRecipeSlugFromPath(pathname);
  const isRecipeDetailRoute = Boolean(recipeSlug);
  const hasFinishedInitial = useRef(false);
  const isFirstPathname = useRef(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (hasFinishedInitial.current || isLoading) return;

    let cancelled = false;

    const finishInitialLoad = async () => {
      await Promise.race([
        (async () => {
          await waitForPageReady();
          await waitForPaint();
        })(),
        delay(MAX_INITIAL_WAIT_MS),
      ]);

      if (!cancelled) {
        setVisible(false);
        hasFinishedInitial.current = true;
      }
    };

    finishInitialLoad();

    return () => {
      cancelled = true;
    };
  }, [isLoading]);

  useLayoutEffect(() => {
    if (!hasFinishedInitial.current) return;

    if (isFirstPathname.current) {
      isFirstPathname.current = false;
      return;
    }

    setVisible(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    if (isRecipeDetailRoute && isLoading) {
      return;
    }

    const timer = setTimeout(() => setVisible(false), ROUTE_OVERLAY_MS);
    return () => clearTimeout(timer);
  }, [pathname, isRecipeDetailRoute, isLoading]);

  useEffect(() => {
    if (!hasFinishedInitial.current || !isRecipeDetailRoute) return;

    if (isLoading) {
      setVisible(true);
      return;
    }

    const cancelled = { current: false };

    const finishRecipeDetailLoad = async () => {
      const shouldHide = await hideOverlayAfterPaint(cancelled);
      if (shouldHide) setVisible(false);
    };

    finishRecipeDetailLoad();

    return () => {
      cancelled.current = true;
    };
  }, [isRecipeDetailRoute, isLoading, pathname]);

  return (
    <>
      {children}
      <div
        aria-hidden={!visible}
        className={`fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg-color)] transition-opacity duration-300 ease-in-out ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <SazonovaIcon
          color="var(--gradient-dark-red)"
          width="min(85vw, 480px)"
          height="min(88vw, 500px)"
          boxShadow="0 10px 20px rgba(101, 2, 8, 0.12), 0 24px 48px rgba(101, 2, 8, 0.15)"
          className={`transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </>
  );
};

export default PageTransition;
