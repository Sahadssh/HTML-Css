import React, { useState,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

 
  const handleLogin = (e) => {
    e.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert("Invalid email or password!");
      return;
    }

   
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");

    alert("Login successful! Redirecting to Dashboard...");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtext">Sign in to continue</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="login-options">
              <Link to="#" className="forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>

          <div className="social-login">
            <button className="social-button facebook">F</button>
            <button className="social-button google">G</button>
            <button className="social-button linkedin">in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
