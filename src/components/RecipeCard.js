const RecipeCard = ({image, title, description, time}) => {
  return (
    <div className="relative z-10 h-[305px] md:w-[225px] w-[250px] flex-col flex justify-end">
      <div className="flex flex-col items-center justify-end md:h-[225px] md:w-[225px] h-[225px] w-[250px] bg-secondary-beige rounded-3xl py-4">
      <img width={200} height={200} className="object-cover relative top-[0.75em]" src={image} alt={title} />
      <h2 className="font-ubuntu text-lg text-center">{title}</h2>
      {time && <p className="font-ubuntu opacity-50 text-sm mt-1">{`${time}`}</p>}
      <button className="font-pangolin bg-secondary-red bg-black text-white px-10 py-2 mt-2 rounded-lg">Ver</button>
      </div>
    </div>
  )
}

export default RecipeCard
