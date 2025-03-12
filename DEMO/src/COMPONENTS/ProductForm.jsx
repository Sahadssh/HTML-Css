import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    const productData = {
      title: formData.title, // ✅ Ensure correct title
      amount: +formData.amount,
      date: new Date(formData.date),
    };

    props.onSaveProductData(productData); // ✅ Send correct title to `NewProduct.jsx`
    setFormData({ title: "", amount: "", date: "" }); // Reset form
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={inputChangeHandler} // ✅ Update title correctly
          />
        </div>
        <div className="form-control">
          <label>Price</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
