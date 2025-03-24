import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext"; // ✅ Correct Import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider> {/* ✅ Wrap App with AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>
);
