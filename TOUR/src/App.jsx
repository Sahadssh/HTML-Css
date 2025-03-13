import React, { useState } from "react";
import Data from "./Data.js";
import Tour from "./COMPONENTS/Tour.jsx";

const App = () => {
    const [tours, setTours] = useState(Data);

    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    console.log("Data from Data.js:", tours); // Debugging Log

    return (
        <div>
            <Tour tour={tours} removeTour={removeTour} />
        </div>
    );
};

export default App;
