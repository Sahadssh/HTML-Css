// import { useState } from 'react'
import review from '../Data'
import './App.css'
import { Testimonial } from './COMP/Testimonial.JSX'

function App() {
  return (
    <div className="app-container">
      <h1>OUR TESTIMONIALS</h1>
      <Testimonial review={review} />
    </div>
  );
}
 

export default App
