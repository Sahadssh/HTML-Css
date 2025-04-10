import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactCountryFlag from "react-country-flag";
import "./Checkout.css";

const countryCodes = [
  { code: "+91", name: "India", iso: "IN" },
  { code: "+1", name: "USA", iso: "US" },
  { code: "+44", name: "UK", iso: "GB" },
  { code: "+61", name: "Australia", iso: "AU" },
  { code: "+81", name: "Japan", iso: "JP" },
  { code: "+49", name: "Germany", iso: "DE" },
];

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [selectedCode, setSelectedCode] = useState(countryCodes[0]); // Default to India
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("checkoutData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm(parsed);
      const match = countryCodes.find((c) => parsed.phone?.startsWith(c.code));
      if (match) {
        setSelectedCode(match);
        setForm((prev) => ({
          ...prev,
          phone: parsed.phone.replace(match.code, ""),
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const filtered = value.replace(/[^0-9]/g, "");
      setForm((prev) => ({ ...prev, [name]: filtered }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalPhone = selectedCode.code + form.phone;
    const formData = { ...form, phone: finalPhone };
    localStorage.setItem("checkoutData", JSON.stringify(formData));
    localStorage.setItem("cartSummary", JSON.stringify(cartItems));
    alert("✅ Order placed! Data saved to localStorage.");
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-form-section">
        <h2 className="checkout-title">Checkout</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />

          <label>Shipping Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter Your Address"
            required
          />

          <label>Phone Number</label>
          <div className="phone-input-group" style={{ position: "relative" }}>
            <div
              className="custom-code-selector"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <ReactCountryFlag
                countryCode={selectedCode.iso}
                svg
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "8px",
                }}
              />
              <span className="code">{selectedCode.code}</span>
              <span className="arrow">▼</span>
            </div>

            {showDropdown && (
              <div className="dropdown-options">
                {countryCodes.map((item) => (
                  <div
                    key={item.code}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedCode(item);
                      setShowDropdown(false);
                    }}
                  >
                    <ReactCountryFlag
                      countryCode={item.iso}
                      svg
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <span>
                      {item.name} ({item.code})
                    </span>
                  </div>
                ))}
              </div>
            )}

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter number"
              required
              className="phone-input"
            />
          </div>

          <button className="checkout-btn-submit" type="submit">
            Place Order
          </button>
        </form>
      </div>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <hr />
        <div className="checkout-total">
          <strong>Total:</strong>
          <strong>₹{totalPrice}</strong>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
