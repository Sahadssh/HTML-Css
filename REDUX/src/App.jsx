import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Redux/Slices/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 >Redux Counter App</h1>
      <div >{count}</div>
      <div>
        <button
        
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
       
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
         
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
