import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Product Store</h1>

      <div className="container">
        <ProductCard
          name="Wireless Headphones"
          price="2999"
          image="https://via.placeholder.com/200"
          inStock={true}
        />

        <ProductCard
          name="Smart Watch"
          price="4999"
          image="https://via.placeholder.com/200"
          inStock={false}
        />

        <ProductCard
          name="Bluetooth Speaker"
          price="1999"
          image="https://via.placeholder.com/200"
          inStock={true}
        />
      </div>
    </div>
  );
}

export default App;
