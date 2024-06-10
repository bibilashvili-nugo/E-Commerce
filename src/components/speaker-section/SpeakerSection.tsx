import "./speaker-section.css";
import SpeakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import CircleImg from "../../assets/home/desktop/pattern-circles.svg";
// import { Link } from "react-router-dom";
import Button from "../ui/button/Button";

const SpeakerSection = () => {
  return (
    <section className="speaker-section">
      <div className="container speaker-section-container">
        <img className="speaker-img" src={SpeakerImg} alt="" />
        <img className="circle-img" src={CircleImg} alt="" />
        <div className="content">
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          {/* <Link to="/products/headphones/6">See Product</Link> */}
          <Button to="/products/headphones/6" type="dark" isLink={true}>
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
