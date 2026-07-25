import images from "../assets/exporting";

/**
 * Fondo decorativo con la palabra SAZONOVA repetida en filas escalonadas.
 * El padre debe ser `relative` (y normalmente `overflow-hidden`).
 */
const RepeatingBrandBackground = ({
  rows = 35,
  cols = 40,
  opacity = 0.7,
  imageHeightClass = "h-[60px]",
  staggerClass = "-translate-x-[62px]",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col gap-y-3 py-3 -ml-16 ${className}`}
      aria-hidden="true"
    >
      {[...Array(rows)].map((_, i) => (
        <div
          key={i}
          className={`flex gap-x-3 min-w-max ${i % 2 !== 0 ? staggerClass : ""}`}
        >
          {[...Array(cols)].map((_, j) => (
            <img
              key={j}
              src={images.sazonovaLetters}
              alt=""
              className={`${imageHeightClass} w-auto object-contain`}
              style={{ opacity }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RepeatingBrandBackground;
