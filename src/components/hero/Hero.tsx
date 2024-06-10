// import { Link } from "react-router-dom";
import "./hero.css";
import Button from "../ui/button/Button";
// import HeroImg from "../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <p>NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          {/* <Link to="/products/headphones/4">See Product</Link> */}
          <Button to="/products/headphones/4" isLink={true}>
            See Product
          </Button>
        </div>
        {/* <div className="hero-right">
          <img src={HeroImg} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
