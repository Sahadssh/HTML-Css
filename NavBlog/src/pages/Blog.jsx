import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Blog.css";

function Blog() {
  const { loading, posts, page, totalPages, fetchData } = useContext(AppContext);

  return (
    <div className="blog-container">
      <h1>Blog</h1>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}

      {/* Pagination Controls */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => fetchData(page - 1)}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => fetchData(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Blog;
