import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import "./BlogDetails.css";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";

const BlogDetails = () => {
  //using the useParams hook to grab values (route params) from current url (route)
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  TabTitle(id.charAt(0).toUpperCase() + id.slice(1).split("-").join(" "));
  Capitalize();

  //safety page forward back
  const navigate = useNavigate();
  const goToCanalStory = () => {
    navigate("/featured/how-do-i-visit-the-panama-canal");
  };
  const goToTransportationStory = () => {
    navigate("/blogs/how-do-i-get-around-in-panama");
  };

  //transportation page forward back
  const navigateA = useNavigate();
  const goToSafetyStory = () => {
    navigateA("/blogs/is-panama-safe");
  };
  const goToMolaStory = () => {
    navigateA("/blogs/what-are-molas");
  };

  if (document.title === "Is Panama Safe?") {
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
            <h1 className="centered caps post-title">{blog.title}</h1>
            <p className="body intro">{blog.intro}</p>
            <p className="moderate-crime">{blog.moderateCrime}</p>
            <p className="despite-this">{blog.despiteThis}</p>
            <p className="this-article">{blog.thisArticle}</p>
            <figure className="cops-at-fruitstand">
              <img
                className="no-right-click"
                src={blog.copsAtFruitStand}
                alt={blog.fruitStandCopAltText}
              />
              <figcaption>{blog.fruitStandCopCaption}</figcaption>
            </figure>
            <figure className="bank-police">
              <img
                className="no-right-click"
                src={blog.panamaCopBank}
                alt={blog.panamaCopBankAltText}
              />
              <figcaption>{blog.panamaCopBankCaption}</figcaption>
            </figure>
            <section>
              <h2>{blog.h2targets}</h2>
              <p>{blog.criteria}</p>
              <h3>{blog.h3alone}</h3>
              <p>{blog.commonTarget}</p>
              <p>{blog.Oftentimes}</p>
              <h3>{blog.unsurePeople}</h3>
              <p>{blog.bodyLanguage}</p>
              <p>{blog.ifAble}</p>
              <p>{blog.goingAroundCorners}</p>
              <p>{blog.muggersMoveIn}</p>
              <p>{blog.takeNote}</p>
              <p>{blog.whenYouEnter}</p>
              <h3>{blog.h3wealth}</h3>
              <p>{blog.cuffLinks}</p>
              <p>{blog.makeEffort}</p>
              <p>{blog.ensureThat}</p>
              <h2>{blog.h2whatToDo}</h2>
              <p>{blog.ifMugged}</p>
              <p>{blog.manyMuggers}</p>
              <p>{blog.dummyWallet}</p>
              <h2>{blog.h2HighCrime}</h2>
              <p>{blog.accordingTo}</p>
              <ul>
                <li>{blog.sanMiguelito}</li>
                <li>{blog.rioAbajo}</li>
                <li>{blog.elChorrillo}</li>
                <li>{blog.santaAna}</li>
                <li>{blog.panamaViejo}</li>
              </ul>
              <p>{blog.mostCrimeReported}</p>
              <p>{blog.duringDay}</p>
              <figure className="casco-police">
                <img
                  className="no-right-click"
                  src={blog.cascoViejoPolice}
                  alt={blog.cascoViejoPolceAltText}
                />
                <figcaption>{blog.cascoViejoPoliceCaption}</figcaption>
              </figure>
              <figure className="casco-tourist">
                <img
                  className="no-right-click"
                  src={blog.cascoTouristAuth}
                  alt={blog.cascoTouristAuthAltText}
                />
                <figcaption>{blog.cascoTouristAuthCaption}</figcaption>
              </figure>
              <p>{blog.cascoViejoBorders}</p>
              <figure className="near-casco">
                <img
                  className="no-right-click"
                  src={blog.nearCascoViejo}
                  alt={blog.nearCascoViejoAltText}
                />
                <figcaption>{blog.nearCascoViejoCaption}</figcaption>
              </figure>
              <p>{blog.iAdviseAgainst}</p>
              <h3>{blog.h3Colon}</h3>
              <p>{blog.colonIsOn}</p>
              <figure className="colon-plate">
                <img
                  className="no-right-click"
                  src={blog.colonLicense}
                  alt={blog.colonLicenseAltText}
                />
                <figcaption>{blog.colonLicenseCaption}</figcaption>
              </figure>
              <h3>{blog.darianGap}</h3>
              <p>{blog.nearColumbianBorder}</p>
              <p>{blog.difficultToNavigate}</p>
              <p>{blog.trafficking}</p>
              <p>{blog.adventureTourist}</p>
              <h2>{blog.h2SafeWater}</h2>
              <p>{blog.hygieneStandards}</p>
              <p>{blog.hepatitisA}</p>
              <p>{blog.playItSafe}</p>
              <h2>{blog.h2Insects}</h2>
              <p>{blog.panamaDoesHave}</p>
              <h2>{blog.h2Tips}</h2>
              <ul>
                <li>{blog.shareItinerary}</li>
                <li>{blog.beforeLeavingHotel}</li>
                <li>{blog.smartTraveler}</li>
                <li>{blog.moneyBelt}</li>
                <li>{blog.differentPockets}</li>
                <li>{blog.rubberBand}</li>
                <li>{blog.mentalChecklist}</li>
                <li>{blog.beGuarded}</li>
                <li>{blog.neverLeave}</li>
                <li>{blog.beMindful}</li>
                <li>{blog.commotion}</li>
                <li>{blog.takeLookBack}</li>
                <li>{blog.checkIn}</li>
                <li>{blog.emergencyNum}</li>
                <li>{blog.insurance}</li>
                <li>{blog.phrases}</li>
                <li>{blog.copyPassport}</li>
                <li>{blog.avoidWalking}</li>
                <li>{blog.clubbing}</li>
                <li>{blog.parkWellLit}</li>
              </ul>
              <p>{blog.overallPanamaIs}</p>
              <p>{blog.mostTips}</p>
              <figure className="casco-petty-crime">
                <img
                  className="no-right-click"
                  src={blog.cascoPettyCrime}
                  alt={blog.cascoPettyCrimeAltText}
                />
                <figcaption>{blog.cascoPettyCrimeCaption}</figcaption>
              </figure>
            </section>
            <div className="button-parent">
              <button onClick={goToCanalStory}>&#60; Previous Story</button>
              <button onClick={goToTransportationStory}>
                Next Story &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
  if (document.title === "How do I get Around in Panama?") {
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
            <h1 className="centered caps post-title">{blog.title}</h1>
            <p className="body intro">{blog.intro}</p>
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
            <h4>{blog.h4Wifi}</h4>
            <p>{blog.wifiAccess}</p>
            <h3>{blog.h3TakeMetro}</h3>
            <p>{blog.metroLeast}</p>
            <p>{blog.hasOwn}</p>
            <p>{blog.canTake}</p>
            <h4>{blog.h4RapiCard}</h4>
            <p>{blog.cashCredit}</p>
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
                <img
                  className="no-right-click"
                  src={blog.freeShuttle}
                  alt={blog.freeShuttleAltText}
                />
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
                <img
                  className="no-right-click"
                  src={blog.metroMap}
                  alt={blog.metroMapAltText}
                />
                <figcaption>{blog.metroMapCaption}<br/><span>{blog.courtesyLobueno}</span></figcaption>
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
            <h4>{blog.metroHoursh4}</h4>
            <p className="bold-text">{blog.metroStrong} <span>{blog.fiveAm}</span></p>
            <p className="bold-text">{blog.saturdayStrong} <span>{blog.fivetoTen}</span></p>
            <p className="bold-text">{blog.sundayStrong} <span>{blog.sevenAm}</span></p>
            <h2>{blog.h2Addresses}</h2>
            <p>{blog.noProperAddresses}</p>
            <p>{blog.goByLandmarks}</p>
            <p>{blog.whenAsking}</p>
            <p>{blog.itsCommon}</p>
            <p>{blog.alwaysGreet}</p>
            <h2>{blog.h2TransportationAround}</h2>
            <p>{blog.mainNeighborhoods}</p>
            <p><strong>{blog.thisIsKnown}</strong></p>
            <figure className="city-center">
                <img
                  className="no-right-click"
                  src={blog.cityCenter}
                  alt={blog.cityCenterAltText}
                />
                <figcaption>{blog.cityCenterCaption}<br/><span>{blog.courtesyGoogle}</span></figcaption>
            </figure>
            <h3>{blog.h3YellowCab}</h3>
            <figure className="yellow-cabs">
                <img
                  className="no-right-click"
                  src={blog.panamaCabs}
                  alt={blog.panamaCabsAltText}
                />
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
            <p>{blog.itsAGoodIdea}</p>
            <p>{blog.someDrivers}</p>
            <p>{blog.documentEverything}</p>
            <p>{blog.ifAny}</p>
            <h3>{blog.h3PanamaBuses}</h3>
            <h4>{blog.h4RidingMetro}</h4>
            <figure className="metro-bus">
                <img
                  className="no-right-click"
                  src={blog.metroCab}
                  alt={blog.metroCabAltText}
                />
                <figcaption>{blog.metroCabCaption}</figcaption>
            </figure>
            <p>{blog.theMetroIs}</p>
            <p>{blog.theCostIs}</p>
            <p>{blog.thereAre}</p>
            <p>{blog.whenYouGetOn}</p>
            <p>{blog.whenReady}</p>
            <h4>{blog.h4busRidesOut}</h4>
            <figure className="albrook-terminal">
            <img
                  className="no-right-click"
                  src={blog.albrookEntr}
                  alt={blog.albrookEntrAltText}
                />
                <figcaption>{blog.albrookEntrBusCaption}</figcaption>
            </figure>
            <p>{blog.granTerminal}</p>
            <p>{blog.youCanTake}</p>
            <h5>{blog.h5CoronadoBus}</h5>
            <p>{blog.coronadoIs}</p>
            <p>{blog.thereAreBusesTo}</p>
            <p>{blog.youHaveTo}</p>
            <p>{blog.ticketWindows}</p>
            <p>{blog.theTicketPrice}</p>
            <p>{blog.afterPurchasing}</p>
            <p>{blog.youWillSee}</p>
            <p>{blog.twoBusesChoose}</p>
            <figure className="comfy-bus">
                <img
                  className="no-right-click"
                  src={blog.comfyBus}
                  alt={blog.comfyBusAltText}
                />
                <figcaption>{blog.comfyBusCaption}</figcaption>
            </figure>
            <figure className="coaster-bus">
                <img
                  className="no-right-click"
                  src={blog.coasterBus}
                  alt={blog.coasterBusAltText}
                />
                <figcaption>{blog.coasterBusCaption}</figcaption>
            </figure>
            <p>{blog.takeLarger}</p>
            <p>{blog.whenYouGetOnThe}</p>
            <p>{blog.coronadoIsAbout}</p>
            <figure className="coronado-stop">
                <img
                  className="no-right-click"
                  src={blog.coronadoEntrance}
                  alt={blog.coronadoEntranceAltText}
                />
                <figcaption>{blog.coronadoEntranceCaption}</figcaption>
            </figure>
            <p>{blog.pedestrianBridge}</p>
            <figure className="coronado-map">
                <img
                  className="no-right-click"
                  src={blog.coronadoMap}
                  alt={blog.coronadoMapAltText}
                />
                <figcaption>{blog.coronadoMapCaption}<br/><span>{blog.courtesyGoogle}</span></figcaption>
            </figure>
            <p>{blog.youCanTakeCab}</p>
            <figure className="taxi-truck">
                <img
                  className="no-right-click"
                  src={blog.taxiPickUp}
                  alt={blog.taxiPickUpAltText}
                />
                <figcaption>{blog.taxiPickUpCaption}</figcaption>
            </figure>
            <p>{blog.smallWhite}</p>
            <figure className="mini-van">
                <img
                  className="no-right-click"
                  src={blog.coronadoShuttle}
                  alt={blog.coronadoShuttleAltText}
                />
                <figcaption>{blog.coronadoShuttleCaption}</figcaption>
            </figure>
            <p>{blog.packIn}</p>
            <figure className="inside-van">
                <img
                  className="no-right-click"
                  src={blog.shuttleInterior}
                  alt={blog.shuttleInteriorAltText}
                />
                <figcaption>{blog.shuttleInteriorCaption}</figcaption>
            </figure>
            <p>{blog.gates}</p>
            <figure className="gates">
                <img
                  className="no-right-click"
                  src={blog.coronadoGates}
                  alt={blog.coronadoGatesAltText}
                />
                <figcaption>{blog.coronadoGatesCaption}</figcaption>
            </figure>
            <h4>{blog.h4DiablosRojos}</h4>
            <figure className="diablos">
                <img
                  className="no-right-click"
                  src={blog.diablo}
                  alt={blog.diabloAltText}
                />
                <figcaption>{blog.diabloCaption}</figcaption>
            </figure>
            <figure className="chicken-bus">
                <img
                  className="no-right-click"
                  src={blog.panamaChickenBus}
                  alt={blog.panamaChickenBusAltText}
                />
                <figcaption>{blog.panamaChickenBusCaption}</figcaption>
            </figure>
            <p>{blog.theDiablosRojos}</p>
            <p>{blog.theyAreIndepen}</p>
            <p>{blog.panamaPhased}</p>
            <p>{blog.becauseTheyWere}</p>
            <p>{blog.youMayStill}</p>
            <h4>{blog.h4Chiva}</h4>
            <p>{blog.chivasAre}</p>
            <p>{blog.nowadays}</p>
            <figure className="chiva">
                <img
                  className="no-right-click"
                  src={blog.chiva}
                  alt={blog.chivaAltText}
                />
                <figcaption>{blog.chivaCaption}</figcaption>
            </figure>
            <p>{blog.summary}</p>




            <div className="button-parent">
              <button onClick={goToSafetyStory}>&#60; Previous Story</button>
              <button onClick={goToMolaStory}>
                Next Story &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
  if (document.title === "What are Molas?") {
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
            <h1 className="centered caps">{blog.title}</h1>
            <p className="body intro">{blog.body}</p>
            <p className="body-two">{blog.bodyTwo}</p>
            <p className="body-two-a">{blog.bodyTwoA}</p>
            <figure>
              <img
                className="no-right-click"
                src={blog.imageTwo}
                alt={blog.altTwo}
              />
              <figcaption>{blog.figcaptionTwo}</figcaption>
            </figure>
            <div className="button-parent">
              <button onClick={goToTransportationStory}>&#60; Previous Story</button>
              <button onClick={goToCanalStory}>
                Next Story &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
};

export default BlogDetails;
