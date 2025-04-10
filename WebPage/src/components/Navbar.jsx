import React, { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log("Sidebar toggled!");
  };

  return (
    <>
      <nav className="navbar">
        {/* Left: Menu Icon + Logo */}
        <div className="navbar-left">
          <HiOutlineMenuAlt1 className="menu-icon" onClick={toggleSidebar} />
          <img src="/Logo.png" alt="Logo" className="logo-image" />
        </div>

        {/* Right: Icons */}
        <div className="navbar-right">
          <IoSearch className="nav-icon" />
          <CiHeart className="nav-icon" />
          <div className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </div>
        </div>
      </nav>

      {/* Sidebar Placeholder */}
      {isSidebarOpen && (
        <div className="sidebar">
          <p>Sidebar</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
