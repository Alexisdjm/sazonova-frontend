import { Header, HeroBanner, Recipes, VideoComponent, Slider, MapLocations, Compare } from "./";
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
      <Compare />
    </>
  )
}

export default Homepage
