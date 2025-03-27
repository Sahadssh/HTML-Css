// src/Components/Pages.jsx

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pages() {
  const { page, nextPage, prevPage, totalPages } = useContext(AppContext);

  return (
    <footer>
      <button onClick={prevPage} disabled={page === 1}>
        Prev
      </button>
      <span> Page {page} of {totalPages} </span>
      <button onClick={nextPage} disabled={page === totalPages}>
        Next
      </button>
    </footer>
  );
}

export default Pages;
