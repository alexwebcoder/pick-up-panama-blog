import { useNavigate } from "react-router-dom";
import "../Home/BlogDetails";
import { Link } from "react-router-dom";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
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
import blogData from "../../data/blogData";

const Transportation = (blogData) => {
  TabTitle("About Pick Up Panama");
  Capitalize();

  //transportation page forward back
  const navigateA = useNavigate();
  const goToSafetyStory = () => {
    navigateA("/blogs/is-panama-safe");
  };
  const goToElCangrejoStory = () => {
    navigateA("/blogs/things-to-do-in-el-cangrejo");
  };
  const currentPageUrl = window.location.href;

  return (
    <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}<span>{ window.location.href = 'https://www.pickuppanama.com/*'}</span></div>}
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
                hashtags={["pickuppanama","transportation", "panama"]}
                title={"How do I get around in Panama?"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"How do I get around in Panama?"}
                summary={"Learn about Panama's metro train, buses, and taxi system to efficiently get around without overpaying for cabs."}
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"How do I get around in Panama?"}
                body={"Learn about Panama's metro train, buses, and taxi system to efficiently get around without overpaying for cabs."}
                aria-label="email"
                separator={" "}
              >
                 <EmailIcon size={35} />
              </EmailShareButton>
            </div>
            <figure className="hwy">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-panamerican-highway-320.webp 320w, /images/transportation/panama-panamerican-highway-480.webp 480w, /images/transportation/panama-panamerican-highway-640.webp 640w, /images/transportation/panama-panamerican-highway-768.webp 768w, /images/transportation/panama-panamerican-highway.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-panamerican-highway-320.jpg 320w, /images/transportation/panama-panamerican-highway-480.jpg 480w, /images/transportation/panama-panamerican-highway-640.jpg 640w, /images/transportation/panama-panamerican-highway-768.jpg 768w, /images/transportation/panama-panamerican-highway.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  fetchpriority="high"
                  className="no-right-click"
                  src={blog.panAm}
                  alt={blog.panAmAltText}
                />
              </picture>
              <figcaption>{blog.panAmCaption}</figcaption>
            </figure>
            <p>{blog.guide}</p>
            <h2>{blog.h2Tocumen}</h2>
            <p>{blog.iveUsed}</p>
            <h3>{blog.h3Taxi}</h3>
            <p>{blog.asSoon}</p>
            <p>{blog.theyCharge}</p>
            <h3>{blog.h3Uber}</h3>
            <p>{blog.uberWorks}</p>
            <p>{blog.cheapetPaid}</p>
            <p>{blog.buyingData}</p>
            <h3>{blog.h3Wifi}</h3>
            <p>{blog.wifiAccess}</p>
            <h3>{blog.h3TakeMetro}</h3>
            <p>{blog.metroLeast}</p>
            <p>{blog.hasOwn}</p>
            <p>{blog.canTake}</p>
            <h4>{blog.h4RapiCard}</h4>
            <p>{blog.cashCredit}</p>
            <figure className="rapi-card">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/rapi-pass-320.webp 320w, /images/transportation/rapi-pass-480.webp 480w, /images/transportation/rapi-pass-640.webp 640w, /images/transportation/rapi-pass-768.webp 768w, /images/transportation/rapi-pass.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/rapi-pass-320.jpg 320w, /images/transportation/rapi-pass-480.jpg 480w, /images/transportation/rapi-pass-640.jpg 640w, /images/transportation/rapi-pass-768.jpg 768w, /images/transportation/rapi-pass.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.rapiCard}
                  alt={blog.rapiCardAltText}
                />
              </picture>
              <figcaption>{blog.rapiCardCaption}</figcaption>
            </figure>
            <p>{blog.cardIsFor}</p>
            <ul>
              <li>{blog.liMetro}</li>
              <li>{blog.liTrains}</li>
              <li>{blog.liTerminal}</li>
            </ul>
            <p>{blog.itCosts}</p>
            <p>{blog.youCan}</p>
            <p>{blog.ifTraveling}</p>
            <h4>{blog.h4Shuttle}</h4>
            <figure className="free-shuttle">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/tocumen-airport-free-shuttle-320.webp 320w, /images/transportation/tocumen-airport-free-shuttle-480.webp 480w, /images/transportation/tocumen-airport-free-shuttle-640.webp 640w, /images/transportation/tocumen-airport-free-shuttle-768.webp 768w, /images/transportation/tocumen-airport-free-shuttle.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/tocumen-airport-free-shuttle-320.jpg 320w, /images/transportation/tocumen-airport-free-shuttle-480.jpg 480w, /images/transportation/tocumen-airport-free-shuttle-640.jpg 640w, /images/transportation/tocumen-airport-free-shuttle-768.jpg 768w, /images/transportation/tocumen-airport-free-shuttle.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.freeShuttle}
                  alt={blog.freeShuttleAltText}
                />
              </picture>
              <figcaption>{blog.freeShuttleCaption}</figcaption>
            </figure>
            <p>{blog.trainDoesNot}</p>
            <p>{blog.exitAirport}</p>
            <p>{blog.theseBuses}</p>
            <p>{blog.theFree}</p>
            <p>{blog.elevated}</p>
            <p>{blog.itsPart}</p>
            <h4>{blog.h4Aeropuerto}</h4>
            <ul>
              <li>{blog.line2Li}</li>
              <li>{blog.fiveMinLi}</li>
            </ul>
            <figure className="metro-map">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/metro-map-aeropuerto-station-320.webp 320w, /images/transportation/metro-map-aeropuerto-station-480.webp 480w, /images/transportation/metro-map-aeropuerto-station-640.webp 640w, /images/transportation/metro-map-aeropuerto-station-768.webp 768w, /images/transportation/metro-map-aeropuerto-station.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/metro-map-aeropuerto-station-320.jpg 320w, /images/transportation/metro-map-aeropuerto-station-480.jpg 480w, /images/transportation/metro-map-aeropuerto-station-640.jpg 640w, /images/transportation/metro-map-aeropuerto-station-768.jpg 768w, /images/transportation/metro-map-aeropuerto-station.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.metroMap}
                  alt={blog.metroMapAltText}
                />
              </picture>
              <figcaption>
                {blog.metroMapCaption}
                <br />
                <span>{blog.courtesyLobueno}</span>
              </figcaption>
            </figure>
            <h4>{blog.h4CorridorSur}</h4>
            <ul>
              <li>{blog.sanMigLi}</li>
              <li>{blog.samePlatform}</li>
              <li>{blog.line2Costs}</li>
              <li>{blog.shouldTake}</li>
            </ul>
            <h4>{blog.h4SanMig}</h4>
            <ul>
              <li>{blog.whenYouGetOff}</li>
              <li>{blog.theSigns}</li>
              <li>{blog.takeLine1}</li>
              <li>{blog.line1Li}</li>
              <li>{blog.thisShouldLi}</li>
            </ul>
            <p>{blog.trainsModern}</p>
            <p>{blog.thePlatforms}</p>
            <p>{blog.carryingLuggage}</p>
            <div className="video-container">
              <ReactPlayer
                className="youtube-video"
                url="<https://youtube.com/shorts/buKyVdS-8cE?si=cmwDySeycx-e_lLr?rel=0>"
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="metro-caption">{blog.metroVideoCaption}</p>
            <h4>{blog.metroHoursh4}</h4>
            <p className="bold-text">
              {blog.metroStrong} <span>{blog.fiveAm}</span>
            </p>
            <p className="bold-text">
              {blog.saturdayStrong} <span>{blog.fivetoTen}</span>
            </p>
            <p className="bold-text">
              {blog.sundayStrong} <span>{blog.sevenAm}</span>
            </p>
            <h2>{blog.h2Addresses}</h2>
            <p>{blog.noProperAddresses}</p>
            <p>{blog.goByLandmarks}</p>
            <p>{blog.whenAsking}</p>
            <p>{blog.itsCommon}</p>
            <p>{blog.alwaysGreet}</p>
            <h2>{blog.h2TransportationAround}</h2>
            <p>{blog.mainNeighborhoods}</p>
            <p>
              <strong>{blog.thisIsKnown}</strong>
            </p>
            <figure className="city-center">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-city-center-320.webp 320w, /images/transportation/panama-city-center-480.webp 480w, /images/transportation/panama-city-center-640.webp 640w, /images/transportation/panama-city-center-768.webp 768w, /images/transportation/panama-city-center.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-city-center-320.jpg 320w, /images/transportation/panama-city-center-480.jpg 480w, /images/transportation/panama-city-center-640.jpg 640w, /images/transportation/panama-city-center-768.jpg 768w, /images/transportation/panama-city-center.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.cityCenter}
                  alt={blog.cityCenterAltText}
                />
              </picture>
              <figcaption>
                {blog.cityCenterCaption}
                <br />
                <span>{blog.courtesyGoogle}</span>
              </figcaption>
            </figure>
            <h3>{blog.h3YellowCab}</h3>
            <figure className="yellow-cabs">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/cabs-panama-city-320.webp 320w, /images/transportation/cabs-panama-city-480.webp 480w, /images/transportation/cabs-panama-city-640.webp 640w, /images/transportation/cabs-panama-city-768.webp 768w, /images/transportation/cabs-panama-city.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/cabs-panama-city-320.jpg 320w, /images/transportation/cabs-panama-city-480.jpg 480w, /images/transportation/cabs-panama-city-640.jpg 640w, /images/transportation/cabs-panama-city-768.jpg 768w, /images/transportation/cabs-panama-city.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.panamaCabs}
                  alt={blog.panamaCabsAltText}
                />
              </picture>
              <figcaption>{blog.panamaCabsCaption}</figcaption>
            </figure>
            <p>{blog.licensedYellow}</p>
            <p>{blog.sinceThey}</p>
            <p>{blog.itsBest}</p>
            <p>{blog.beforeBoarding}</p>
            <p>{blog.aCabRide}</p>
            <p>{blog.wheneveverITake}</p>
            <p>{blog.iFind}</p>
            <p>{blog.goingOut}</p>
            <p>{blog.cascoWillRun}</p>
            <p>{blog.makeSureto}</p>
            <p>{blog.tipping}</p>
            <p>{blog.avoidTheCabs}</p>
            <p>{blog.iTookAlot}</p>
            <p>{blog.onlyOnce}</p>
            <h3>{blog.uberH3}</h3>
            <p>{blog.uberHas}</p>
            <p>{blog.youDontHave}</p>
            <p>{blog.safer}</p>
            <p>{blog.uberCanBe}</p>
            <p>{blog.surgePrice}</p>
            <p>{blog.someDrivers}</p>
            <p>{blog.itsAGoodIdea}</p>
            <p>{blog.documentEverything}</p>
            <p>{blog.ifAny}</p>
            <h3>{blog.h3PanamaBuses}</h3>
            <h4>{blog.h4RidingMetro}</h4>
            <figure className="metro-bus">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-metro-bus-and-cab-320.webp 320w, /images/transportation/panama-metro-bus-and-cab-480.webp 480w, /images/transportation/panama-metro-bus-and-cab-640.webp 640w, /images/transportation/panama-metro-bus-and-cab-768.webp 768w, /images/transportation/panama-metro-bus-and-cab.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-metro-bus-and-cab-320.jpg 320w, /images/transportation/panama-metro-bus-and-cab-480.jpg 480w, /images/transportation/panama-metro-bus-and-cab-640.jpg 640w, /images/transportation/panama-metro-bus-and-cab-768.jpg 768w, /images/transportation/panama-metro-bus-and-cab.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.metroCab}
                  alt={blog.metroCabAltText}
                />
              </picture>
              <figcaption>{blog.metroCabCaption}</figcaption>
            </figure>
            <p>{blog.theMetroIs}</p>
            <p>{blog.theCostIs}</p>
            <p>{blog.thereAre}</p>
            <p>{blog.whenYouGetOn}</p>
            <p>{blog.whenReady}</p>
            <h4>{blog.h4busRidesOut}</h4>
            <figure className="albrook-terminal">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/albrook-terminal-320.webp 320w, /images/transportation/albrook-terminal-480.webp 480w, /images/transportation/albrook-terminal-640.webp 640w, /images/transportation/albrook-terminal-768.webp 768w, /images/transportation/albrook-terminal.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/albrook-terminal-320.jpg 320w, /images/transportation/albrook-terminal-480.jpg 480w, /images/transportation/albrook-terminal-640.jpg 640w, /images/transportation/albrook-terminal-768.jpg 768w, /images/transportation/albrook-terminal.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.albrookEntr}
                  alt={blog.albrookEntrAltText}
                />
              </picture>
              <figcaption>{blog.albrookEntrBusCaption}</figcaption>
            </figure>
            <p>{blog.granTerminal}</p>
            <p>{blog.youCanTake}</p>
            <h2>{blog.h2CoronadoBus}</h2>
            <p>{blog.coronadoIs}</p>
            <p>{blog.thereAreBusesTo}</p>
            <p>{blog.youHaveTo}</p>
            <p>{blog.ticketWindows}</p>
            <p>{blog.theTicketPrice}</p>
            <p>{blog.afterPurchasing}</p>
            <p>{blog.youWillSee}</p>
            <p>{blog.twoBusesChoose}</p>
            <figure className="comfy-bus">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-comfy-bus-320.webp 320w, /images/transportation/panama-comfy-bus-480.webp 480w, /images/transportation/panama-comfy-bus-640.webp 640w, /images/transportation/panama-comfy-bus-768.webp 768w, /images/transportation/panama-comfy-bus.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-comfy-bus-320.jpg 320w, /images/transportation/panama-comfy-bus-480.jpg 480w, /images/transportation/panama-comfy-bus-640.jpg 640w, /images/transportation/panama-comfy-bus-768.jpg 768w, /images/transportation/panama-comfy-bus.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.comfyBus}
                  alt={blog.comfyBusAltText}
                />
              </picture>
              <figcaption>{blog.comfyBusCaption}</figcaption>
            </figure>
            <figure className="coaster-bus">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-coaster-bus-320.webp 320w, /images/transportation/panama-coaster-bus-480.webp 480w, /images/transportation/panama-coaster-bus-640.webp 640w, /images/transportation/panama-coaster-bus-768.webp 768w, /images/transportation/panama-coaster-bus.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-coaster-bus-320.jpg 320w, /images/transportation/panama-coaster-bus-480.jpg 480w, /images/transportation/panama-coaster-bus-640.jpg 640w, /images/transportation/panama-coaster-bus-768.jpg 768w, /images/transportation/panama-coaster-bus.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.coasterBus}
                  alt={blog.coasterBusAltText}
                />
              </picture>
              <figcaption>{blog.coasterBusCaption}</figcaption>
            </figure>
            <p>{blog.takeLarger}</p>
            <p>{blog.whenYouGetOnThe}</p>
            <p>{blog.coronadoIsAbout}</p>
            <figure className="coronado-stop">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-panama-entrance-320.webp 320w, /images/transportation/coronado-panama-entrance-480.webp 480w, /images/transportation/coronado-panama-entrance-640.webp 640w, /images/transportation/coronado-panama-entrance-768.webp 768w, /images/transportation/coronado-panama-entrance.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-panama-entrance-320.jpg 320w, /images/transportation/coronado-panama-entrance-480.jpg 480w, /images/transportation/coronado-panama-entrance-640.jpg 640w, /images/transportation/coronado-panama-entrance-768.jpg 768w, /images/transportation/coronado-panama-entrance.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.coronadoEntrance}
                  alt={blog.coronadoEntranceAltText}
                />
              </picture>
              <figcaption>{blog.coronadoEntranceCaption}</figcaption>
            </figure>
            <p>{blog.pedestrianBridge}</p>
            <figure className="coronado-map">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/map-of-coronado-320.webp 320w, /images/transportation/map-of-coronado-480.webp 480w, /images/transportation/map-of-coronado-640.webp 640w, /images/transportation/map-of-coronado-768.webp 768w, /images/transportation/map-of-coronado.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/map-of-coronado-320.jpg 320w, /images/transportation/map-of-coronado-480.jpg 480w, /images/transportation/map-of-coronado-640.jpg 640w, /images/transportation/map-of-coronado-768.jpg 768w, /images/transportation/map-of-coronado.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.coronadoMap}
                  alt={blog.coronadoMapAltText}
                />
              </picture>
              <figcaption>
                {blog.coronadoMapCaption}
                <br />
                <span>{blog.courtesyGoogle}</span>
              </figcaption>
            </figure>
            <p>{blog.youCanTakeCab}</p>
            <figure className="taxi-truck">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-taxi-pickup-truck-320.webp 320w, /images/transportation/panama-taxi-pickup-truck-480.webp 480w, /images/transportation/panama-taxi-pickup-truck-640.webp 640w, /images/transportation/panama-taxi-pickup-truck-768.webp 768w, /images/transportation/panama-taxi-pickup-truck.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-taxi-pickup-truck-320.jpg 320w, /images/transportation/panama-taxi-pickup-truck-480.jpg 480w, /images/transportation/panama-taxi-pickup-truck-640.jpg 640w, /images/transportation/panama-taxi-pickup-truck-768.jpg 768w, /images/transportation/panama-taxi-pickup-truck.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.taxiPickUp}
                  alt={blog.taxiPickUpAltText}
                />
              </picture>
              <figcaption>{blog.taxiPickUpCaption}</figcaption>
            </figure>
            <p>{blog.smallWhite}</p>
            <figure className="mini-van">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-shuttle-bus-320.webp 320w, /images/transportation/coronado-shuttle-bus-480.webp 480w, /images/transportation/coronado-shuttle-bus-640.webp 640w, /images/transportation/coronado-shuttle-bus-768.webp 768w, /images/transportation/coronado-shuttle-bus.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-shuttle-bus-320.jpg 320w, /images/transportation/coronado-shuttle-bus-480.jpg 480w, /images/transportation/coronado-shuttle-bus-640.jpg 640w, /images/transportation/coronado-shuttle-bus-768.jpg 768w, /images/transportation/coronado-shuttle-bus.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.coronadoShuttle}
                  alt={blog.coronadoShuttleAltText}
                />
              </picture>
              <figcaption>{blog.coronadoShuttleCaption}</figcaption>
            </figure>
            <p>{blog.packIn}</p>
            <figure className="inside-van">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-shuttle-bus-interior-320.webp 320w, /images/transportation/coronado-shuttle-bus-interior-480.webp 480w, /images/transportation/coronado-shuttle-bus-interior-640.webp 640w, /images/transportation/coronado-shuttle-bus-interior-768.webp 768w, /images/transportation/coronado-shuttle-bus-interior.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-shuttle-bus-interior-320.jpg 320w, /images/transportation/coronado-shuttle-bus-interior-480.jpg 480w, /images/transportation/coronado-shuttle-bus-interior-640.jpg 640w, /images/transportation/coronado-shuttle-bus-interior-768.jpg 768w, /images/transportation/coronado-shuttle-bus-interior.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.shuttleInterior}
                  alt={blog.shuttleInteriorAltText}
                />
              </picture>
              <figcaption>{blog.shuttleInteriorCaption}</figcaption>
            </figure>
            <p>{blog.gates}</p>
            <figure className="gates">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-panama-gates-320.webp 320w, /images/transportation/coronado-panama-gates-480.webp 480w, /images/transportation/coronado-panama-gates-640.webp 640w, /images/transportation/coronado-panama-gates-768.webp 768w, /images/transportation/coronado-panama-gates.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/coronado-panama-gates-320.jpg 320w, /images/transportation/coronado-panama-gates-480.jpg 480w, /images/transportation/coronado-panama-gates-640.jpg 640w, /images/transportation/coronado-panama-gates-768.jpg 768w, /images/transportation/coronado-panama-gates.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.coronadoGates}
                  alt={blog.coronadoGatesAltText}
                />
              </picture>
              <figcaption>{blog.coronadoGatesCaption}</figcaption>
            </figure>
            <h2>{blog.h2DiablosRojos}</h2>
            <p>{blog.theDiablosRojos}</p>
            <figure className="diablos">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panamanian-diablo-bus-320.webp 320w, /images/transportation/panamanian-diablo-bus-480.webp 480w, /images/transportation/panamanian-diablo-bus-640.webp 640w, /images/transportation/panamanian-diablo-bus-768.webp 768w, /images/transportation/panamanian-diablo-bus.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panamanian-diablo-bus-320.jpg 320w, /images/transportation/panamanian-diablo-bus-480.jpg 480w, /images/transportation/panamanian-diablo-bus-640.jpg 640w, /images/transportation/panamanian-diablo-bus-768.jpg 768w, /images/transportation/panamanian-diablo-bus.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.diablo}
                  alt={blog.diabloAltText}
                />
              </picture>
              <figcaption>{blog.diabloCaption}</figcaption>
            </figure>
            <p>{blog.theyAreIndepen}</p>
            <figure className="chicken-bus">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-chicken-bus-320.webp 320w, /images/transportation/panama-chicken-bus-480.webp 480w, /images/transportation/panama-chicken-bus-640.webp 640w, /images/transportation/panama-chicken-bus-768.webp 768w, /images/transportation/panama-chicken-bus.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-chicken-bus-320.jpg 320w, /images/transportation/panama-chicken-bus-480.jpg 480w, /images/transportation/panama-chicken-bus-640.jpg 640w, /images/transportation/panama-chicken-bus-768.jpg 768w, /images/transportation/panama-chicken-bus.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.panamaChickenBus}
                  alt={blog.panamaChickenBusAltText}
                />
              </picture>
              <figcaption>{blog.panamaChickenBusCaption}</figcaption>
            </figure>
            <p>{blog.panamaPhased}</p>
            <p>{blog.becauseTheyWere}</p>
            <p>{blog.youMayStill}</p>
            <h2>{blog.h2Chiva}</h2>
            <p>{blog.chivasAre}</p>
            <p>{blog.nowadays}</p>
            <figure className="chiva">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-chiva-320.webp 320w, /images/transportation/panama-chiva-480.webp 480w, /images/transportation/panama-chiva-640.webp 640w, /images/transportation/panama-chiva-768.webp 768w, /images/transportation/panama-chiva.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/panama-chiva-320.jpg 320w, /images/transportation/panama-chiva-480.jpg 480w, /images/transportation/panama-chiva-640.jpg 640w, /images/transportation/panama-chiva-768.jpg 768w, /images/transportation/panama-chiva.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.chiva}
                  alt={blog.chivaAltText}
                />
              </picture>
              <figcaption>{blog.chivaCaption}</figcaption>
            </figure>
            <p>{blog.summary}</p>
            <figure className="alex-bus last-figure">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/alex-deleon-panama-bus-320.webp 320w, /images/transportation/alex-deleon-panama-bus-480.webp 480w, /images/transportation/alex-deleon-panama-bus-640.webp 640w, /images/transportation/alex-deleon-panama-bus-768.webp 768w, /images/transportation/alex-deleon-panama-bus.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/transportation/alex-deleon-panama-bus-320.jpg 320w, /images/transportation/alex-deleon-panama-bus-480.jpg 480w, /images/transportation/alex-deleon-panama-bus-640.jpg 640w, /images/transportation/alex-deleon-panama-bus-768.jpg 768w, /images/transportation/alex-deleon-panama-bus.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.alexBus}
                  alt={blog.alexBusAltText}
                />
              </picture>
              <figcaption>{blog.alexBusCaption}</figcaption>
            </figure>
            <div className="button-parent">
              <button title="Is Panama Safe?" onClick={goToSafetyStory}>
                &#60;
              </button>
              <button
                title="Things to do in El Cangrejo"
                onClick={goToElCangrejoStory}
              >
                &#62;
              </button>
            </div>
          </section>
        )}
      </main>
     );
};

export default Transportation;
