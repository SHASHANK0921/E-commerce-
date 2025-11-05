import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProducts.css";

let AllProducts = ({ ProductState, addToCart, addToWishlist }) => {
  let navigate = useNavigate();

  let formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price * 83);

  return (
    <main className="products-container">
      {ProductState.map((e, i) => (
        <div className="product-card" key={i}>
          {/* 🖼️ Product Image */}
          <img
            src={e.image}
            alt={e.title}
            onClick={() => navigate(`/product/${e.id}`)}
            className="product-img"
          />

          {/* 🏷️ Product Title */}
          <h3 className="product-title">{e.title}</h3>

          {/* 💰 Price */}
          <p className="product-price">{formatPrice(e.price)}</p>

          {/* ⭐ Rating */}
          <p className="product-rating">⭐ {e.rating.rate}</p>

          {/* 🛒 Buttons */}
          <div className="btn-row">
            <button className="cart-btn" onClick={() => addToCart(e)}>
              Add To Cart
            </button>
            <button className="wish-btn" onClick={() => addToWishlist(e)}>
              ❤️
            </button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default AllProducts;
