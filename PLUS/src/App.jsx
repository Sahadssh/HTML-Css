import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
    
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="container">
     
      <div className="heading">Increment & Decrement</div>

     
      <div className="counter-box">
        <button className="decrement" onClick={decreaseHandler}>
          -
        </button>

        <div className="counter">{count}</div>

        <button className="increment" onClick={increaseHandler}>
          +
        </button>
      </div>

      
      <button className="reset-btn" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default App;




