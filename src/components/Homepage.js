import { Header, HeroBanner, Recipes, VideoComponent, Slider, MapLocations, Compare, Form, Footer } from "./";
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
      <Form />
      <Footer />
    </>
  )
}

export default Homepage
