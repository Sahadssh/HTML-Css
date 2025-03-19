import React, { useState } from "react";
import "./Card.css";

function Card({ course, handleHeartClick }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartToggle = () => {
    setIsLiked(!isLiked);
    handleHeartClick(isLiked);
  };

  return (
    <div className="col-3">
      <div className="card">
        <div className="relative">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-40 object-cover rounded-md"
          />
          {/* Heart Button */}
          <button
            className={`heart-icon ${isLiked ? "liked" : "unliked"}`}
            onClick={handleHeartToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isLiked ? "#f87171" : "none"}
              stroke={isLiked ? "#f87171" : "#e0e0e0"}
              className="heart-svg"
            >
              <path
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </button>
        </div>
        <div className="card-body">
          <h2 className="fs-1 font-bold mt-2">{course.name}</h2>
          <p className="text-gray-600">{course.info}</p>
          <p className="font-semibold mt-2">₹{course.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
