import React from "react";
import './Filter.css'

function Filter({ setCategory }) {
  const categories = ["All", "Development", "Business", "Design", "Lifestyle"];

  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="filter-btn"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;
