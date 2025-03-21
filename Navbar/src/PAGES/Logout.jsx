import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Logout.css'

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
   
    localStorage.removeItem("isLoggedIn");

    
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

  return (
    <div className="page-container">
      <h1>Welcome to the Dashboard</h1>
      <p>You have been logged out.</p>
    </div>
  );
}

export default Logout;
