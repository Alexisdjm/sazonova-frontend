import { Header, HeroBanner, Recipes, VideoComponent, Slider } from "./";
import images from "../assets/exporting";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Recipes />
      <VideoComponent videoSrc={images.video1}/>
      <Slider />
    </>
  )
}

export default Homepage
