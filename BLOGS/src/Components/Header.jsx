// src/Components/Header.jsx

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Header() {
  const { isDarkMode, toggleTheme } = useContext(AppContext);

  return (
    <header>
      <h1>Blog</h1>
      <div className="toggle-container" onClick={toggleTheme}>
        <div className={`toggle-button ${isDarkMode ? "dark-mode" : ""}`}>
          {isDarkMode ? "🌙" : "☀️"}
        </div>
      </div>
    </header>
  );
}

export default Header;
