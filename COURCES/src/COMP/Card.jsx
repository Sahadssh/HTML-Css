import React, { useState } from "react";

function Card({ course, handleHeartClick }) {
  // Add a state for whether the heart is liked or not
  const [isLiked, setIsLiked] = useState(false);

  // Toggle the heart state and show toast when clicked
  const handleHeartToggle = () => {
    setIsLiked(!isLiked); // Toggle the like state
    handleHeartClick(isLiked); // Show success toast
  };

  return (
    <div className="col-2">
      <div className="card">
        <div className="relative">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-40 object-cover rounded-md"
          />
          {/* Heart Icon inside a circular button */}
          <button
            className={`heart-icon absolute top-2 right-2 ${isLiked ? "liked" : "unliked"}`}
            onClick={handleHeartToggle}
          >
            {/* SVG Heart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isLiked ? "#f87171" : "none"} // Red when liked, transparent when unliked
              stroke={isLiked ? "#f87171" : "#e0e0e0"} // Red stroke when liked, gray when unliked
              className="heart-svg"
            >
              <path
                fill="none"
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
