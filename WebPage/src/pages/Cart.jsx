import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/cartSlice';

import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id, name) => {
    dispatch(removeFromCart(id));
    toast.error(`${name} removed from cart`);
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.warn('Cart has been cleared');
  };

 
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-heading">
        <FaShoppingCart className="cart-icon" /> Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is Empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">₹{item.price}</p>

                 
                  <div className="quantity-controls">
                    {item.quantity > 1 ? (
                      <button onClick={() => handleDecrease(item.id)}>
                        <FaMinus />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                      >
                        <FaTrash />
                      </button>
                    )}

                    <span className="quantity">{item.quantity || 1}</span>

                    <button onClick={() => handleIncrease(item.id)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id, item.name)}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>

          
          <div className="cart-footer">
            <p className="total-price">Total: ₹{totalPrice}</p>

            <button className="clear-cart-btn" onClick={handleClearCart}>
              Clear Cart
            </button>

            <button
              className="checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
