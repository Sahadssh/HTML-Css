import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear session
    navigate("/login");
  };

  return (
    <header id="headroom" className="headbar">
      <div className="container">
        <nav id="navbar">
          <div id="logo">
            <img height="50px" width="50px" src="Logo.png" alt="logo" />
            <p>Ghanshyam Digital</p>
          </div>
          <div className="menu-container">
            <ul className="menu">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>

              {!isLoggedIn ? (
                <>
                  <li><NavLink to="/login">Login</NavLink></li>
                  <li><NavLink to="/signup">Signup</NavLink></li>
                </>
              ) : (
                <>
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li>
  <NavLink to="#" onClick={handleLogout} className="logout-link" style={{ color: "inherit" }}>
    Logout
  </NavLink>
</li>

                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
