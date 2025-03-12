import React, { useState } from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Popcorn"); // Updating the title state
  }

  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-details">
        <h2>{title}</h2> {}
        <p className="price">Price: ${props.amount}</p>
        <button onClick={clickHandler}> CHANGE</button>
      </div>
    </Card>
  );
};

export default ProductItem;
