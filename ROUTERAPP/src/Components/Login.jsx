import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtext">Sign in to continue</p>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="login-options">
            <Link to="#" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button className="login-button">Login</button>

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
