export const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-0 md:left-2 top-[60%] -translate-y-[calc(50%+2rem)] bg-secondary-beige text-[#650208] p-3 rounded-full z-10 hover:scale-110 transition-transform shadow-lg"
      aria-label="Previous"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
  );
};

export const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute right-0 md:right-2 top-[60%] -translate-y-[calc(50%+2rem)] bg-secondary-beige text-[#650208] p-3 rounded-full z-10 hover:scale-110 transition-transform shadow-lg"
      aria-label="Next"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  );
};

/** @param {string} colorClass Clase Tailwind de fondo, ej. bg-secondary-beige, bg-primary-red, bg-brand-orange */
export const CustomDot = ({
  onClick,
  active,
  colorClass = "bg-secondary-beige",
}) => {
  return (
    <li className="mx-1">
      <button
        type="button"
        style={{ cursor: "pointer" }}
        className={`block h-3 rounded-full transition-all duration-300 ${colorClass} ${
          active ? "w-8 shadow-md" : "w-3 opacity-50 hover:opacity-100"
        }`}
        onClick={() => onClick()}
        aria-label="Ir a diapositiva"
      />
    </li>
  );
};
