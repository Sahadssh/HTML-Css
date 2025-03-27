import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [data, setData] = useState([]); // Blog data
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6); // Adjust as needed
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch Blog API Data
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.example.com/posts?page=${currentPage}`);
        const result = await response.json();
        setData(result.posts);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, [currentPage]); // Runs when page changes

  return (
    <AppContext.Provider value={{ data, currentPage, totalPages, setCurrentPage, darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
