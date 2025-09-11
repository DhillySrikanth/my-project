import React from "react";
// import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      name: "JOYSTICK",
      price: 27,
      inStock: true,
    },
    {
      name: "Keyboard",
      price: 45.5,
      inStock: false,
    },
    {
      name: "GAMING HEADSET",
      price: 200,
      inStock: true,
    },
  ];

  return (
    <>
      <h2 id="header">Products List</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard props={product} />
        ))}
      </div>
    </>
  );
}

export default App;