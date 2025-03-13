import React, { useState } from "react";
import Data from "./Data";
import Tour from "./COMPONENTS/Tour";
import "./App.css";

function App() {
    const [tours, setTours] = useState(Data);

    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    function resetTours() {
        setTours(Data);
    }

    return (
        <div className="app-container">
            {tours.length > 0 && <h1 className="tour-title">Tour Destinations</h1>}  
            
            {tours.length === 0 ? (
                <div className="reset-container">
                    <h2>No Tours Left</h2>
                    <button className="reset-btn" onClick={resetTours}>REFRESH</button>
                </div>
            ) : (
                <Tour tours={tours} removeTour={removeTour} />
            )}
        </div>
    );
}

export default App;
