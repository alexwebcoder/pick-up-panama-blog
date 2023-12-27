import { Link } from "react-router-dom";

const handleFeatureChange = () => {
  document.querySelector(".disabled")?.classList.remove("disabled");
};

const Featured = () => {
  return (
    <>
      <section className="featured-content-container">
        <div className="line-divider feature centered wide">
          <h2 className="diamond-text-box">
            <span className="left"></span>
            <span className="content caps centered">Featured Story</span>
            <span className="right"></span>
          </h2>
        </div>
        <Link
          to={`/featured/how-do-i-visit-the-panama-canal`}
          className="feature-anchor"
          onClick={handleFeatureChange}
        >
          <div className="feature-wrapper">
            <div className="feature-photo-container">
              <figure>
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/home/th-panama-canal-ship-320.webp 320w, /images/home/th-panama-canal-ship-480.webp 480w, /images/home/th-panama-canal-ship-640.webp 640w, /images/home/th-panama-canal-ship-768.webp 768w,  /images/home/th-panama-canal-ship-1024.webp 1024w,  /images/home/th-panama-canal-ship-1280.webp 1280w, /images/home/th-panama-canal-ship.webp 1526w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1526px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/home/th-panama-canal-ship-320.jpg 320w, /images/home/th-panama-canal-ship-480.jpg 480w, /images/home/th-panama-canal-ship-640.jpg 640w, /images/home/th-panama-canal-ship-768.jpg 768w,  /images/home/th-panama-canal-ship-1024.jpg 1024w,  /images/home/th-panama-canal-ship-1280.jpg 1280w, /images/home/th-panama-canal-ship.jpg 1526w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1526px"
                  />
                  <img
                    className="no-right-click"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/home/th-panama-canal-ship.jpg"
                    }
                    alt="the Panama Canal in 2018"
                  />
                </picture>
              </figure>
            </div>
            <article className="blog-article-content">
              <h3 className="feature-headline">
                How do I visit the Panama Canal?
              </h3>
            </article>
          </div>
        </Link>
      </section>
      <div className="line-divider centered wide">
        <h2 className="diamond-text-box">
          <span className="left"></span>
          <span className="content caps centered">Articles</span>
          <span className="right"></span>
        </h2>
      </div>
    </>
  );
};

export default Featured;
