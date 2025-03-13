import { useState } from "react";
import "./Card.css";
function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt={name} />
            <div className="tour-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
            {readmore ? info : `${info.substring(0, 70)}...`}  
  <button className="read-more" onClick={readmoreHandler}>
    {readmore ? " Show Less" : " Read More"}
  </button>

            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
