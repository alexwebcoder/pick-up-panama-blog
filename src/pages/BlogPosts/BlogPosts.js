import BlogList from "../Home/BlogList";
import useFetch from "../../hooks/useFetch";
import "./BlogPosts.css";

import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import Featured from "../Home/Featured";

const BlogPosts = () => {
  const {data, isPending, error} = useFetch('http://localhost:8000/blogs');
  // const { data, isPending, error } = useFetch(
  //   "https://pick-705a9-default-rtdb.firebaseio.com/blogs/.json"
  // );
  TabTitle("Panama Blog");
  Capitalize();

  return (
    <main id="main-element" className="blog-posts">
      <h1>Panama Blog Posts</h1>
      <Featured />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
    </main>
  );
};

export default BlogPosts;
