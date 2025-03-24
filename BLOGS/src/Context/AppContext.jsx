import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const limit = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${(page - 1) * limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, [page]);

  const nextPage = () => setPage((prev) => (prev < 6 ? prev + 1 : prev));
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <AppContext.Provider value={{ posts, page, nextPage, prevPage, loading, toggleTheme, isDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}
