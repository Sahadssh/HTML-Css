import React from "react";
import "./ProductDate.css"; 

const ProductDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="date-box">
      <div className="date-day">{day}</div>
      <div className="date-month">{month}</div>
      <div className="date-year">{year}</div>
    </div>
  );
};

export default ProductDate;
