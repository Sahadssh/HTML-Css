import { Routes, Route } from "react-router-dom";
import  Navbar  from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Support } from "./Components/Support";
import Login from "./Components/Login";  





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Login" element={<Login />} />
       
       
       
      </Routes>
    </>
  );
}

export default App;
