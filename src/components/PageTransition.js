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

/**
 * Overlay al recargar y al cambiar de ruta.
 * En carga inicial: desaparece cuando la página y los datos están listos.
 */
const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading } = useRecipes();
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

    const timer = setTimeout(() => setVisible(false), ROUTE_OVERLAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

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
