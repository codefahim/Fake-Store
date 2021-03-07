import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = (props) => {
  let { id } = useParams();
  const [singleProduct, setProduct] = useState([]);
  const { title, price, description, category, image } = singleProduct;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((allProduct) => setProduct(allProduct));
  }, []);
  console.log(singleProduct);
  return (
    <>
      <div className="jumbotron">
        <img src={image} alt="" />
        <h1 className="display-4">{category}</h1>
        <p className="lead">{title}</p>
        <p>{description}</p>
        <code>Price: {price}</code>
      </div>
    </>
  );
};

export default Details;
