import { Link } from "react-router-dom";

const handleArticleChange = () => {
  document.querySelector(".disabled")?.classList.remove("disabled");
  document.querySelector(".sidenav .disabled")?.classList.remove("disabled");
  document.querySelector(".footer .disabled")?.classList.remove("disabled");
};

const BlogList = ({ blogs, title }) => {
  return (
    <div className="card-container">
      {blogs.map((blog) => (
        <article key={blog.id}>
          <Link to={`/blogs/${blog.id}`} onClick={handleArticleChange}>
            <figure className="card-img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${blog.Thum320w} 320w, ${blog.Thum960w} 960w, ${blog.Thum492w} 492w`} 
                  sizes="(max-width: 320px) 320px, (max-width: 960px) 960px, 492px"
                />
                <source
                  type="image/jpg"
                  srcSet={`${blog.Thum320j} 320w, ${blog.Thum960j} 960w, ${blog.Thum960j} 492w`}
                  sizes="(max-width: 320px) 320px, (max-width: 960px) 960px, 492px"
                />
                <img
                  className="no-right-click"
                  src={blog.Thum492j}
                  alt={blog.alt}
                />
              </picture>
            </figure>
            <div className="blog-article-content">
              <h3>{blog.title}</h3>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
