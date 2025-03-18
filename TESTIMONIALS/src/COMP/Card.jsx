import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import './Card.css'

const Card = ({ review, nextReview, prevReview, randomReview }) => {
    return (
        <div className="card">
            
            <img src={review.image} alt={review.name} className="profile-pic" />

            <p className="name">{review.name}</p>
            <p className="job">{review.job}</p>

            <FaQuoteLeft className="quote-icon" />
            <p className="text">{review.text}</p>
            <FaQuoteRight className="quote-icon" />

            {/* Navigation Buttons */}
            <div className='arrow'>
                <button onClick={prevReview}>
                    <SlArrowLeft />
                </button>

                <button onClick={nextReview}>
                    <SlArrowRight />
                </button>
            </div>

            {/* Surprise Me Button */}
            <button onClick={randomReview} className="surprise-btn">
                Surprise Me
            </button>
        </div>
    );
};

export default Card;
