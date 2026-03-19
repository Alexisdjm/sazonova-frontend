import { useState, useEffect } from "react";
import images from "../assets/exporting";

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
        <nav className="flex-1 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-4 text-2xl text-primary-red font-semibold">
            <li><a href="#item1" className="hover:opacity-70 transition-opacity font-ubuntu">Inicio</a></li>
            <li><a href="#item2" className="hover:opacity-70 transition-opacity font-ubuntu">Productos</a></li>
            <li><a href="#item3" className="hover:opacity-70 transition-opacity font-ubuntu">Recetas</a></li>
            <li><a href="#item4" className="hover:opacity-70 transition-opacity font-ubuntu">Nosotros</a></li>
          </ul>
        </nav>
      </div>

    <header className={`z-50 w-[100vw] px-14 py-4 transition-all duration-300 ${
      isScrolled ? "fixed top-0 shadow-md text-primary-red" : "absolute top-0 bg-transparent text-secondary-beige"
    }`}>
        <nav>
            <ul className="flex flex-row justify-between items-center">
                <li><button onClick={() => setIsSidebarOpen(true)}><img src={isScrolled ? images.menuRed : images.menu} alt="Menu" className="h-[20px] w-auto" /></button></li>
                <li><button>{isScrolled ? <img src={images.sazonovaLogoRed} alt="Logo" className="h-12 w-auto" /> : <img src={images.sazonovaLogoBeige} alt="Logo" className="h-12 w-auto" />}</button></li>
                <li><button className={`${isScrolled ? "text-primary-red" : "text-secondary-beige"} font-ubuntu`}>Contact</button></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
