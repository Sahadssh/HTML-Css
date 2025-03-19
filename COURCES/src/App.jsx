import { useEffect, useState } from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./COMP/Navbar";
import Filter from "./COMP/Filter";
import Cards from "./COMP/Cards";

function App() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const categories = ["Development", "Business", "Design", "Lifestyle"];
        const allCourses = [];

        for (const cat of categories) {
          const response = await fetch(`http://localhost:3001/${cat}`);
          const data = await response.json();
          allCourses.push(...data.map((course) => ({ ...course, category: cat })));
        }

        setCourses(allCourses);
        setFilteredCourses(allCourses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (category === "All") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.category === category));
    }
  }, [category, courses]);

  const handleHeartClick = (isLiked) => {
    if (isLiked) {
      toast.success("You unliked this course!");
    } else {
      toast.success("You liked this course!");
    }
  };

  return (
    <div>
      <Navbar />
      <Filter setCategory={setCategory} />
      <Cards courses={filteredCourses} handleHeartClick={handleHeartClick} />
      <ToastContainer />
    </div>
  );
}

export default App;
