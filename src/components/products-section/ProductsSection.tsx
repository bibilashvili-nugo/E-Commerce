import "./products-section.css";
import HeadphoneImg from "../../assets/image-headphone.png";
import ShadowImg from "../../assets/shadow.png";

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="container products-section-container">
        {/* 1 */}
        <article className="product-card">
          <div className="product-card-img-div">
            <img src={HeadphoneImg} alt="" />
            <img src={ShadowImg} alt="" className="shadow-img" />
          </div>
          <h3>SPEAKERS</h3>
          <a href="#">Shop &gt;</a>
        </article>
        {/* 2 */}
        <article className="product-card">
          <div className="product-card-img-div">
            <img src={HeadphoneImg} alt="" />
            <img src={ShadowImg} alt="" className="shadow-img" />
          </div>
          <h3>SPEAKERS</h3>
          <a href="#">Shop &gt;</a>
        </article>
        {/* 3 */}
        <article className="product-card">
          <div className="product-card-img-div">
            <img src={HeadphoneImg} alt="" />
            <img src={ShadowImg} alt="" className="shadow-img" />
          </div>
          <h3>SPEAKERS</h3>
          <a href="#">Shop &gt;</a>
        </article>
      </div>
    </section>
  );
};

export default ProductsSection;
