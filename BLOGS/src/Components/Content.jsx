import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Content() {
  const { posts, loading } = useContext(AppContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}

export default Content;
