// import PanamaCanalShip from '/images/panama-canal-ship.JPG'

const Featured = () => {
   return (
    <>
      <section className="featured-content-container">
            <div className="line-divider centered wide">
                <h2 className="diamond-text-box">
                <span className="left"></span>
                <span className="content caps centered">Featured Story</span>
                <span className="right"></span>
                </h2>
            </div>
            <a className="feature-anchor" href="">
                <div className="feature-wrapper">
                <div className="feature-photo-container">
                    <figure>
                        <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/panama-canal-ship.JPG'} alt="the Panama Canal in 2018"/>
                    </figure>
                </div>
                    <article className="blog-article-content">
                        <h3 className="feature-headline caps">How do I visit the Panama Canal?</h3>
                        <div className="learn-more centered"><span>Learn More</span></div>
                    </article>
                </div>  
            </a>
        </section>
        <div className="line-divider centered wide">
            <h2 className="diamond-text-box">
            <span className="left"></span>
            <span className="content caps centered">Articles</span>
            <span className="right"></span>
            </h2>
        </div>
    </>
   )
}

export default Featured;