import "./Tour.css";
import Card from "./Card";

function Tour({ tours, removeTour }) {
    return (
        <div className="tour-container">
            {tours.map((tour) => (
                <Card key={tour.id} {...tour} removeTour={removeTour} />
            ))}
        </div>
    );
}

export default Tour;
