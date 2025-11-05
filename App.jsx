import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import "./App.css";

let App = () => {
  let [products, setProducts] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [search, setSearch] = useState("");
  let [cart, setCart] = useState([]);
  let [wishlist, setWishlist] = useState([]);

  // Fetch data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  // Search filter
  useEffect(() => {
    if (search.trim() === "") setFiltered(products);
    else {
      let result = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }
  }, [search, products]);

  // Cart & Wishlist add
  let addToCart = (item) => {
    if (!cart.some((p) => p.id === item.id)) setCart([...cart, item]);
  };

  let addToWishlist = (item) => {
    if (!wishlist.some((p) => p.id === item.id)) setWishlist([...wishlist, item]);
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        {/* 🏠 Home */}
        <Route
          path="/"
          element={
            <AllProducts
              ProductState={filtered}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              cart={cart}
              wishlist={wishlist}
            />
          }
        />

        {/* 🛒 Cart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        {/* ❤️ Wishlist */}
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
        />

        {/* 🔍 Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
