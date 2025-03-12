import React, { useState } from "react";
import Products from "./COMPONENTS/Product";
import NewProduct from "./COMPONENTS/NewProduct";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    { id: "p1", title: "Nirma", amount: 100, date: new Date(2024, 2, 10) },
    { id: "p2", title: "Surf", amount: 200, date: new Date(2024, 3, 15) },
    { id: "p3", title: "Wheel", amount: 300, date: new Date(2024, 4, 20) },
    { id: "p4", title: "Tide", amount: 400, date: new Date(2024, 5, 25) },
  ]);

  function addProductHandler(product) {
    console.log("🚀 Adding Product:", product); // Debugging Log

    setProducts((prevProducts) => {
      const updatedProducts = [product, ...prevProducts]; // Correctly add new product
      console.log("✅ Updated Products:", updatedProducts); // Check if title is correct
      return updatedProducts;
    });
  }

  return (
    <div className="app-container">
      <NewProduct onAddProduct={addProductHandler} />
      <Products items={products} />
    </div>
  );
};

export default App;
