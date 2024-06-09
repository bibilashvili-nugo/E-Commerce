import AudioGearSection from "../components/audio-gear-section/AudioGearSection";
import Hero from "../components/hero/Hero";
import ProductsSection from "../components/products-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
// import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <AudioGearSection />
    </>
  );
};

export default Home;
