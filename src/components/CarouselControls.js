export const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-0 md:left-2 top-1/2 -translate-y-[calc(50%+2rem)] bg-secondary-beige text-[#650208] p-3 rounded-full z-10 hover:scale-110 transition-transform shadow-lg"
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
      className="absolute right-0 md:right-2 top-1/2 -translate-y-[calc(50%+2rem)] bg-secondary-beige text-[#650208] p-3 rounded-full z-10 hover:scale-110 transition-transform shadow-lg"
      aria-label="Next"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
  );
};

export const CustomDot = ({ onClick, active }) => {
  return (
    <li className="mx-1">
      <button
        style={{ cursor: "pointer" }}
        className={`block h-3 rounded-full transition-all duration-300 ${active ? "bg-[#FFEDCE] w-8 shadow-md" : "bg-[#FFEDCE] w-3 opacity-50 hover:opacity-100"}`}
        onClick={() => onClick()}
      />
    </li>
  );
};
