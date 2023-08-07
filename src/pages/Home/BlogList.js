import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return(
      <div className="card-container">
        {blogs.map((blog) => (
            <article key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
              <figure className="card-img">
                        <img src={blog.image} alt="Panamanian motorcycle club riding through Panama City"/>
                    </figure>
                <div className="blog-article-content">
                  <h3>{ blog.title }</h3>
                </div>
              </Link>
            </article>
          ))}
      </div>
    );
}

export default BlogList;