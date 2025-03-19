import React from "react";
import Card from "./Card";
import "./Cards.css"; 

function Cards({ courses, handleHeartClick }) {
  return (
    <div className="row">
      {courses.length > 0 ? (
        courses.map((course) => (
          <Card key={course.id} course={course} handleHeartClick={handleHeartClick} />
        ))
      ) : (
        <p className="no-courses">No courses available.</p>
      )}
    </div>
  );
}

export default Cards;
