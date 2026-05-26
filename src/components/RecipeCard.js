const RecipeCard = ({ image, title, description, time }) => {
  return (
    <div className="relative z-10 h-[305px] md:w-[225px] w-[250px] flex-col flex justify-end">
      <div className="flex flex-col items-center justify-end md:h-[225px] md:w-[225px] h-[225px] w-[250px] bg-secondary-beige rounded-3xl py-4 shadow-[0_8px_12px_rgba(0,0,0,0.12)]">
        <img
          width={200}
          height={200}
          className="object-cover relative top-[0.75em]"
          src={image}
          alt={title}
        />
        <h2 className="font-ubuntu text-lg text-center leading-tight">
          {title}
        </h2>
        {time && (
          <p className="font-ubuntu opacity-50 text-sm mt-1">{`${time}`}</p>
        )}
        <button className="relative font-pangolin bg-secondary-red bg-black text-white px-10 py-2 mt-2 rounded-lg hover:-translate-y-1">
          Ver
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
