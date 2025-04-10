import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const found = cartItems.find((item) => item.id === product.id);
    setIsInCart(!!found);
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart({ ...product, quantity: 1 }));

      toast.success(
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FaCheckCircle color="white" size={20} />
          <span>{product.name} added to cart!</span>
        </div>,
        { icon: false }
      );
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">₹{product.price}</p>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        {isInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
