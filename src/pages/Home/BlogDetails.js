import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import "./BlogDetails.css";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import ReactPlayer from "react-player";

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
  const goToElCangrejoStory = () => {
    navigateA("/blogs/things-to-do-in-el-cangrejo");
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
            <h1 className="centered post-title">{blog.title}</h1>
            <p className="body intro">{blog.intro}</p>
            <p className="moderate-crime">{blog.moderateCrime}</p>
            <p className="despite-this">{blog.despiteThis}</p>
            <p className="this-article">{blog.thisArticle}</p>
            <figure className="cops-at-fruitstand">
              <img
                fetchpriority="high"
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
            <figure className="market-police">
              <img
                className="no-right-click"
                src={blog.panamaCopElCan}
                alt={blog.panamaCopElCanAltText}
              />
              <figcaption>{blog.panamaCopElCanCaption}</figcaption>
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
              <p>{blog.muggersMoveIn}</p>
              <p>{blog.goingAroundCorners}</p>
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
                <li>{blog.takeUber}</li>
              </ul>
              <p>{blog.overallPanamaIs}</p>
              <p>{blog.mostTips}</p>
              <figure className="casco-petty-crime last-figure">
                <img
                  className="no-right-click"
                  src={blog.cascoPettyCrime}
                  alt={blog.cascoPettyCrimeAltText}
                />
                <figcaption>{blog.cascoPettyCrimeCaption}</figcaption>
              </figure>
            </section>
            <div className="button-parent">
              <button title="How do I visit the Panama Canal?" onClick={goToCanalStory}>&#60;</button>
              <button title="How do I get around in Panama?" onClick={goToTransportationStory}>&#62;
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
            <h1 className="centered post-title">{blog.title}</h1>
            <p className="body intro">{blog.intro}</p>
            <figure className="hwy">
                <img
                  fetchpriority="high"
                  className="no-right-click"
                  src={blog.panAm}
                  alt={blog.panAmAltText}
                />
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
                <img
                  className="no-right-click"
                  src={blog.rapiCard}
                  alt={blog.rapiCardAltText}
                />
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
            <div className="video-container">
              <ReactPlayer className='youtube-video' url='<https://youtube.com/shorts/buKyVdS-8cE?si=cmwDySeycx-e_lLr?rel=0>' 
                controls
                width={null}
                height={null}
              />
            </div>
            <p className="metro-caption">{blog.metroVideoCaption}</p>
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
            <p>{blog.someDrivers}</p>
            <p>{blog.itsAGoodIdea}</p>
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
            <h2>{blog.h2DiablosRojos}</h2>
              <p>{blog.theDiablosRojos}</p>
            <figure className="diablos">
                <img
                  className="no-right-click"
                  src={blog.diablo}
                  alt={blog.diabloAltText}
                />
                <figcaption>{blog.diabloCaption}</figcaption>
            </figure>
              <p>{blog.theyAreIndepen}</p>
            <figure className="chicken-bus">
                <img
                  className="no-right-click"
                  src={blog.panamaChickenBus}
                  alt={blog.panamaChickenBusAltText}
                />
                <figcaption>{blog.panamaChickenBusCaption}</figcaption>
            </figure>
            <p>{blog.panamaPhased}</p>
            <p>{blog.becauseTheyWere}</p>
            <p>{blog.youMayStill}</p>
            <h2>{blog.h2Chiva}</h2>
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
            <figure className="alex-bus last-figure">
                <img
                  className="no-right-click"
                  src={blog.alexBus}
                  alt={blog.alexBusAltText}
                />
                <figcaption>{blog.alexBusCaption}</figcaption>
            </figure>
            <div className="button-parent">
              <button title="Is Panama Safe?" onClick={goToSafetyStory}>&#60;</button>
              <button title="Things to do in El Cangrejo" onClick={goToElCangrejoStory}>&#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
  if (document.title === "Things to do in El Cangrejo") {
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
                  src={blog.elCran}
                  alt={blog.elCranAltText}
                />
                <figcaption>{blog.elCranCaption}</figcaption>
            </figure>
           <p>{blog.itIsOne}</p>
           <p>{blog.elCangrejoHas}</p>
           <p><strong>{blog.itRep}</strong></p>
           <h2>{blog.howItGotH2}</h2>
           <p>{blog.theNameOf}</p>
           <p>{blog.overHead}</p>
           <p>{blog.claws}</p>
           <figure className="crab">
                <img
                  className="no-right-click"
                  src={blog.crab}
                  alt={blog.crabAltText}
                />
                <figcaption>{blog.crabCaption}</figcaption>
            </figure>
           <h2>{blog.atmosphereH2}</h2>
           <p>{blog.atmoshphereIs}</p>
           <p>{blog.natureAndUnique}</p>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.bird}
                  alt={blog.birdAltText}
                />
                <figcaption>{blog.birdCaption}</figcaption>
            </figure>
           <p>{blog.viaArgIs}</p>
           <p>{blog.theStreetIs}</p>
           <p>{blog.restaurantOptions}</p>
           <h2>{blog.restaurantsInH2}</h2>
           <h3>{blog.elTrapH3}</h3>
            <p>{blog.offersAuth}</p>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.elTrap}
                  alt={blog.elTrapAltText}
                />
                <figcaption>{blog.elTrapCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.elTrapMeal}
                  alt={blog.elTrapMealAltText}
                />
                <figcaption>{blog.elTrapMealCaption}</figcaption>
            </figure>
            <figure className="el-trap-food">
                <img
                  className="no-right-click"
                  src={blog.elTrapMeal2}
                  alt={blog.elTrapMeal2AltText}
                  />
                <figcaption>{blog.elTrapMeal2Caption}</figcaption>
            </figure>
            <figure className="el-trap-food">
                <img
                  className="no-right-click"
                  src={blog.elTrapMealA}
                  alt={blog.elTrapMealAAltText}
                  />
                <figcaption>{blog.elTrapMealACaption}</figcaption>
            </figure>
           <h3>{blog.sieteMaresH3}</h3>
           <p>{blog.hasAnElegant}</p>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.sieteMares}
                  alt={blog.sieteMaresAltText}
                />
                <figcaption>{blog.sieteMaresCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.sieteMaresInt}
                  alt={blog.sieteMaresIntAltText}
                />
                <figcaption>{blog.sieteMaresIntCaption}</figcaption>
            </figure>
            <figure className="siete">
                <img
                  className="no-right-click"
                  src={blog.sieteMaresFood}
                  alt={blog.sieteMaresFoodAltText}
                />
                <figcaption>{blog.sieteMaresFoodCaption}</figcaption>
            </figure>
           <h3>{blog.chrisRestH3}</h3>
            <p>{blog.isAGood}</p>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.chrisR}
                  alt={blog.chrisRAltText}
                />
                <figcaption>{blog.chrisRCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.chrisR2}
                  alt={blog.chrisR2AltText}
                />
                <figcaption>{blog.chrisR2Caption}</figcaption>
            </figure>
           <h3>{blog.additionalH3}</h3>
           <ul>
              <li>{blog.liOne} <span>{blog.spanOne}</span></li>
              <li>{blog.liTwo} <span>{blog.spanTwo}</span></li>
              <li>{blog.liThree} <span>{blog.spanThree}</span></li>
              <li>{blog.liFour} <span>{blog.spanFour}</span></li>
              <li>{blog.liFive} <span>{blog.spanFive}</span></li>
              <li>{blog.liSix} <span>{blog.spanSix}</span></li>
              <li>{blog.liSeven} <span>{blog.spanSeven}</span></li>
              <li>{blog.liEight} <span>{blog.spanEight}</span></li>
              <li>{blog.liEightA} <span>{blog.spanEightA}</span></li>
              <li> 
                <figure>
                  <img
                    className="no-right-click"
                    src={blog.donLee}
                    alt={blog.donLeeAltText}
                  />
                <figcaption>{blog.donLeeCaption}</figcaption>
              </figure>
              </li>
              <li>{blog.liNine} <span>{blog.spanNine}</span></li>
              <li>{blog.liTen} <span>{blog.spanTen}</span></li>
              <li>{blog.liEleven} <span>{blog.spanEleven}</span></li>
              <li>{blog.liTwelve} <span>{blog.spanTwelve}</span></li>
              <li>{blog.liThirteen} <span>{blog.spanThirteen}</span></li>
              <li>{blog.liFourteen} <span>{blog.spanFourteen}</span></li>
              <li>{blog.liFifteen} <span>{blog.spanFifteen}</span></li>
              <li>{blog.liThirtySix} <span>{blog.spanThirtySix}</span></li>
              <li>{blog.liSixteen} <span>{blog.spanSixteen}</span></li>
              <li>{blog.liSeventeen} <span>{blog.spanSeventeen}</span></li>
              <li>{blog.liEighteen} <span>{blog.spanEighteen}</span></li>
              <li>{blog.liNineteen} <span>{blog.spanNineteen}</span></li>
              <li>{blog.liTwenty} <span>{blog.spanTwenty}</span></li>
              <li>{blog.liTwentyOne} <span>{blog.spanTwentyOne}</span></li>
              <li>{blog.liTwentyTwo} <span>{blog.spanTwentyTwo}</span></li>
              <li>{blog.liTwentyThree} <span>{blog.spanTwentyThree}</span></li>
              <li>{blog.liTwentyThreeA} <span>{blog.spanTwentyThreeA}</span></li>
              <li>
              <figure>
                <img
                  className="no-right-click"
                  src={blog.manolos}
                  alt={blog.manolosAltText}
                />
                <figcaption>{blog.manolosCaption}</figcaption>
            </figure>
              </li>
              <li>{blog.liTwentyFour} <span>{blog.spanTwentyFour}</span></li>
              <li>{blog.liTwentyFourA} <span>{blog.spanTwentyFourA}</span></li>
              <li>{blog.liTwentyFourB} <span>{blog.spanTwentyFourB}</span></li>
              <li>{blog.liTwentyFourC} <span>{blog.spanTwentyFourC}</span></li>
              <li>{blog.liTwentyFive} <span>{blog.spanTwentyFive}</span></li>
              <li>{blog.liTwentySix} <span>{blog.spanTwentySix}</span></li>
              <li>{blog.liTwentySeven} <span>{blog.spanTwentySeven}</span></li>
              <li>{blog.liTwentyEight} <span>{blog.spanTwentyEight}</span></li>
              <li>{blog.liTwentyNine} <span>{blog.spanTwentyNine}</span></li>
              <li>{blog.liThirty} <span>{blog.spanThirty}</span></li>
              <li>{blog.liThirtyOne} <span>{blog.spanThirtyOne}</span></li>
              <li>{blog.liThirtyTwo} <span>{blog.spanThirtyTwo}</span></li>
              <li>{blog.liThirtyThree} <span>{blog.spanThirtyThree}</span></li>
              <li>{blog.liThirtyFour} <span>{blog.spanThirtyFour}</span></li>
              <li>{blog.liThirtyFive} <span>{blog.spanThirtyFive}</span></li>
              <li>{blog.liThirtySeven} <span>{blog.spanThirtySeven}</span></li>
              <li>{blog.liThirtyEight} <span>{blog.spanThirtyEight}</span></li>
              <li>
              <figure>
                <img
                  className="no-right-click"
                  src={blog.sen}
                  alt={blog.senAltText}
                />
                <figcaption>{blog.senCaption}</figcaption>
             </figure>
              </li>
              <li>{blog.liThirtyNine} <span>{blog.spanThirtyNine}</span></li>
              <li>{blog.liForty} <span>{blog.spanForty}</span></li>
              <li>{blog.liFortyOne} <span>{blog.spanFortyOne}</span></li>
              <li>{blog.liFortyTwo} <span>{blog.spanFortyTwo}</span></li>
              <li>{blog.liFortyThree} <span>{blog.spanFortyThree}</span></li>
           </ul>
           <h3>{blog.barsPubsH3}</h3>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.night}
                  alt={blog.nightAltText}
                />
                <figcaption>{blog.nightCaption}</figcaption>
            </figure>
           <ul>
              <li>{blog.bpOne}</li>
              <li>{blog.bpOneA}</li>
              <li>{blog.bpTwo}</li>
              <li>{blog.bpThree}</li>
              <li>{blog.bpFour}</li>
              <li>{blog.bpFive}</li>
              <li>{blog.bpSix}</li>
              <li>{blog.bpSeven}</li>
              <li>{blog.bpEight}</li>
              <li>{blog.bpNine}</li>
              <li>{blog.bpTen}</li>
              <li>{blog.bpEleven}</li>
              <li>{blog.bpTwelve}</li>
              <li>{blog.bpThirteen}</li>
              <li>{blog.bpFourteen}</li>
              <li>{blog.bpFifteen}</li>
              <li>{blog.bpSixteen}</li>
           </ul>
           <h2>{blog.parksH2}</h2>
           <h3>{blog.andresBelH3}</h3>
           <p>{blog.isLocated}</p>
           <p>{blog.thereAre}</p>
           <h3>{blog.parkOmarH3}</h3>
           <p>{blog.isALarg}</p>
           <p>{blog.bothOf}</p>
           <h3>{blog.iglesiaH3}</h3>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.delCarmen}
                  alt={blog.delCarmenAltText}
                />
                <figcaption>{blog.delCarmenCaption}</figcaption>
            </figure>
           <p>{blog.theChurch}</p>
           <p>{blog.itHas}</p>
           <p>{blog.towers}</p>
           <p>{blog.itsConstruction}</p>
           <h3>{blog.ffH3}</h3>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.ff}
                  alt={blog.ffAltText}
                />
                <figcaption>{blog.ffCaption}</figcaption>
            </figure>
           <p>{blog.theCork}</p>
           <h3>{blog.womanKneeH3}</h3>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.onKnee}
                  alt={blog.onKneeAltText}
                />
                <figcaption>{blog.onKneeCaption}</figcaption>
            </figure>
           <p>{blog.thisIs}</p>
           <h3>{blog.robertoH3}</h3>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.duran}
                  alt={blog.duranAltText}
                />
                <figcaption>{blog.duranCaption}</figcaption>
            </figure>
           <p>{blog.houseIn}</p>
           <h3>{blog.otherSitesH3}</h3>
           <figure>
                <img
                  className="no-right-click"
                  src={blog.barber}
                  alt={blog.barberAltText}
                />
                <figcaption>{blog.barberCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.tryp}
                  alt={blog.trypAltText}
                />
                <figcaption>{blog.trypCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.coffee}
                  alt={blog.coffeeAltText}
                />
                <figcaption>{blog.coffeeCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.graff}
                  alt={blog.graffAltText}
                />
                <figcaption>{blog.graffCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.palm}
                  alt={blog.palmAltText}
                />
                <figcaption>{blog.palmCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.moto}
                  alt={blog.motoAltText}
                />
                <figcaption>{blog.motoCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.life}
                  alt={blog.lifeAltText}
                />
                <figcaption>{blog.lifeCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.street}
                  alt={blog.streetAltText}
                />
                <figcaption>{blog.streetCaption}</figcaption>
            </figure>
            <figure>
                <img
                  className="no-right-click"
                  src={blog.view}
                  alt={blog.viewAltText}
                />
                <figcaption>{blog.viewCaption}</figcaption>
            </figure>
            <figure className="last-figure">
                <img
                  className="no-right-click"
                  src={blog.arch}
                  alt={blog.archAltText}
                />
                <figcaption>{blog.archCaption}</figcaption>
            </figure>
           <div className="button-parent">
              <button title="How do I get around in Panama?" onClick={goToTransportationStory}>&#60;</button>
              <button title="How do I visit the Panama Canal?" onClick={goToCanalStory}>&#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
};

export default BlogDetails;
