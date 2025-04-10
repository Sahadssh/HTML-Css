import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import "./CartItem.css";

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="cart-item-price">₹{product.price}</p>
      </div>
      <button className="remove-btn" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
