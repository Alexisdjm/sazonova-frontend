import { useState, useEffect } from "react";
import images from "../assets/exporting";
import { LogoMixedIcon, InstagramIcon, TikTokIcon, PhoneIcon } from "./icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] md:w-[35%] bg-[#f0e5d5] z-[70] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl flex flex-col`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="Cerrar menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#7D030A">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <Link to="/" onClick={() => setIsSidebarOpen(false)}>
            <LogoMixedIcon className="h-40 w-auto" />
          </Link>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-3 text-2xl text-primary-red font-semibold">
            <li><Link to="/" onClick={() => setIsSidebarOpen(false)} className="hover:opacity-70 transition-opacity font-ubuntu font-medium">Inicio</Link></li>
            <li><Link to="/products/all" onClick={() => setIsSidebarOpen(false)} className="hover:opacity-70 transition-opacity font-ubuntu font-medium">Productos</Link></li>
            <li><Link to="/recipes" onClick={() => setIsSidebarOpen(false)} className="hover:opacity-70 transition-opacity font-ubuntu font-medium">Recetas</Link></li>
            <li><Link to="/about" onClick={() => setIsSidebarOpen(false)} className="hover:opacity-70 transition-opacity font-ubuntu font-medium">Nosotros</Link></li>
          </ul>
        </nav>

        {/* Íconos Sociales y Contacto */}
        <div className="flex justify-center space-x-6 pb-8 text-[#7D030A]">
          <a href="#instagram" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
            <InstagramIcon className="h-8 w-8 fill-current" />
          </a>
          <a href="#tiktok" className="hover:opacity-70 transition-opacity" aria-label="TikTok">
            <TikTokIcon className="h-8 w-8 fill-current" />
          </a>
          <a href="#llamar" className="hover:opacity-70 transition-opacity" aria-label="Llamar">
            <PhoneIcon className="h-8 w-8 fill-current" />
          </a>
        </div>
      </div>

    <header className={`z-50 w-[100vw] px-6 lg:px-14 py-4 transition-all duration-300 ${
      isScrolled ? "fixed top-0 shadow-md text-primary-red" : "absolute top-0 bg-transparent text-secondary-beige"
    }`}>
        <nav>
            <ul className="flex flex-row justify-between items-center">
                <li><button onClick={() => setIsSidebarOpen(true)}><img src={isScrolled ? images.menuRed : images.menu} alt="Menu" className="h-[20px] w-auto" /></button></li>
                <li><Link to="/">{isScrolled ? <img src={images.sazonovaLogoRed} alt="Logo" className="h-12 w-auto" /> : <img src={images.sazonovaLogoBeige} alt="Logo" className="h-12 w-auto" />}</Link></li>
                <li className="hidden md:block">
                  <Link
                    to="/contact"
                    className={`${isScrolled ? "text-primary-red" : "text-secondary-beige"} font-ubuntu relative inline-block pb-0.5 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100`}
                  >
                    Contact
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
