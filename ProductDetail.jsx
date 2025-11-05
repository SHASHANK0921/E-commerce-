import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let ProductDetail = () => {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} height="200" alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price: ₹{(product.price * 83).toFixed(0)}</h3>
      <h3>Rating: ⭐ {product.rating.rate}</h3>
    </div>
  );
};

export default ProductDetail;
