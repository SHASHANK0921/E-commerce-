import React from "react";
import "./CartWishlist.css";

let Cart = ({ cart, setCart }) => {
  let handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="page-container">
      <h2 className="page-title">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-text">Your cart is empty.</p>
      ) : (
        <div className="cw-grid">
          {cart.map((item, i) => (
            <div key={i} className="cw-card">
              <img src={item.image} alt={item.title} className="cw-img" />
              <div className="cw-details">
                <h3 className="cw-title">{item.title}</h3>
                <h4 className="cw-price">₹{(item.price * 83).toFixed(0)}</h4>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
