import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import "../Home/BlogDetails.css";
import ReactPlayer from "react-player";


const FeatureStory = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/featured/" + id);

  TabTitle("How Do I Visit the Panama Canal?");
  Capitalize();

  const featureNavigate = useNavigate();
  const goToElCangrejoStory = () => {
    featureNavigate("/blogs/things-to-do-in-el-cangrejo");
  };
  const goToSafetyStoryA = () => {
    featureNavigate("/blogs/is-panama-safe");
  };

  return (
    <main className={`blog-details margin `}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <section className={blog.className}>
          <div className="line-divider centered wide">
            <p className="diamond-text-box date">
              <span className="left"></span>
              <span className="content caps centered">{blog.date}</span>
              <span className="right"></span>
            </p>
          </div>
          <h1 className="centered post-title">{blog.title}</h1>
          <p className="body intro">{blog.intro}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.ship}
                alt={blog.shipAltText}
              />
              <figcaption>{blog.shipCaption}</figcaption>
          </figure>
          <h2>{blog.whyImpH2}</h2>
          <p>{blog.thePanaCanWasBuilt}</p>
          <p>{blog.thisMakes}</p>
          <p>{blog.resulted}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.cargo}
                alt={blog.cargoAltText}
              />
              <figcaption>{blog.cargoCaption}</figcaption>
          </figure>
          <h2>{blog.howWorkH2}</h2>
          <p>{blog.throughLocks}</p>
          <p>{blog.waterLevel}</p>
          <p>{blog.beforeShip}</p>
          <p>{blog.locksRaise}</p>
          <p>{blog.locksAreChambers}</p>
          <p>{blog.theGatunLake}</p>
          <p>{blog.waterFlows}</p>
          <p>{blog.whenAShip}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.tug}
                alt={blog.tugAltText}
              />
              <figcaption>{blog.tugCaption}</figcaption>
          </figure>
          <p>{blog.theTugboats}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.mule}
                alt={blog.muleAltText}
              />
              <figcaption>{blog.muleCaption}</figcaption>
          </figure>
          <p>{blog.afterTheShip}</p>
          <p>{blog.onceInside}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.operators}
                alt={blog.operatorsAltText}
              />
              <figcaption>{blog.operatorsCaption}</figcaption>
          </figure>
          <p>{blog.itTakesAround}</p>
          <p>{blog.shipIsThen}</p>
          <p>{blog.culebraCut}</p>
          <p>{blog.shipGoesThrough}</p>
          <h2>{blog.droughH2}</h2>
          <p>{blog.lakeRelies}</p>
          <p>{blog.hasCaused}</p>
          <p>{blog.canalAuthor}</p>
          <h2>{blog.WhereSeeH2}</h2>
          <p>{blog.thereAreThree}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.locks}
                alt={blog.locksAltText}
              />
              <figcaption>{blog.locksCaption}</figcaption>
          </figure>
          <p>{blog.theGatunLocks}</p>
          <p>{blog.pedroMiguel}</p>
          <div className="video-container">
              <ReactPlayer className='youtube-video' url='<https://youtu.be/SXVQt86F1A4?si=myIjvDci4Q89hv-f?rel=0>' 
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="video-caption">{blog.pedroMiguelVideoCaption}</p>
          <h2>{blog.miraFloresH2}</h2>
          <figure>
              <img
                className="no-right-click"
                src={blog.miraflores}
                alt={blog.mirafloresAltText}
              />
              <figcaption>{blog.mirafloresCaption}</figcaption>
          </figure>
          <p>{blog.theBestWay}</p>
          <figure className="map">
              <img
                className="no-right-click"
                src={blog.map}
                alt={blog.mapAltText}
              />
              <figcaption>{blog.mapCaption}</figcaption>
          </figure>
          <p>{blog.directBus}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.mirafloresLocks}
                alt={blog.mirafloresLocksAltText}
              />
              <figcaption>{blog.mirafloresLocksCaption}</figcaption>
          </figure>
          <p>{blog.hours}</p>
          <p>{blog.itFeatures}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.viewDeck}
                alt={blog.viewDeckAltText}
              />
              <figcaption>{blog.viewDeckCaption}</figcaption>
          </figure>
          <p>{blog.mostBusy}</p>
          <p>{blog.forBestExp}</p>
          <figure>
              <img
                className="no-right-click"
                src={blog.deck}
                alt={blog.deckAltText}
              />
              <figcaption>{blog.deckCaption}</figcaption>
          </figure>
          <h2>{blog.museumH2}</h2>
          <figure>
              <img
                className="no-right-click"
                src={blog.howWorks}
                alt={blog.howWorksAltText}
              />
              <figcaption>{blog.howWorksCaption}</figcaption>
          </figure>
          <figure>
              <img
                className="no-right-click"
                src={blog.dart}
                alt={blog.dartAltText}
              />
              <figcaption>{blog.dartCaption}</figcaption>
          </figure>
          <figure>
              <img
                className="no-right-click"
                src={blog.cosco}
                alt={blog.coscoAltText}
              />
              <figcaption>{blog.coscoCaption}</figcaption>
          </figure>
          <figure>
              <img
                className="no-right-click"
                src={blog.tugModels}
                alt={blog.tugModelsAltText}
              />
              <figcaption>{blog.tugModelsCaption}</figcaption>
          </figure>
          <figure>
              <img
                className="no-right-click"
                src={blog.muleModel}
                alt={blog.muleModelAltText}
              />
              <figcaption>{blog.muleModelCaption}</figcaption>
          </figure>
          <figure>
              <img
                className="no-right-click"
                src={blog.museumDisplay}
                alt={blog.museumDisplayAltText}
              />
              <figcaption>{blog.museumDisplayCaption}</figcaption>
          </figure>
          <figure>
              <img
                className="no-right-click"
                src={blog.engineerDisplay}
                alt={blog.engineerDisplayAltText}
              />
              <figcaption>{blog.engineerDisplayCaption}</figcaption>
          </figure>

          <figure>
              <img
                className="no-right-click"
                src={blog.engineerDisplay2}
                alt={blog.engineerDisplay2AltText}
              />
              <figcaption>{blog.engineerDisplay2Caption}</figcaption>
          </figure>
          <figure className="pov">
              <img
                className="no-right-click"
                src={blog.captainsPov}
                alt={blog.captainsPovAltText}
              />
              <figcaption>{blog.captainsPovCaption}</figcaption>
          </figure>





          <div className="button-parent">
            <button title="Things to do in El Cangrejo" onClick={goToElCangrejoStory}>&#60;</button>
            <button title="Is Panama safe?" onClick={goToSafetyStoryA}>&#62;</button>
          </div>
        </section>
      )}
    </main>
  );
};

export default FeatureStory;
