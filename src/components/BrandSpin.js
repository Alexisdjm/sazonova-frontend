import images from "../assets/exporting";

const BrandSpin = ({ className = "", width = 200, height = 200 }) => {
  return (
    <img
      src={images.spin}
      alt="Brand Spin"
      width={width}
      height={height}
      className={`animate-[spin_15s_linear_infinite] ${className}`}
    />
  );
};

export default BrandSpin;
