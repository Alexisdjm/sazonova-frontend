import { useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SazonovaIcon } from "./icons";

const VISIBLE_MS = 420;

/**
 * Cubre la pantalla al cambiar de ruta para que no se note el “swap”
 * del contenido dentro del HeroBanner (y otras secciones compartidas).
 */
const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    setVisible(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const timer = setTimeout(() => setVisible(false), VISIBLE_MS);
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
