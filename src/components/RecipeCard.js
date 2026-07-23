import { Link } from "react-router-dom";

const RecipeCard = ({ image, title, description, time, slug }) => {
  const card = (
    <div className="flex flex-col items-center justify-end md:h-[225px] md:w-[225px] w-[40vw] h-[40vw] bg-secondary-beige rounded-3xl py-4 shadow-[0_8px_12px_rgba(0,0,0,0.12)]">
      <img
        width={200}
        height={200}
        className="object-cover max-w-[90%] md:max-w-full relative top-[1em] md:top-[-0.20em]"
        src={image}
        alt={title}
      />
      <h2 className="font-ubuntu text-center leading-tight md:text-lg text-sm relative z-10">{title}</h2>
      {time && (
        <p className="font-ubuntu opacity-50 text-sm md:mt-1">{`${time}`}</p>
      )}
      <span className="relative mt-1 md:mt-2 inline-block font-pangolin bg-black text-secondary-beige px-10 py-1 md:py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-secondary-beige hover:text-black border border-black ">
        Ver
      </span>
    </div>
  );

  const wrapperClass =
    "relative z-10 h-[275px] md:h-[310px] md:w-[225px] w-[250px] flex flex-col justify-end no-underline text-inherit hover:-translate-y-1";

  if (slug) {
    return (
      <Link to={`/recipes/${slug}`} className={wrapperClass}>
        {card}
      </Link>
    );
  }

  return <div className={wrapperClass}>{card}</div>;
};

export default RecipeCard;
