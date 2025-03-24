import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pages() {
  const { page, nextPage, prevPage } = useContext(AppContext);

  return (
    <footer>
      {/* Show Previous button only if page > 1 */}
      {page > 1 && (
        <button onClick={prevPage}>Previous</button>
      )}

      <span>Page {page} of 6</span>

      {/* Show Next button only if page < 6 */}
      {page < 6 && (
        <button onClick={nextPage}>Next</button>
      )}
    </footer>
  );
}

export default Pages;
