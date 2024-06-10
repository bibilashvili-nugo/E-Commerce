import { useState } from "react";
import AudioGearSection from "../components/audio-gear-section/AudioGearSection";
import Hero from "../components/hero/Hero";
import ProductsSection from "../components/products-section/ProductsSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection";
import Input from "../components/ui/input/Input";
import NumberInput from "../components/ui/number-input/NumberInput";
// import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [num, setNum] = useState(2);

  return (
    <>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <AudioGearSection />

      <div className="container">
        <Input
          isError={true}
          errorMsg="Wrong Email"
          type="text"
          placeholder="Insert your name"
          label="email"
        />
        <br />
        <NumberInput number={num} setNumber={setNum} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "start",
            margin: "20px 0",
          }}
        >
          <Input
            name="payment-type"
            type="radio"
            placeholder="Insert your name"
            label="E-Money"
          />
          <Input
            name="payment-type"
            type="radio"
            placeholder="Insert your name"
            label="Cash On"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
