import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from '../assets/exporting';
import { Vector2Icon } from './icons';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-6 md:left-10 z-10 p-3 md:p-4 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white transition-all focus:outline-none"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute right-6 md:right-10 z-10 p-3 md:p-4 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white transition-all focus:outline-none"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 md:w-8 md:h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
};

const Slider = () => {
  return (
    <section className="relative w-full h-screen bg-primary-red overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col gap-y-3 py-3 -ml-16">
        {[...Array(35)].map((_, i) => (
          <div key={i} className={`flex gap-x-3 min-w-max ${i % 2 !== 0 ? '-translate-x-[62px]' : ''}`}>
            {[...Array(40)].map((_, j) => (
              <img key={j} src={images.sazonovaLogoRed} className="w-[100px] h-auto object-contain" alt="" />
            ))}
          </div>
        ))}
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        containerClass="w-full h-full z-10"
        itemClass="w-full h-full"
      >
        <div className="w-full h-[100vh] flex items-center flex-col justify-end">
          <div className='text-center mb-2'>
            <h1 className='font-sugo text-secondary-beige md:text-9xl font-bold uppercase tracking-widest drop-shadow-2xl mb-[-1rem]'>Rompa</h1>
            <span className='font-ubuntu text-secondary-beige md:text-[24px] tracking-widest drop-shadow-2xl'>en caso de que le falte</span>
            <h1 className='font-sugo text-secondary-beige md:text-9xl font-bold uppercase tracking-widest drop-shadow-2xl mt-[-0.3rem]'>sazón</h1>
            <h3
              data-text="a su comida"
              className='isolate relative z-10 font-calling-heart -mt-10 text-6xl font-medium text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:12px_var(--gradient-dark-red)] before:text-primary-red'
            >
              a su comida
            </h3>
          </div>
          <img src={images.glass} width={450} alt="glass" />
        </div>
        <div className="w-full h-[100vh] flex items-center justify-center">
          <h2 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-widest drop-shadow-2xl">
            SLIDE DOS
          </h2>
        </div>
      </Carousel>
      <img src={images.cuchara} width={250} alt="cuchara" className="rotate-[-75deg] absolute z-0 top-1/4 right-[-3rem]" />
      <Vector2Icon className="w-full h-full absolute z-0 top-1/4 right-0" />
    </section>
  );
};

export default Slider;
