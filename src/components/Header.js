import { useState, useEffect } from "react";
import images from "../assets/exporting";
import { LogoMixedIcon, InstagramIcon, TikTokIcon, PhoneIcon } from "./icons";
import { Link } from "react-router-dom";

/**
 * @param {boolean} scrollAware
 * - true (Homepage): transparente + iconos beige → al scroll fondo beige + iconos rojos
 * - false (detalle): siempre fondo primary-red + logo/texto/burger beige
 */
const Header = ({ scrollAware = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // En modo dinámico, tras scroll: barra beige e iconos rojos
  const useScrolledBeigeBar = scrollAware && isScrolled;
  // Iconos/textos rojos solo en esa barra beige del scroll
  const useRedAssets = useScrolledBeigeBar;

  useEffect(() => {
    if (!scrollAware) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollAware]);

  const headerSurfaceClass = !scrollAware
    ? "fixed top-0 bg-primary-red shadow-md text-secondary-beige"
    : useScrolledBeigeBar
      ? "fixed top-0 bg-[var(--bg-color)] shadow-md text-primary-red"
      : "absolute top-0 bg-transparent text-secondary-beige";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] md:w-[35%] bg-[#f0e5d5] z-[70] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl flex flex-col`}
        aria-hidden={!isSidebarOpen}
        inert={!isSidebarOpen}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="Cerrar menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#7D030A"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <Link
            to="/"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Sazonova — Ir al inicio"
          >
            <LogoMixedIcon className="h-40 w-auto" aria-hidden="true" />
          </Link>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-3 text-2xl text-primary-red font-semibold">
            <li>
              <Link
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className="hover:opacity-70 transition-opacity font-ubuntu font-medium"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/products/all"
                onClick={() => setIsSidebarOpen(false)}
                className="hover:opacity-70 transition-opacity font-ubuntu font-medium"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                onClick={() => setIsSidebarOpen(false)}
                className="hover:opacity-70 transition-opacity font-ubuntu font-medium"
              >
                Recetas
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsSidebarOpen(false)}
                className="hover:opacity-70 transition-opacity font-ubuntu font-medium"
              >
                Nosotros
              </Link>
            </li>
          </ul>
        </nav>

        {/* Íconos Sociales y Contacto */}
        <div className="flex justify-center space-x-6 pb-8 text-[#7D030A]">
          <a
            href="https://www.instagram.com/sazonova.ve/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Instagram de Sazonova"
          >
            <InstagramIcon className="h-8 w-8 fill-current" />
          </a>
          <a
            href="/tiktok"
            className="hover:opacity-70 transition-opacity"
            aria-label="TikTok"
          >
            <TikTokIcon className="h-8 w-8 fill-current" />
          </a>
          <a
            href="/llamar"
            className="hover:opacity-70 transition-opacity"
            aria-label="Llamar"
          >
            <PhoneIcon className="h-8 w-8 fill-current" />
          </a>
        </div>
      </div>

      <header
        className={`z-50 w-[100vw] px-6 lg:px-14 py-4 transition-all duration-300 ${headerSurfaceClass}`}
      >
        <nav>
          <ul className="flex flex-row justify-between items-center">
            <li>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Abrir menú"
              >
                <img
                  src={useRedAssets ? images.menuRed : images.menu}
                  alt=""
                  className="h-[20px] w-auto"
                />
              </button>
            </li>
            <li>
              <Link to="/" aria-label="Sazonova — Ir al inicio">
                <img
                  src={
                    useRedAssets
                      ? images.sazonovaLogoRed
                      : images.sazonovaLogoBeige
                  }
                  alt=""
                  className="h-12 w-auto"
                />
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                to="/contact"
                className={`${
                  useRedAssets ? "text-primary-red" : "text-secondary-beige"
                } font-ubuntu relative inline-block pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
