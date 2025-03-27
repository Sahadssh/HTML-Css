import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Correct path
import Login from "../pages/Login";
import Logout from "../pages/Logout";



import Dashboard from "../pages/Dashboard"; 
import Signup from "../pages/Signup"; 
import ProtectedRoute from "../components/ProtectedRoute"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protect Dashboard Route */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
