import AudioGearSection from "../components/audio-gear-section/AudioGearSection";
import Hero from "../components/hero/Hero";
import ProductsSection from "../components/products-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import Input from "../components/ui/input/Input";
// import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <AudioGearSection />

      <Input
        label={"email"}
        type="text"
        isError={false}
        placeholder="Insert your name"
      />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
