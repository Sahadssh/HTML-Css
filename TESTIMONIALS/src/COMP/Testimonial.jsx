import React, { useState } from 'react';
import Card from './Card'; 
import review from '../../Data';

export const Testimonial = () => {
    const [index, setIndex] = useState(0); 
   
    function nextReview() {
        setIndex((prevIndex) => (prevIndex + 1) % review.length);
    }

    
    function prevReview() {
        setIndex((prevIndex) => (prevIndex - 1 + review.length) % review.length);
    }

    
    function randomReview() {
        let randomIndex = Math.floor(Math.random() * review.length);
        while (randomIndex === index) {
            randomIndex = Math.floor(Math.random() * review.length); 
        }
        setIndex(randomIndex);
    }

    return (
        <div className="testimonial-container">
            <Card 
                review={review[index]} 
                nextReview={nextReview} 
                prevReview={prevReview} 
                randomReview={randomReview} 
            />
        </div>
    );
};

export default Testimonial;
