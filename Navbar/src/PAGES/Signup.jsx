import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css"; 
function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { fullName, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful! Redirecting to Login...");
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <p className="signup-subtext">Sign up to get started</p>

          <form onSubmit={handleSignup}>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                required 
                autoComplete="off"
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
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
              <label>Create Password</label>
              <input 
                type="password" 
                placeholder="Create a password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                autoComplete="new-password"
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm your password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
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

export default Signup;
