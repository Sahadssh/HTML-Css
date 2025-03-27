import { useContext } from "react";
// import AuthContext from "../components/AuthContext"; // ✅ Correct import
import { AuthContext } from "../components/AuthContext"; // ✅ Named import
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext); // ✅ Use Context

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
