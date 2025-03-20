import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg	bg-primary-subtle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded={menuOpen} 
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={() => setMenuOpen(false)} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Support" onClick={() => setMenuOpen(false)}>Support</Link>
            </li>
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle" 
                to="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled" aria-disabled="true">Disabled</span>
            </li>
          </ul>

          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-primary">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
