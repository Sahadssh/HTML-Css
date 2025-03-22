import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";
import "./App.css";

function App() {
    return (
        <>
            {/* Navbar */}
            <div className="navbar">GIF Generator</div>

            {/* Main Content */}
            <div className="content">
                <div className="container">
                    <Random />
                    <Tag />
                </div>
            </div>
        </>
    );
}

export default App;
