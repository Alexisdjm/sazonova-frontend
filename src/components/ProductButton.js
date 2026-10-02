import { Link } from "react-router-dom";

const fills = {
  red: "bg-primary-red",
  orange: "bg-brand-orange",
};

/**
 * Botón de producto: borde y texto beige. El fondo lo define `color`.
 * @param {"red"|"orange"} color
 */
const ProductButton = ({ color = "red", to, children }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border-[2px] border-secondary-beige px-5 py-1.5 font-ubuntu text-sm px-8 text-secondary-beige transition-opacity hover:opacity-90 ${fills[color] || fills.red}`}
    >
      {children}
    </Link>
  );
};

export default ProductButton;
