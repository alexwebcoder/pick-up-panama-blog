import { Link } from "react-router-dom";

const handleArticleChange = () => {
  document.querySelector('.disabled')?.classList.remove('disabled');
  document.querySelector('.sidenav .disabled')?.classList.remove('disabled');
  document.querySelector('.footer .disabled')?.classList.remove('disabled');
}

const BlogList = ({ blogs, title }) => {
  if(window.screen.width >= 321) {
    return(
      <div className="card-container">
        {blogs.map((blog) => (
          <article key={blog.id}>
              <Link to={`/blogs/${blog.id}`} onClick={handleArticleChange}>
              <figure className="card-img">
              <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      blog.Thum492w
                    }
                
                    sizes="(max-width: 320px) 320px, 492px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      blog.Thum492j
                    }
                    sizes="(max-width: 320px) 320px, 492px"
                  />
                        <img className="no-right-click" src={blog.Thum492j} alt={blog.alt}/>
                </picture>
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
  if(window.screen.width <= 320) {
    <div className="card-container">
        {blogs.map((blog) => (
          <article key={blog.id}>
              <Link to={`/blogs/${blog.id}`} onClick={handleArticleChange}>
              <figure className="card-img">
              <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      blog.Thum320w
                    }
                
                    sizes="(max-width: 320px) 320px, 492px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      blog.Thum320j
                    }
                    sizes="(max-width: 320px) 320px, 492px"
                  />
                        <img className="no-right-click" src={blog.Thum320j} alt={blog.alt}/>
                </picture>
              </figure>
                <div className="blog-article-content">
                  <h3>{ blog.title }</h3>
                </div>
              </Link>
            </article>
          ))}
      </div>
  }
  }

export default BlogList;