import { useState } from "react";

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

type Data = Product[];

function App() {
  const [products, setProducts] = useState<null | Data>(null);

  const getData = async () => {
    const res = await fetch("http://localhost:5173/data.json");
    const data = await res.json();
    setProducts(data);
  };
  return (
    <>
      <button onClick={() => getData()}>Get Data</button>
      <h1>add h1</h1>

      {products?.map((product) => {
        return (
          <div key={product.id}>
            <img
              src={`http://localhost:5173/${product.image.desktop}`}
              alt=""
            />
            <p>{product.name}</p>
            <p>{product.id}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
