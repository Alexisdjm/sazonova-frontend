const RecipeCard = ({image, title, description, time}) => {
  return (
    <div className="h-[290px] w-[225px] flex-col flex justify-end">
      <div className="flex flex-col items-center justify-end h-[225px] w-[225px] bg-secondary-beige rounded-3xl py-4">
      <img width={190} height={190} className="object-cover relative top-[0.75em]" src={image} alt={title} />
      <h2 className="font-ubuntu">{title}</h2>
      <p className="font-ubuntu opacity-50 text-sm">{description}</p>
      <button className="font-pangolin bg-secondary-red bg-black text-white px-12 py-2 mt-2 rounded-lg">Ver</button>
      </div>
    </div>
  )
}

export default RecipeCard
