import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <nav className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand Name */}
        <h1 className="text-xl font-bold">
          <Link to="/">NavBlog</Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/signup" className="hover:underline">Signup</Link></li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="p-2 border rounded">
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
