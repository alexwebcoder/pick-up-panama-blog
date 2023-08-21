import "./Slider.css"


const Slider = () => {
    return(
        <>
        <div className="line-divider centered wide">
                <h2 className="diamond-text-box">
                <span className="left"></span>
                <span className="content caps centered">Facts about Panama</span>
                <span className="right"></span>
                </h2>
        </div>
        <div className="slider-container">
            <div className="slider">
                <div className="slides">
                    <div id="slides-1" className="slide">
                        <span className="slide-text">Panama's official name is The Republic of Panama.</span>
                        <a className="slide-prev" href="#slides-4" title="Next"></a>
                        <a className="slide-next" href="#slides-2" title="Next"></a>
                    </div>
                    <div id="slides-2" className="slide">
                        <span className="slide-text">The population of Panama is 3,800,644.</span>
                        <a className="slide-prev" href="#slides-1" title="Prev"></a>
                        <a className="slide-next" href="#slides-3" title="Next"></a>
                    </div>
                    <div id="slides-3" className="slide">
                        <span className="slide-text">The Capital is Panama City.</span>
                        <a className="slide-prev" href="#slides-2" title="Prev"></a>
                        <a className="slide-next" href="#slides-4" title="Next"></a>
                    </div>
                    <div id="slides-4" className="slide">
                        <span className="slide-text">Panama has a rainy season and a dry season.</span>
                        <a className="slide-prev" href="#slides-3" title="Prev"></a>
                        <a className="slide-next" href="#slides-1" title="Prev"></a>
                    </div>
                </div>
                <div className="slider-nav">
                <a className="slider-navlink" href="#slides-1"></a>
                <a className="slider-navlink" href="#slides-2"></a>
                <a className="slider-navlink" href="#slides-3"></a>
                <a className="slider-navlink" href="#slides-4"></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Slider;