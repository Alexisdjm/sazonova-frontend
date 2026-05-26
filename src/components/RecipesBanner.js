import images from "../assets/exporting";

const RecipesBanner = () => {
  return (
    <section className="w-full bg-[#650208] text-secondary-beige py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full px-6 text-center">
        <h1 className="uppercase font-sugo md:text-8xl text-6xl font-medium">Recetas</h1>
        <p className="mt-4 text-lg font-ubuntu opacity-90">Inspírate con nuestras mejores recetas y sabores.</p>
        <div className="mt-8 flex justify-center">
          <img src={images.plate} alt="decor" className="w-40 h-auto opacity-90" />
        </div>
      </div>
    </section>
  )
}

export default RecipesBanner
