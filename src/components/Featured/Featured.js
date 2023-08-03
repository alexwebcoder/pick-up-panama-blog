const Featured = () => {
   return (
    <section className="featured-content-container">
    <div className="line-divider centered wide">
        <h2 className="diamond-text-box">
          <span className="left"></span>
          <span className="content caps centered">Featured Story</span>
          <span className="right"></span>
        </h2>
      </div>
      <a  className="feature-anchor" href="">
          <div className="feature-wrapper">
              <div className="feature-photo-container">
                  <figure>
                      <img src="https://static.euronews.com/articles/stories/07/56/14/16/1000x563_cmsv2_4377a059-ee3d-53d5-8e7e-6689b151f275-7561416.jpg" alt="the Panama Canal in 2018"/>
                  </figure>
              </div>
              <article className="blog-article-content">
                  <h3 className="feature-headline caps">How do I visit the Panama Canal?</h3>
              </article>
          </div>  
        </a>
</section>
   )

}

export default Featured;