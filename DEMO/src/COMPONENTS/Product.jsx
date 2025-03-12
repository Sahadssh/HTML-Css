import React from "react";
import ProductItem from "./ProductItem";
import "./Product.css"; // Import CSS for styling

const Products = (props) => {
  return (
    <div className="products">
      {props.items.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.title}</h2> {/* Make sure title is displayed */}
          <p>Price: ${product.amount}</p>
          <p>Date: {product.date.toDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;