import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext(); // ✅ Define context here

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://your-api-endpoint.com/data") // Replace with your actual API
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <AppContext.Provider value={{ data, loading }}>
      {children}
    </AppContext.Provider>
  );
};
