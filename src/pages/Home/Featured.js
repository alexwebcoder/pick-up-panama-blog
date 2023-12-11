import { Link } from "react-router-dom";

const handleFeatureChange = () => {
  document.querySelector('.disabled')?.classList.remove('disabled');
}

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
            <Link to={`/featured/how-do-i-visit-the-panama-canal`} className="feature-anchor" onClick={handleFeatureChange}>
                <div className="feature-wrapper">
                <div className="feature-photo-container">
                    <figure>
                        <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/home/th-panama-canal-ship.webp'} alt="the Panama Canal in 2018"/>
                    </figure>
                </div>
                    <article className="blog-article-content">
                        <h3 className="feature-headline">How do I visit the Panama Canal?</h3>
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
   )
}

export default Featured;