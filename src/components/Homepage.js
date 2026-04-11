import { Header, HeroBanner, Recipes, VideoComponent, Slider, MapLocations } from "./";
import images from "../assets/exporting";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Recipes />
      <VideoComponent videoSrc={images.video1}/>
      <Slider />
      <MapLocations />
    </>
  )
}

export default Homepage
