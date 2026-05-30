const AnimatedButton = ({ children, onClick, styleKind = "style1" }) => {
  let textColors = "";
  let bgColor = "";
  let beforeColor = "";
  let afterColor = "";

  if (styleKind === "style1") {
    textColors = "text-primary-red group-hover:text-secondary-beige";
    bgColor = "bg-secondary-beige";
    beforeColor = "before:bg-primary-red";
    afterColor = "after:bg-primary-red";
  } else if (styleKind === "style2") {
    textColors = "text-[#650208] group-hover:text-secondary-beige";
    bgColor = "bg-secondary-beige";
    beforeColor = "before:bg-primary-red";
    afterColor = "after:bg-primary-red";
  } else if (styleKind === "style3") {
    textColors = "text-primary-red group-hover:text-secondary-beige";
    bgColor = "bg-secondary-beige";
    beforeColor = "before:bg-[#650208]";
    afterColor = "after:bg-[#650208]";
  } else {
    textColors = "text-primary-red group-hover:text-secondary-beige";
    bgColor = "bg-secondary-beige";
    beforeColor = "before:bg-primary-red";
    afterColor = "after:bg-primary-red";
  }
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden cursor-pointer
        px-[1.5em] py-[0.75em] text-[18px] ${bgColor}
        border-[2px] rounded-full
        transition-all duration-[300ms] ease-[cubic-bezier(0.83,0,0.17,1)]
        active:scale-[0.98] active:brightness-90

        before:content-[''] before:absolute before:top-0 before:left-0
        before:w-[150%] before:aspect-square before:-translate-x-1/2 before:-translate-y-1/2
        ${beforeColor} before:rounded-full before:scale-0
        before:transition-transform before:duration-[1000ms] before:ease-[cubic-bezier(0.76,0,0.24,1)]
        before:z-0

        after:content-[''] after:absolute after:top-full after:left-full
        after:w-[150%] after:aspect-square after:-translate-x-1/2 after:-translate-y-1/2
        ${afterColor} after:rounded-full after:scale-0
        after:transition-transform after:duration-[1000ms] after:ease-[cubic-bezier(0.76,0,0.24,1)]
        after:z-0

        hover:before:scale-100 hover:after:scale-100
      `}
    >
      <span
        className={`relative z-10 font-semibold ${textColors} transition-colors duration-[700ms] ease-[cubic-bezier(0.83,0,0.17,1)]`}
      >
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
