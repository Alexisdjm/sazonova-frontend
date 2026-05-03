import images from "../assets/exporting";

const ClickDown = () => {
  return (
    <>
      <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="absolute bottom-0 w-full flex flex-col items-center cursor-pointer animate-bounce mt-8 z-10">
        <p className="text-secondary-beige text-[12px] regular font-ubuntu">ver más</p>
        <img className="w-[50px] h-[50px]" src={images.clickDown} alt="ver más" />
      </button>
    </>
  )
}

export default ClickDown
