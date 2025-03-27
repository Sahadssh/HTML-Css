import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext"; // ✅ Named import
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const { login } = useContext(AuthContext); // ✅ Correctly access context
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

    login(); // ✅ Call login from context
    alert("Login successful! Redirecting to Dashboard...");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <h2>Welcome Back</h2>
      <p className="login-subtext">Sign in to continue</p>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
