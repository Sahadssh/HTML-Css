import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import "./Logout.css";

function Logout() {
  const { logout } = useContext(AuthContext); // Get logout function from context
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Log the user out

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [logout, navigate]);

  return (
    <div className="page-container">
      <h1>Welcome to the Dashboard</h1>
      <p>You have been logged out.</p>
    </div>
  );
}

export default Logout;
