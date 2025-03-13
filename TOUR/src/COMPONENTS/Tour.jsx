import "./Tour.css";
import Card from "./Card"; // Make sure this path is correct!

function Tour({ tour, removeTour }) {
    console.log("Tour component received data:", tour); // Debugging

    if (!tour || tour.length === 0) {
        return <h2>No Tours Available</h2>;
    }

    return (
        <div>
            <div>
                <h2>PLAN WITH LOVE</h2>
            </div>

            <div>
                {tour.map((t) => (
                    <Card key={t.id} {...t} removeTour={removeTour} />
                ))}
            </div>
        </div>
    );
}

export default Tour;
