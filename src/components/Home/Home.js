import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((allProducts) => setProduct(allProducts));
  }, []);

  return (
    <div className="d-flex flex-wrap text-center m-auto">
      {product.map((pd) => (
        <Product key={pd.id} item={pd}></Product>
      ))}
    </div>
  );
};

export default Home;
