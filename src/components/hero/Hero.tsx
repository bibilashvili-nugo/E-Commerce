import "./hero.css";
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
          <a href="#">See Product</a>
        </div>
        {/* <div className="hero-right">
          <img src={HeroImg} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
