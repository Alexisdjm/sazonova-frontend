import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from '../assets/exporting';
import { Vector2Icon, Vector3Icon } from './icons';
import Slide from './Slide';

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
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["mobile","tablet"]}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        containerClass="w-full md:h-full h-screen z-10"
        itemClass="w-full md:h-full h-screen"
      >
        <Slide buttonStyle='style1' image={images.sazonovaLogoRed} background="red-logo" button={true} buttonUrl="/" buttonText="Ver más" buttonPosition="bottom-12 right-16">
          <div className="w-full h-screen md:h-full flex items-center gap-6 flex-col justify-end">
            <div className='text-center mb-2 relative z-10'>
              <h1 className='font-sugo text-secondary-beige text-9xl font-bold uppercase tracking-widest drop-shadow-2xl mb-[-1rem]'>Rompa</h1>
              <span className='font-ubuntu text-secondary-beige text-[24px] tracking-widest drop-shadow-2xl'>en caso de que le falte</span>
              <h1 className='font-sugo text-secondary-beige text-9xl font-bold uppercase tracking-widest drop-shadow-2xl mt-[-0.3rem]'>sazón</h1>
              <h3
                data-text="a su comida"
                className='isolate relative z-10 font-calling-heart -mt-10 text-6xl font-medium text-secondary-beige before:content-[attr(data-text)] before:absolute before:inset-0 before:-z-10 before:[-webkit-text-stroke:12px_var(--gradient-dark-red)] before:text-primary-red'
              >
                a su comida
              </h3>
            </div>
            <img className='z-10 w-[400px] md:w-[450px]' src={images.glass} width={450} alt="glass" />
            <img src={images.cuchara} width={250} alt="cuchara" className="hidden md:block z-10 rotate-[-75deg] absolute top-1/4 right-[-3rem]" />
            <Vector2Icon className="md:w-full md:h-full absolute z-0 top-1/4 right-0" />
          </div>
        </Slide>
        <Slide button={true} buttonUrl="/" buttonText="Ver más" buttonPosition="bottom-12 right-16" buttonStyle='style2' background="orange-lines">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center  flex-col justify-end">
            <div className='text-center mb-2 relative z-10 flex flex-col items-center'>
              <span className='font-sugo text-secondary-beige text-5xl tracking-widest drop-shadow-2xl relative z-20'>NO SEPARES AL</span>
              <div className="relative inline-block">
                <h1 className='font-sugo text-secondary-beige text-[250px] -mt-24 -mb-20'>DUO</h1>
                <img src={images.badge1} width={100} alt="badge superior" className="absolute top-0 left-[-40px] z-20" />
                <img src={images.badge2} width={100} alt="badge inferior" className="absolute bottom-0 right-[-40px] z-20" />
              </div>
            </div>
            <img className='z-10' src={images.standings} width={550} alt="glass" />
            </div>
            <img src={images.hand} width={150} alt="cuchara" className="z-10 absolute bottom-0 left-[48%] animate-up-down" />
            <Vector3Icon className="w-full h-full absolute z-0 top-1/4 right-0" />
          </div>
        </Slide>
      </Carousel>
    </>
  );
};

export default Slider;
