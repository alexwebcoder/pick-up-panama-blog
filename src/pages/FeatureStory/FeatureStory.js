import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import "../Home/BlogDetails.css";
import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";


const FeatureStory = () => {
  const { id } = useParams();
  const currentPageUrl = "http://www.sockgoodies.com";
  // const currentPageUrl = window.location.href;
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
    <main id="main-element" className={`blog-details margin `}>
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
          <div className="share-parent">
              <FacebookShareButton
                url={currentPageUrl}
                hashtag="#panama"
                aria-label="facebook"
              >
                <FacebookIcon size={35} />
              </FacebookShareButton>
              <TwitterShareButton
                url={currentPageUrl}
                hashtags={["pickuppanama","panama canal", "panama"]}
                title={"How do I visit the Panama Canal?"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"How do I visit the Panama Canal?"}
                summary={"Read this to understand the importance of the Panama Canal and the best ways to observe it."}
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"How do I visit the Panama Canal?"}
                body={"Read this to understand the importance of the Panama Canal and the best ways to observe it."}
                aria-label="email"
                separator={" "}
              >
                 <EmailIcon size={35} />
              </EmailShareButton>
            </div>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-ship-320.webp 320w, /images/canal/panama-canal-ship-480.webp 480w, /images/canal/panama-canal-ship-640.webp 640w, /images/canal/panama-canal-ship-768.webp 768w, /images/canal/panama-canal-ship.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-ship-320.jpg 320w, /images/canal/panama-canal-ship-480.jpg 480w, /images/canal/panama-canal-ship-640.jpg 640w, /images/canal/panama-canal-ship-768.jpg 768w, /images/canal/panama-canal-ship.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                fetchpriority="high"
                className="no-right-click"
                src={blog.ship}
                alt={blog.shipAltText}
              />
              </picture>
              <figcaption>{blog.shipCaption}</figcaption>
          </figure>
          <h2>{blog.whyImpH2}</h2>
          <p>{blog.thePanaCanWasBuilt}</p>
          <p>{blog.thisMakes}</p>
          <p>{blog.resulted}</p>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-cargo-ship-320.webp 320w, /images/canal/panama-canal-cargo-ship-480.webp 480w, /images/canal/panama-canal-cargo-ship-640.webp 640w, /images/canal/panama-canal-cargo-ship-768.webp 768w, /images/canal/panama-canal-cargo-ship.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-cargo-ship-320.jpg 320w, /images/canal/panama-canal-cargo-ship-480.jpg 480w, /images/canal/panama-canal-cargo-ship-640.jpg 640w, /images/canal/panama-canal-cargo-ship-768.jpg 768w, /images/canal/panama-canal-cargo-ship.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.cargo}
                alt={blog.cargoAltText}
              />
              </picture>
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
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-tugboats-320.webp 320w, /images/canal/panama-canal-tugboats-480.webp 480w, /images/canal/panama-canal-tugboats-640.webp 640w, /images/canal/panama-canal-tugboats-768.webp 768w, /images/canal/panama-canal-tugboats.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-tugboats-320.jpg 320w, /images/canal/panama-canal-tugboats-480.jpg 480w, /images/canal/panama-canal-tugboats-640.jpg 640w, /images/canal/panama-canal-tugboats-768.jpg 768w, /images/canal/panama-canal-tugboats.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.tug}
                alt={blog.tugAltText}
              />
              </picture>
              <figcaption>{blog.tugCaption}</figcaption>
          </figure>
          <p>{blog.theTugboats}</p>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-mule-320.webp 320w, /images/canal/panama-canal-mule-480.webp 480w, /images/canal/panama-canal-mule-640.webp 640w, /images/canal/panama-canal-mule-768.webp 768w, /images/canal/panama-canal-mule.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-mule-320.jpg 320w, /images/canal/panama-canal-mule-480.jpg 480w, /images/canal/panama-canal-mule-640.jpg 640w, /images/canal/panama-canal-mule-768.jpg 768w, /images/canal/panama-canal-mule.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.mule}
                alt={blog.muleAltText}
              />
              </picture>
              <figcaption>{blog.muleCaption}</figcaption>
          </figure>
          <p>{blog.afterTheShip}</p>
          <p>{blog.onceInside}</p>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-workers-320.webp 320w, /images/canal/panama-canal-workers-480.webp 480w, /images/canal/panama-canal-workers-640.webp 640w, /images/canal/panama-canal-workers-768.webp 768w, /images/canal/panama-canal-workers.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-workers-320.jpg 320w, /images/canal/panama-canal-workers-480.jpg 480w, /images/canal/panama-canal-workers-640.jpg 640w, /images/canal/panama-canal-workers-768.jpg 768w, /images/canal/panama-canal-workers.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.operators}
                alt={blog.operatorsAltText}
              />
              </picture>
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
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-locks-320.webp 320w, /images/canal/panama-canal-locks-480.webp 480w, /images/canal/panama-canal-locks-640.webp 640w, /images/canal/panama-canal-locks-768.webp 768w, /images/canal/panama-canal-locks.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-locks-320.jpg 320w, /images/canal/panama-canal-locks-480.jpg 480w, /images/canal/panama-canal-locks-640.jpg 640w, /images/canal/panama-canal-locks-768.jpg 768w, /images/canal/panama-canal-locks.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.locks}
                alt={blog.locksAltText}
              />
              </picture>
              <figcaption>{blog.locksCaption}</figcaption>
          </figure>
          <p>{blog.theGatunLocks}</p>
          <p>{blog.pedroMiguel}</p>
          <h2>{blog.miraFloresH2}</h2>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/miraflores-visitor-center-320.webp 320w, /images/canal/miraflores-visitor-center-480.webp 480w, /images/canal/miraflores-visitor-center-640.webp 640w, /images/canal/miraflores-visitor-center-768.webp 768w, /images/canal/miraflores-visitor-center.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/miraflores-visitor-center-320.jpg 320w, /images/canal/miraflores-visitor-center-480.jpg 480w, /images/canal/miraflores-visitor-center-640.jpg 640w, /images/canal/miraflores-visitor-center-768.jpg 768w, /images/canal/miraflores-visitor-center.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.miraflores}
                alt={blog.mirafloresAltText}
              />
              </picture>
              <figcaption>{blog.mirafloresCaption}</figcaption>
          </figure>
          <p>{blog.theBestWay}</p>
          <figure className="map">
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-map-320.webp 320w, /images/canal/panama-canal-map-480.webp 480w, /images/canal/panama-canal-map-640.webp 640w, /images/canal/panama-canal-map-768.webp 768w, /images/canal/panama-canal-map.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-map-320.jpg 320w, /images/canal/panama-canal-map-480.jpg 480w, /images/canal/panama-canal-map-640.jpg 640w, /images/canal/panama-canal-map-768.jpg 768w, /images/canal/panama-canal-map.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.map}
                alt={blog.mapAltText}
              />
              </picture>
              <figcaption>{blog.mapCaption}</figcaption>
          </figure>
          <p>{blog.directBus}</p>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/miraflores-locks-320.webp 320w, /images/canal/miraflores-locks-480.webp 480w, /images/canal/miraflores-locks-640.webp 640w, /images/canal/miraflores-locks-768.webp 768w, /images/canal/miraflores-locks.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/miraflores-locks-320.jpg 320w, /images/canal/miraflores-locks-480.jpg 480w, /images/canal/miraflores-locks-640.jpg 640w, /images/canal/miraflores-locks-768.jpg 768w, /images/canal/miraflores-locks.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.mirafloresLocks}
                alt={blog.mirafloresLocksAltText}
              />
              </picture>
              <figcaption>{blog.mirafloresLocksCaption}</figcaption>
          </figure>
          <p>{blog.hours}</p>
          <p>{blog.itFeatures}</p>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/miraflores-locks-observation-deck-320.webp 320w, /images/canal/miraflores-locks-observation-deck-480.webp 480w, /images/canal/miraflores-locks-observation-deck-640.webp 640w, /images/canal/miraflores-locks-observation-deck-768.webp 768w, /images/canal/miraflores-locks-observation-deck.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/miraflores-locks-observation-deck-320.jpg 320w, /images/canal/miraflores-locks-observation-deck-480.jpg 480w, /images/canal/miraflores-locks-observation-deck-640.jpg 640w, /images/canal/miraflores-locks-observation-deck-768.jpg 768w, /images/canal/miraflores-locks-observation-deck.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.viewDeck}
                alt={blog.viewDeckAltText}
              />
              </picture>
              <figcaption>{blog.viewDeckCaption}</figcaption>
          </figure>
          <p>{blog.mostBusy}</p>
          <p>{blog.forBestExp}</p>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-observation-deck-320.webp 320w, /images/canal/panama-canal-observation-deck-480.webp 480w, /images/canal/panama-canal-observation-deck-640.webp 640w, /images/canal/panama-canal-observation-deck-768.webp 768w, /images/canal/panama-canal-observation-deck.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-observation-deck-320.jpg 320w, /images/canal/panama-canal-observation-deck-480.jpg 480w, /images/canal/panama-canal-observation-deck-640.jpg 640w, /images/canal/panama-canal-observation-deck-768.jpg 768w, /images/canal/panama-canal-observation-deck.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.deck}
                alt={blog.deckAltText}
              />
              </picture>
              <figcaption>{blog.deckCaption}</figcaption>
          </figure>
          <h2>{blog.museumH2}</h2>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/how-panama-canal-works-320.webp 320w, /images/canal/how-panama-canal-works-480.webp 480w, /images/canal/how-panama-canal-works-640.webp 640w, /images/canal/how-panama-canal-works-768.webp 768w, /images/canal/how-panama-canal-works.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/how-panama-canal-works-320.jpg 320w, /images/canal/how-panama-canal-works-480.jpg 480w, /images/canal/how-panama-canal-works-640.jpg 640w, /images/canal/how-panama-canal-works-768.jpg 768w, /images/canal/how-panama-canal-works.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.howWorks}
                alt={blog.howWorksAltText}
              />
              </picture>
              <figcaption>{blog.howWorksCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/dartagnan-model-ship-320.webp 320w, /images/canal/dartagnan-model-ship-480.webp 480w, /images/canal/dartagnan-model-ship-640.webp 640w, /images/canal/dartagnan-model-ship-768.webp 768w, /images/canal/dartagnan-model-ship.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/dartagnan-model-ship-320.jpg 320w, /images/canal/dartagnan-model-ship-480.jpg 480w, /images/canal/dartagnan-model-ship-640.jpg 640w, /images/canal/dartagnan-model-ship-768.jpg 768w, /images/canal/dartagnan-model-ship.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.dart}
                alt={blog.dartAltText}
              />
              </picture>
              <figcaption>{blog.dartCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/cosco-model-ship-320.webp 320w, /images/canal/cosco-model-ship-480.webp 480w, /images/canal/cosco-model-ship-640.webp 640w, /images/canal/cosco-model-ship-768.webp 768w, /images/canal/cosco-model-ship.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/cosco-model-ship-320.jpg 320w, /images/canal/cosco-model-ship-480.jpg 480w, /images/canal/cosco-model-ship-640.jpg 640w, /images/canal/cosco-model-ship-768.jpg 768w, /images/canal/cosco-model-ship.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.cosco}
                alt={blog.coscoAltText}
              />
              </picture>
              <figcaption>{blog.coscoCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-tugboat-models-320.webp 320w, /images/canal/panama-canal-tugboat-models-480.webp 480w, /images/canal/panama-canal-tugboat-models-640.webp 640w, /images/canal/panama-canal-tugboat-models-768.webp 768w, /images/canal/panama-canal-tugboat-models.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-tugboat-models-320.jpg 320w, /images/canal/panama-canal-tugboat-models-480.jpg 480w, /images/canal/panama-canal-tugboat-models-640.jpg 640w, /images/canal/panama-canal-tugboat-models-768.jpg 768w, /images/canal/panama-canal-tugboat-models.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.tugModels}
                alt={blog.tugModelsAltText}
              />
              </picture>
              <figcaption>{blog.tugModelsCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-mule-model-320.webp 320w, /images/canal/panama-canal-mule-model-480.webp 480w, /images/canal/panama-canal-mule-model-640.webp 640w, /images/canal/panama-canal-mule-model-768.webp 768w, /images/canal/panama-canal-mule-model.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-mule-model-320.jpg 320w, /images/canal/panama-canal-mule-model-480.jpg 480w, /images/canal/panama-canal-mule-model-640.jpg 640w, /images/canal/panama-canal-mule-model-768.jpg 768w, /images/canal/panama-canal-mule-model.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.muleModel}
                alt={blog.muleModelAltText}
              />
              </picture>
              <figcaption>{blog.muleModelCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/museum-display-workers-320.webp 320w, /images/canal/museum-display-workers-480.webp 480w, /images/canal/museum-display-workers-640.webp 640w, /images/canal/museum-display-workers-768.webp 768w, /images/canal/museum-display-workers.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/museum-display-workers-320.jpg 320w, /images/canal/museum-display-workers-480.jpg 480w, /images/canal/museum-display-workers-640.jpg 640w, /images/canal/museum-display-workers-768.jpg 768w, /images/canal/museum-display-workers.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.museumDisplay}
                alt={blog.museumDisplayAltText}
              />
              </picture>
              <figcaption>{blog.museumDisplayCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-museum-display-320.webp 320w, /images/canal/panama-canal-museum-display-480.webp 480w, /images/canal/panama-canal-museum-display-640.webp 640w, /images/canal/panama-canal-museum-display-768.webp 768w, /images/canal/panama-canal-museum-display.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-museum-display-320.jpg 320w, /images/canal/panama-canal-museum-display-480.jpg 480w, /images/canal/panama-canal-museum-display-640.jpg 640w, /images/canal/panama-canal-museum-display-768.jpg 768w, /images/canal/panama-canal-museum-display.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.museumDisplayShip}
                alt={blog.museumDisplayShipAltText}
              />
              </picture>
              <figcaption>{blog.museumDisplayShipCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/a-panama-canal-engineer-statue-320.webp 320w, /images/canal/a-panama-canal-engineer-statue-480.webp 480w, /images/canal/a-panama-canal-engineer-statue-640.webp 640w, /images/canal/a-panama-canal-engineer-statue-768.webp 768w, /images/canal/a-panama-canal-engineer-statue.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/a-panama-canal-engineer-statue-320.jpg 320w, /images/canal/a-panama-canal-engineer-statue-480.jpg 480w, /images/canal/a-panama-canal-engineer-statue-640.jpg 640w, /images/canal/a-panama-canal-engineer-statue-768.jpg 768w, /images/canal/a-panama-canal-engineer-statue.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.engineerDisplay}
                alt={blog.engineerDisplayAltText}
              />
              </picture>
              <figcaption>{blog.engineerDisplayCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-engineer-statue-320.webp 320w, /images/canal/panama-canal-engineer-statue-480.webp 480w, /images/canal/panama-canal-engineer-statue-640.webp 640w, /images/canal/panama-canal-engineer-statue-768.webp 768w, /images/canal/panama-canal-engineer-statue.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/panama-canal-engineer-statue-320.jpg 320w, /images/canal/panama-canal-engineer-statue-480.jpg 480w, /images/canal/panama-canal-engineer-statue-640.jpg 640w, /images/canal/panama-canal-engineer-statue-768.jpg 768w, /images/canal/panama-canal-engineer-statue.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.engineerDisplay2}
                alt={blog.engineerDisplay2AltText}
              />
              </picture>
              <figcaption>{blog.engineerDisplay2Caption}</figcaption>
          </figure>
          <figure className="pov">
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/captains-pov-panama-canal-320.webp 320w, /images/canal/captains-pov-panama-canal-480.webp 480w, /images/canal/captains-pov-panama-canal-640.webp 640w, /images/canal/captains-pov-panama-canal-768.webp 768w, /images/canal/captains-pov-panama-canal.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/captains-pov-panama-canal-320.jpg 320w, /images/canal/captains-pov-panama-canal-480.jpg 480w, /images/canal/captains-pov-panama-canal-640.jpg 640w, /images/canal/captains-pov-panama-canal-768.jpg 768w, /images/canal/captains-pov-panama-canal.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.captainsPov}
                alt={blog.captainsPovAltText}
              />
              </picture>
              <figcaption>{blog.captainsPovCaption}</figcaption>
          </figure>
          <figure>
          <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/overhead-view-panama-canal-320.webp 320w, /images/canal/overhead-view-panama-canal-480.webp 480w, /images/canal/overhead-view-panama-canal-640.webp 640w, /images/canal/overhead-view-panama-canal-768.webp 768w, /images/canal/overhead-view-panama-canal.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/canal/overhead-view-panama-canal-320.jpg 320w, /images/canal/overhead-view-panama-canal-480.jpg 480w, /images/canal/overhead-view-panama-canal-640.jpg 640w, /images/canal/overhead-view-panama-canal-768.jpg 768w, /images/canal/overhead-view-panama-canal.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
              <img
                className="no-right-click"
                src={blog.overheadCanal}
                alt={blog.overheadCanalAltText}
              />
              </picture>
              <figcaption>{blog.overheadCanalCaption}</figcaption>
          </figure>
          <h2>{blog.miraFloresVideoH2}</h2>
          <div className="video-container">
              <ReactPlayer className='youtube-video' url='<https://youtu.be/jzZgcLZgRYk?si=q0319PSQtFJSor59?rel=0>' 
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="video-caption">{blog.mirafloresVideoCaption}</p>
          <h2>{blog.bridgeAmerH2}</h2>
          <div className="video-container">
              <ReactPlayer className='youtube-video' url='<https://youtu.be/K-uD7izeIX8?si=HbcvJkFcI04EUVuV?rel=0>' 
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="video-caption">{blog.bridgeAmericasCaption}</p>
          <h2>{blog.pedroMiguelH2}</h2>
          <div className="video-container">
              <ReactPlayer className='youtube-video' url='<https://youtu.be/SXVQt86F1A4?si=myIjvDci4Q89hv-f?rel=0>' 
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="video-caption">{blog.pedroMiguelVideoCaption}</p>
           <h2>{blog.storyH2}</h2>
            <div className="video-container">
              <ReactPlayer className='youtube-video' url='<https://youtu.be/aXP88CTcfyg?si=NA5geAIYCs_iJeLU?rel=0>' 
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="video-caption last-figure">{blog.storyVideoCaption}</p>
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
