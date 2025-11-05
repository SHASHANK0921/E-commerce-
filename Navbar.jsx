// src/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

let Navbar = ({ search, setSearch }) => {
  let [inputValue, setInputValue] = useState(search || "");

  // keep local inputValue in sync if parent search changes (optional)
  useEffect(() => {
    setInputValue(search || "");
  }, [search]);

  // On every change we update local input and also update the app's search state
  // so backspace or typing immediately filters the list.
  let handleChange = (e) => {
    const v = e.target.value;
    setInputValue(v);
    setSearch(v); // <-- immediate update (fixes backspace not going back)
  };

  let handleSearchClick = () => {
    // optional: keep for UX (re-apply filter explicitly)
    setSearch(inputValue);
  };

  let handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(inputValue);
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🛒 Shashank Store</h2>

      <div className="search-box">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
        />
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
      </div>
    </nav>
  );
};

export default Navbar;
