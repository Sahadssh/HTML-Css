import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const { toggleTheme, isDarkMode } = useContext(AppContext);

  return (
    <header>
      <h1>Blog</h1>
      
    
      <div className="toggle-container" onClick={toggleTheme}>
        <div className={`toggle-button ${isDarkMode ? "dark-mode" : ""}`}>
          {isDarkMode ? "🌙" : "🌞"}
        </div>
      </div>

    </header>
  );
}
