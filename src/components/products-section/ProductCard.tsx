import { Link } from "react-router-dom";
import { ProductInfoType } from "./ProductsSection";
import ShadowImg from "../../assets/shadow.png";

type Props = {
  productInfo: ProductInfoType;
};

const ProductCard = ({ productInfo }: Props) => {
  return (
    <article className="product-card">
      <div className="product-card-img-div">
        <img src={productInfo.img} alt="" />
        <img src={ShadowImg} alt="" className="shadow-img" />
      </div>
      <h3>{productInfo.name}</h3>
      <Link to={`products/${productInfo.name}`}>Shop &gt;</Link>
    </article>
  );
};

export default ProductCard;
