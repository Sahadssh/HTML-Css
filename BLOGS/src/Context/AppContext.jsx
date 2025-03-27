// src/Context/AppContext.jsx

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const limit = 5;

  useEffect(() => {
    setLoading(true);

    // Fetch total number of posts dynamically
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.total / limit)); // Calculate pages
      })
      .catch(console.error);

    // Fetch posts for current page
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(page - 1) * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(console.error);

    // Apply dark mode class
    document.body.classList.toggle("dark", isDarkMode);
  }, [page, isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      document.body.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  const nextPage = () => setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <AppContext.Provider value={{ posts, page, nextPage, prevPage, loading, totalPages, isDarkMode, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}
