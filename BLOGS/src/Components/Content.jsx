// src/Components/Content.jsx

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Content() {
  const { posts, loading } = useContext(AppContext);

  return (
    <main>
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))
      )}
    </main>
  );
}

export default Content;
