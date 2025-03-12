import React from "react";
import ProductForm from "./ProductForm";
import "./NewProduct.css";

const NewProduct = (props) => {
  function saveProductDataHandler(enteredProductData) {
    const productData = {
      ...enteredProductData,
      id: Math.random().toString(),
    };
    props.onAddProduct(productData);
  }

  return (
    <div className="new-product">
      <ProductForm onSaveProductData={saveProductDataHandler} />
    </div>
  );
};

export default NewProduct;
