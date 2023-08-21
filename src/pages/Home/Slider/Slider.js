import "./Slider.css"


const Slider = () => {
    return(
        <>
        <div className="line-divider centered wide">
                <h2 className="diamond-text-box">
                <span className="left"></span>
                <span className="content caps centered">Facts</span>
                <span className="right"></span>
                </h2>
        </div>
        <div className="slider-container">
            <div className="slider">
                <div className="slides">
                <div id="slides__1" className="slide">
                    <span className="slide__text">Panama's official name is The Republic of Panama.</span>
                    <a className="slide__prev" href="#slides__4" title="Next"></a>
                    <a className="slide__next" href="#slides__2" title="Next"></a>
                </div>
                <div id="slides__2" className="slide">
                    <span className="slide__text">The population of Panama is 3,800,644.</span>
                    <a className="slide__prev" href="#slides__1" title="Prev"></a>
                    <a className="slide__next" href="#slides__3" title="Next"></a>
                </div>
                <div id="slides__3" className="slide">
                    <span className="slide__text">The Capital is Panama City.</span>
                    <a className="slide__prev" href="#slides__2" title="Prev"></a>
                    <a className="slide__next" href="#slides__4" title="Next"></a>
                </div>
                <div id="slides__4" className="slide">
                    <span className="slide__text">Panama has a rainy season and a dry season.</span>
                    <a className="slide__prev" href="#slides__3" title="Prev"></a>
                    <a className="slide__next" href="#slides__1" title="Prev"></a>
                </div>
                </div>
                <div className="slider__nav">
                <a className="slider__navlink" href="#slides__1"></a>
                <a className="slider__navlink" href="#slides__2"></a>
                <a className="slider__navlink" href="#slides__3"></a>
                <a className="slider__navlink" href="#slides__4"></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Slider;