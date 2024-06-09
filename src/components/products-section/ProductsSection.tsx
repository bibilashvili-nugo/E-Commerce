import "./products-section.css";
import HeadphoneImg from "../../assets/image-headphone.png";
import ProductCard from "./ProductCard";

export type ProductInfoType = {
  name: string;
  img: string;
};

const productsArr: ProductInfoType[] = [
  {
    name: "headphones",
    img: HeadphoneImg,
  },
  {
    name: "speakers",
    img: HeadphoneImg,
  },
  {
    name: "earphones",
    img: HeadphoneImg,
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="container products-section-container">
        {/* 1 */}

        {productsArr.map((prod) => {
          return <ProductCard productInfo={prod} key={prod.name} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
