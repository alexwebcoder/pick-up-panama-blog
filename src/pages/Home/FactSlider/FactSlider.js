import "./FactSlider.css"

const FactSlider = () => {
  
    return (
      <>
          <div className="line-divider centered wide">
                    <h2 className="diamond-text-box">
                    <span className="left"></span>
                    <span className="content caps centered">Facts about Panama</span>
                    <span className="right"></span>
                    </h2>
          </div>
          <div id="carousel">
          <div id="slide-container">
            <div className="slide" data-slideindex="0">
              <div className="slide-banner">Panama's official name is The Republic of Panama.</div>
            </div>
            <div className="slide" data-slideindex="1">
              <div className="slide-banner">The population of Panama is 3,800,644.</div>
            </div>
            <div className="slide" data-slideindex="2">
              <div className="slide-banner">The Capital is Panama City.</div>
            </div>
            <div className="slide" data-slideindex="3">
              <div className="slide-banner">See penguins!</div>
            </div>
            <div className="slide" data-slideindex="4">
              <div className="slide-banner">Panama has a rainy season and a dry season.</div>
            </div>
            <div className="slide" data-slideindex="5">
              <div className="slide-banner">The Panamanian golden frog is Panama's national animal.</div>
            </div>
            <div className="slide" data-slideindex="6">
              <div className="slide-banner">Panama's official language is Spanish.</div>
            </div>
          </div>
          <div id="back-button" className="arrow back">←</div>
          <div id="forward-button" className="arrow forward">→</div>
          <div className="slide-indicators">
            <div className="slide-indicator active"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
            <div className="slide-indicator"></div>
          </div>
        </div>
      </>

    )
}

export default FactSlider;