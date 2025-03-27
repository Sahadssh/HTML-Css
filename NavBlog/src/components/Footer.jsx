import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Footer.css";

function Footer() {
  const { darkMode } = useContext(AppContext);

  return (
    <footer className={darkMode ? "footer dark" : "footer"}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Top</button>
      <p>© 2025 My Blog. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
