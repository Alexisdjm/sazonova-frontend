import { useState, useEffect } from "react";
import images from "../assets/exporting";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className={`z-50 w-[100vw] px-14 py-4 transition-all duration-300 ${
      isScrolled ? "fixed top-0 shadow-md text-primary-red" : "absolute top-0 bg-transparent text-secondary-beige"
    }`}>
        <nav>
            <ul className="flex flex-row justify-between items-center">
                <li><button><img src={isScrolled ? images.menuRed : images.menu} alt="Menu" className="h-[20px] w-auto" /></button></li>
                <li><button>{isScrolled ? <img src={images.sazonovaLogoRed} alt="Logo" className="h-12 w-auto" /> : <img src={images.sazonovaLogoBeige} alt="Logo" className="h-12 w-auto" />}</button></li>
                <li><button className={`${isScrolled ? "text-primary-red" : "text-secondary-beige"} font-ubuntu`}>Contact</button></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
