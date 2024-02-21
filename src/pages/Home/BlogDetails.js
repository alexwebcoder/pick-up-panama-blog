import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./BlogDetails.css";
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

const findObjectById = (idToFind, arrayOfObjects) => {
  return arrayOfObjects.find((obj) => obj.id === idToFind);
};

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

  //canal navigation
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

  //spanish page navigation
  const navigateSpanish = useNavigate();
  const goToSpanishStory = () => {
    navigateSpanish("/blogs/what-languages-are-spoken-in-panama");
  };

  //cultural norms navigation
  const navigateCultural = useNavigate();
  const goToCulturalNorms = () => {
    navigateCultural("/blogs/what-are-the-cultural-norms-of-panama");
  };

   //food navigation
   const navigateFood = useNavigate();
 const goToFood = () => {
    navigateFood('/blogs/traditional-food-in-panama')
  }

  const currentPageUrl = window.location.href;

  if (document.title === "Is Panama Safe?") {
    return (
      <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}</div>}
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
                hashtags={["pickuppanama", "safety", "panama"]}
                title={"Is Panama Safe?"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"Is Panama Safe?"}
                summary={
                  "Follow these tips to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more."
                }
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"Is Panama Safe?"}
                body={
                  "Follow these tips to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more."
                }
                aria-label="email"
                separator={" "}
              >
                <EmailIcon size={35} />
              </EmailShareButton>
            </div>
            <p className="moderate-crime">{blog.moderateCrime}</p>
            <p className="despite-this">{blog.despiteThis}</p>
            <p className="this-article">{blog.thisArticle}</p>
            <figure className="cops-at-fruitstand">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/safety/panamanian-police-at-fruitstand-320.webp 320w, /images/safety/panamanian-police-at-fruitstand-480.webp 480w, /images/safety/panamanian-police-at-fruitstand-640.webp 640w, /images/safety/panamanian-police-at-fruitstand-768.webp 768w, /images/safety/panamanian-police-at-fruitstand.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/safety/panamanian-police-at-fruitstand-320.jpg 320w, /images/safety/panamanian-police-at-fruitstand-480.jpg 480w, /images/safety/panamanian-police-at-fruitstand-640.jpg 640w, /images/safety/panamanian-police-at-fruitstand-768.jpg 768w, /images/safety/panamanian-police-at-fruitstand.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  fetchpriority="high"
                  className="no-right-click"
                  src={blog.copsAtFruitStand}
                  alt={blog.fruitStandCopAltText}
                />
              </picture>
              <figcaption>{blog.fruitStandCopCaption}</figcaption>
            </figure>
            <figure className="bank-police">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/safety/panamanian-policeman-outside-of-bank-320.webp 320w, /images/safety/panamanian-policeman-outside-of-bank-480.webp 480w, /images/safety/panamanian-policeman-outside-of-bank-640.webp 640w, /images/safety/panamanian-policeman-outside-of-bank-768.webp 768w, /images/safety/panamanian-policeman-outside-of-bank.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/safety/panamanian-policeman-outside-of-bank-320.jpg 320w, /images/safety/panamanian-policeman-outside-of-bank-480.jpg 480w, /images/safety/panamanian-policeman-outside-of-bank-640.jpg 640w, /images/safety/panamanian-policeman-outside-of-bank-768.jpg 768w, /images/safety/panamanian-policeman-outside-of-bank.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.panamaCopBank}
                  alt={blog.panamaCopBankAltText}
                />
              </picture>
              <figcaption>{blog.panamaCopBankCaption}</figcaption>
            </figure>
            <figure className="market-police">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/safety/panamanian-police-el-cangrejo-320.webp 320w, /images/safety/panamanian-police-el-cangrejo-480.webp 480w, /images/safety/panamanian-police-el-cangrejo-640.webp 640w, /images/safety/panamanian-police-el-cangrejo-768.webp 768w, /images/safety/panamanian-police-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/safety/panamanian-police-el-cangrejo-320.jpg 320w, /images/safety/panamanian-police-el-cangrejo-480.jpg 480w, /images/safety/panamanian-police-el-cangrejo-640.jpg 640w, /images/safety/panamanian-police-el-cangrejo-768.jpg 768w, /images/safety/panamanian-police-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.panamaCopElCan}
                  alt={blog.panamaCopElCanAltText}
                />
              </picture>
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/casco-viejo-police-320.webp 320w, /images/safety/casco-viejo-police-480.webp 480w, /images/safety/casco-viejo-police-640.webp 640w, /images/safety/casco-viejo-police-768.webp 768w, /images/safety/casco-viejo-police.webp 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/casco-viejo-police-320.jpg 320w, /images/safety/casco-viejo-police-480.jpg 480w, /images/safety/casco-viejo-police-640.jpg 640w, /images/safety/casco-viejo-police-768.jpg 768w, /images/safety/casco-viejo-police.jpg 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <img
                    className="no-right-click"
                    src={blog.cascoViejoPolice}
                    alt={blog.cascoViejoPolceAltText}
                  />
                </picture>
                <figcaption>{blog.cascoViejoPoliceCaption}</figcaption>
              </figure>
              <figure className="casco-tourist">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/autoridad-de-turismo-320.webp 320w, /images/safety/autoridad-de-turismo-480.webp 480w, /images/safety/autoridad-de-turismo-640.webp 640w, /images/safety/autoridad-de-turismo-768.webp 768w, /images/safety/autoridad-de-turismo.webp 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/autoridad-de-turismo-320.jpg 320w, /images/safety/autoridad-de-turismo-480.jpg 480w, /images/safety/autoridad-de-turismo-640.jpg 640w, /images/safety/autoridad-de-turismo-768.jpg 768w, /images/safety/autoridad-de-turismo.jpg 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <img
                    className="no-right-click"
                    src={blog.cascoTouristAuth}
                    alt={blog.cascoTouristAuthAltText}
                  />
                </picture>
                <figcaption>{blog.cascoTouristAuthCaption}</figcaption>
              </figure>
              <p>{blog.cascoViejoBorders}</p>
              <figure className="near-casco">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/cinco-de-mayo-panama-320.webp 320w, /images/safety/cinco-de-mayo-panama-480.webp 480w, /images/safety/cinco-de-mayo-panama-640.webp 640w, /images/safety/cinco-de-mayo-panama-768.webp 768w, /images/safety/cinco-de-mayo-panama.webp 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/cinco-de-mayo-panama-320.jpg 320w, /images/safety/cinco-de-mayo-panama-480.jpg 480w, /images/safety/cinco-de-mayo-panama-640.jpg 640w, /images/safety/cinco-de-mayo-panama-768.jpg 768w, /images/safety/cinco-de-mayo-panama.jpg 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <img
                    className="no-right-click"
                    src={blog.nearCascoViejo}
                    alt={blog.nearCascoViejoAltText}
                  />
                </picture>
                <figcaption>{blog.nearCascoViejoCaption}</figcaption>
              </figure>
              <p>{blog.iAdviseAgainst}</p>
              <h3>{blog.h3Colon}</h3>
              <p>{blog.colonIsOn}</p>
              <figure className="colon-plate">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/colon-panama-license-plate-320.webp 320w, /images/safety/colon-panama-license-plate-480.webp 480w, /images/safety/colon-panama-license-plate-640.webp 640w, /images/safety/colon-panama-license-plate-768.webp 768w, /images/safety/colon-panama-license-plate.webp 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/colon-panama-license-plate-320.jpg 320w, /images/safety/colon-panama-license-plate-480.jpg 480w, /images/safety/colon-panama-license-plate-640.jpg 640w, /images/safety/colon-panama-license-plate-768.jpg 768w, /images/safety/colon-panama-license-plate.jpg 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <img
                    className="no-right-click"
                    src={blog.colonLicense}
                    alt={blog.colonLicenseAltText}
                  />
                </picture>
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
                <picture>
                  <source
                    type="image/webp"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/casco-viejo-petty-crime-320.webp 320w, /images/safety/casco-viejo-petty-crime-480.webp 480w, /images/safety/casco-viejo-petty-crime-640.webp 640w, /images/safety/casco-viejo-petty-crime-768.webp 768w, /images/safety/casco-viejo-petty-crime.webp 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <source
                    type="image/jpg"
                    srcSet={
                      process.env.PUBLIC_URL +
                      "/images/safety/casco-viejo-petty-crime-320.jpg 320w, /images/safety/casco-viejo-petty-crime-480.jpg 480w, /images/safety/casco-viejo-petty-crime-640.jpg 640w, /images/safety/casco-viejo-petty-crime-768.jpg 768w, /images/safety/casco-viejo-petty-crime.jpg 1170w"
                    }
                    sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                  />
                  <img
                    className="no-right-click"
                    src={blog.cascoPettyCrime}
                    alt={blog.cascoPettyCrimeAltText}
                  />
                </picture>
                <figcaption>{blog.cascoPettyCrimeCaption}</figcaption>
              </figure>
            </section>
            <div className="button-parent">
              <button
                title="How do I visit the Panama Canal?"
                onClick={goToCanalStory}
              >
                &#60;
              </button>
              <button
                title="How do I get around in Panama?"
                onClick={goToTransportationStory}
              >
                &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
  if (document.title === "How do I get Around in Panama?") {
    return (
      <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}</div>}
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
                hashtags={["pickuppanama", "transportation", "panama"]}
                title={"How do I get around in Panama?"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"How do I get around in Panama?"}
                summary={
                  "Learn about Panama's metro train, buses, and taxi system to efficiently get around without overpaying for cabs."
                }
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"How do I get around in Panama?"}
                body={
                  "Learn about Panama's metro train, buses, and taxi system to efficiently get around without overpaying for cabs."
                }
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
  }
  if (document.title === "Things to do in El Cangrejo") {
    return (
      <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}</div>}
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
                hashtags={["pickuppanama", "el cangrejo", "panama"]}
                title={"Things to do in El Cangrejo"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"Things to do in El Cangrejo"}
                summary={
                  "Discover the best restaurants and activities in El Cangrejo and learn why it is worth vistiting."
                }
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"Things to do in El Cangrejo"}
                body={
                  "Discover the best restaurants and activities in El Cangrejo and learn why it is worth vistiting."
                }
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
                    "/images/elCangrejo/el-cangrejo-320.webp 320w, /images/elCangrejo/el-cangrejo-480.webp 480w, /images/elCangrejo/el-cangrejo-640.webp 640w, /images/elCangrejo/el-cangrejo-768.webp 768w, /images/elCangrejo/el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-320.jpg 320w, /images/elCangrejo/el-cangrejo-480.jpg 480w, /images/elCangrejo/el-cangrejo-640.jpg 640w, /images/elCangrejo/el-cangrejo-768.jpg 768w, /images/elCangrejo/el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  fetchpriority="high"
                  className="no-right-click"
                  src={blog.elCran}
                  alt={blog.elCranAltText}
                />
              </picture>
              <figcaption>{blog.elCranCaption}</figcaption>
            </figure>
            <p>{blog.itIsOne}</p>
            <p>{blog.elCangrejoHas}</p>
            <p>
              <strong>{blog.itRep}</strong>
            </p>
            <h2>{blog.howItGotH2}</h2>
            <p>{blog.theNameOf}</p>
            <p>{blog.overHead}</p>
            <p>{blog.claws}</p>
            <figure className="crab">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/map-of-el-cangrejo-320.webp 320w, /images/elCangrejo/map-of-el-cangrejo-480.webp 480w, /images/elCangrejo/map-of-el-cangrejo-640.webp 640w, /images/elCangrejo/map-of-el-cangrejo.webp 768w, /images/elCangrejo/map-of-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/map-of-el-cangrejo-320.jpg 320w, /images/elCangrejo/map-of-el-cangrejo-480.jpg 480w, /images/elCangrejo/map-of-el-cangrejo-640.jpg 640w, /images/elCangrejo/map-of-el-cangrejo.jpg 768w, /images/elCangrejo/map-of-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.crab}
                  alt={blog.crabAltText}
                />
              </picture>
              <figcaption>{blog.crabCaption}</figcaption>
            </figure>
            <h2>{blog.atmosphereH2}</h2>
            <p>{blog.atmoshphereIs}</p>
            <p>{blog.natureAndUnique}</p>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/bird-in-park-320.webp 320w, /images/elCangrejo/bird-in-park-480.webp 480w, /images/elCangrejo/bird-in-park-640.webp 640w, /images/elCangrejo/bird-in-park-768.webp 768w, /images/elCangrejo/bird-in-park.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/bird-in-park-320.jpg 320w, /images/elCangrejo/bird-in-park-480.jpg 480w, /images/elCangrejo/bird-in-park-640.jpg 640w, /images/elCangrejo/bird-in-park-768.jpg 768w, /images/elCangrejo/bird-in-park.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.bird}
                  alt={blog.birdAltText}
                />
              </picture>
              <figcaption>{blog.birdCaption}</figcaption>
            </figure>
            <p>{blog.viaArgIs}</p>
            <p>{blog.theStreetIs}</p>
            <p>{blog.restaurantOptions}</p>
            <h2>{blog.restaurantsInH2}</h2>
            <h3>{blog.elTrapH3}</h3>
            <p>{blog.offersAuth}</p>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-trapiche-panama-320.webp 320w, /images/elCangrejo/el-trapiche-panama-480.webp 480w, /images/elCangrejo/el-trapiche-panama-640.webp 640w, /images/elCangrejo/el-trapiche-panama-768.webp 768w, /images/elCangrejo/el-trapiche-panama.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-trapiche-panama-320.jpg 320w, /images/elCangrejo/el-trapiche-panama-480.jpg 480w, /images/elCangrejo/el-trapiche-panama-640.jpg 640w, /images/elCangrejo/el-trapiche-panama-768.jpg 768w, /images/elCangrejo/el-trapiche-panama.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.elTrap}
                  alt={blog.elTrapAltText}
                />
              </picture>
              <figcaption>{blog.elTrapCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/panamanian-meal-el-trapiche-320.webp 320w, /images/elCangrejo/panamanian-meal-el-trapiche-480.webp 480w, /images/elCangrejo/panamanian-meal-el-trapiche-640.webp 640w, /images/elCangrejo/panamanian-meal-el-trapiche-768.webp 768w, /images/elCangrejo/panamanian-meal-el-trapiche.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/panamanian-meal-el-trapiche-320.jpg 320w, /images/elCangrejo/panamanian-meal-el-trapiche-480.jpg 480w, /images/elCangrejo/panamanian-meal-el-trapiche-640.jpg 640w, /images/elCangrejo/panamanian-meal-el-trapiche-768.jpg 768w, /images/elCangrejo/panamanian-meal-el-trapiche.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.elTrapMeal}
                  alt={blog.elTrapMealAltText}
                />
              </picture>
              <figcaption>{blog.elTrapMealCaption}</figcaption>
            </figure>
            <figure className="el-trap-food">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/meal-at-el-trapiche-320.webp 320w, /images/elCangrejo/meal-at-el-trapiche-480.webp 480w, /images/elCangrejo/meal-at-el-trapiche-640.webp 640w, /images/elCangrejo/meal-at-el-trapiche-768.webp 768w, /images/elCangrejo/meal-at-el-trapiche.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/meal-at-el-trapiche-320.jpg 320w, /images/elCangrejo/meal-at-el-trapiche-480.jpg 480w, /images/elCangrejo/meal-at-el-trapiche-640.jpg 640w, /images/elCangrejo/meal-at-el-trapiche-768.jpg 768w, /images/elCangrejo/meal-at-el-trapiche.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.elTrapMeal2}
                  alt={blog.elTrapMeal2AltText}
                />
              </picture>
              <figcaption>{blog.elTrapMeal2Caption}</figcaption>
            </figure>
            <figure className="el-trap-food">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-trapiche-meal-320.webp 320w, /images/elCangrejo/el-trapiche-meal-480.webp 480w, /images/elCangrejo/el-trapiche-meal-640.webp 640w, /images/elCangrejo/el-trapiche-meal-768.webp 768w, /images/elCangrejo/el-trapiche-meal.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-trapiche-meal-320.jpg 320w, /images/elCangrejo/el-trapiche-meal-480.jpg 480w, /images/elCangrejo/el-trapiche-meal-640.jpg 640w, /images/elCangrejo/el-trapiche-meal-768.jpg 768w, /images/elCangrejo/el-trapiche-meal.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.elTrapMealA}
                  alt={blog.elTrapMealAAltText}
                />
              </picture>
              <figcaption>{blog.elTrapMealACaption}</figcaption>
            </figure>
            <h3>{blog.sieteMaresH3}</h3>
            <p>{blog.hasAnElegant}</p>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/siete-mares-panama-city-320.webp 320w, /images/elCangrejo/siete-mares-panama-city-480.webp 480w, /images/elCangrejo/siete-mares-panama-city-640.webp 640w, /images/elCangrejo/siete-mares-panama-city-768.webp 768w, /images/elCangrejo/siete-mares-panama-city.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/siete-mares-panama-city-320.jpg 320w, /images/elCangrejo/siete-mares-panama-city-480.jpg 480w, /images/elCangrejo/siete-mares-panama-city-640.jpg 640w, /images/elCangrejo/siete-mares-panama-city-768.jpg 768w, /images/elCangrejo/siete-mares-panama-city.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.sieteMares}
                  alt={blog.sieteMaresAltText}
                />
              </picture>
              <figcaption>{blog.sieteMaresCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/siete-mares-interior-320.webp 320w, /images/elCangrejo/siete-mares-interior-480.webp 480w, /images/elCangrejo/siete-mares-interior-640.webp 640w, /images/elCangrejo/siete-mares-interior-768.webp 768w, /images/elCangrejo/siete-mares-interior.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/siete-mares-interior-320.jpg 320w, /images/elCangrejo/siete-mares-interior-480.jpg 480w, /images/elCangrejo/siete-mares-interior-640.jpg 640w, /images/elCangrejo/siete-mares-interior-768.jpg 768w, /images/elCangrejo/siete-mares-interior.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.sieteMaresInt}
                  alt={blog.sieteMaresIntAltText}
                />
              </picture>
              <figcaption>{blog.sieteMaresIntCaption}</figcaption>
            </figure>
            <figure className="siete">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/lobster-meal-siete-mares-320.webp 320w, /images/elCangrejo/lobster-meal-siete-mares-480.webp 480w, /images/elCangrejo/lobster-meal-siete-mares-640.webp 640w, /images/elCangrejo/lobster-meal-siete-mares-768.webp 768w, /images/elCangrejo/lobster-meal-siete-mares.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/lobster-meal-siete-mares-320.jpg 320w, /images/elCangrejo/lobster-meal-siete-mares-480.jpg 480w, /images/elCangrejo/lobster-meal-siete-mares-640.jpg 640w, /images/elCangrejo/lobster-meal-siete-mares-768.jpg 768w, /images/elCangrejo/lobster-meal-siete-mares.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />

                <img
                  className="no-right-click"
                  src={blog.sieteMaresFood}
                  alt={blog.sieteMaresFoodAltText}
                />
              </picture>
              <figcaption>{blog.sieteMaresFoodCaption}</figcaption>
            </figure>
            <h3>{blog.chrisRestH3}</h3>
            <p>{blog.isAGood}</p>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/chris-restaurante-grill-320.webp 320w, /images/elCangrejo/chris-restaurante-grill-480.webp 480w, /images/elCangrejo/chris-restaurante-grill-640.webp 640w, /images/elCangrejo/chris-restaurante-grill-768.webp 768w, /images/elCangrejo/chris-restaurante-grill.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/chris-restaurante-grill-320.jpg 320w, /images/elCangrejo/chris-restaurante-grill-480.jpg 480w, /images/elCangrejo/chris-restaurante-grill-640.jpg 640w, /images/elCangrejo/chris-restaurante-grill-768.jpg 768w, /images/elCangrejo/chris-restaurante-grill.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />

                <img
                  className="no-right-click"
                  src={blog.chrisR}
                  alt={blog.chrisRAltText}
                />
              </picture>
              <figcaption>{blog.chrisRCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/chris-restaurante-interior-320.webp 320w, /images/elCangrejo/chris-restaurante-interior-480.webp 480w, /images/elCangrejo/chris-restaurante-interior-640.webp 640w, /images/elCangrejo/chris-restaurante-interior-768.webp 768w, /images/elCangrejo/chris-restaurante-interior.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/chris-restaurante-interior-320.jpg 320w, /images/elCangrejo/chris-restaurante-interior-480.jpg 480w, /images/elCangrejo/chris-restaurante-interior-640.jpg 640w, /images/elCangrejo/chris-restaurante-interior-768.jpg 768w, /images/elCangrejo/chris-restaurante-interior.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.chrisR2}
                  alt={blog.chrisR2AltText}
                />
              </picture>
              <figcaption>{blog.chrisR2Caption}</figcaption>
            </figure>
            <h3>{blog.additionalH3}</h3>
            <ul>
              <li>
                {blog.liOne} <span>{blog.spanOne}</span>
              </li>
              <li>
                {blog.liTwo} <span>{blog.spanTwo}</span>
              </li>
              <li>
                {blog.liThree} <span>{blog.spanThree}</span>
              </li>
              <li>
                {blog.liFour} <span>{blog.spanFour}</span>
              </li>
              <li>
                {blog.liFive} <span>{blog.spanFive}</span>
              </li>
              <li>
                {blog.liSix} <span>{blog.spanSix}</span>
              </li>
              <li>
                {blog.liSeven} <span>{blog.spanSeven}</span>
              </li>
              <li>
                {blog.liEight} <span>{blog.spanEight}</span>
              </li>
              <li>
                {blog.liEightA} <span>{blog.spanEightA}</span>
              </li>
              <li>
                <figure className="lee">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/elCangrejo/don-lee-el-cangrejo-320.webp 320w, /images/elCangrejo/don-lee-el-cangrejo-480.webp 480w, /images/elCangrejo/don-lee-el-cangrejo-640.webp 640w, /images/elCangrejo/don-lee-el-cangrejo-768.webp 768w, /images/elCangrejo/don-lee-el-cangrejo.webp 1124w"
                      }
                      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1124px"
                    />
                    <source
                      type="image/jpg"
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/elCangrejo/don-lee-el-cangrejo-320.jpg 320w, /images/elCangrejo/don-lee-el-cangrejo-480.jpg 480w, /images/elCangrejo/don-lee-el-cangrejo-640.jpg 640w, /images/elCangrejo/don-lee-el-cangrejo-768.jpg 768w, /images/elCangrejo/don-lee-el-cangrejo.jpg 1124w"
                      }
                      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1124px"
                    />
                    <img
                      className="no-right-click"
                      src={blog.donLee}
                      alt={blog.donLeeAltText}
                    />
                  </picture>
                  <figcaption>{blog.donLeeCaption}</figcaption>
                </figure>
              </li>
              <li>
                {blog.liNine} <span>{blog.spanNine}</span>
              </li>
              <li>
                {blog.liTen} <span>{blog.spanTen}</span>
              </li>
              <li>
                {blog.liEleven} <span>{blog.spanEleven}</span>
              </li>
              <li>
                {blog.liTwelve} <span>{blog.spanTwelve}</span>
              </li>
              <li>
                {blog.liThirteen} <span>{blog.spanThirteen}</span>
              </li>
              <li>
                {blog.liFourteen} <span>{blog.spanFourteen}</span>
              </li>
              <li>
                {blog.liFifteen} <span>{blog.spanFifteen}</span>
              </li>
              <li>
                {blog.liThirtySix} <span>{blog.spanThirtySix}</span>
              </li>
              <li>
                {blog.liSixteen} <span>{blog.spanSixteen}</span>
              </li>
              <li>
                {blog.liSeventeen} <span>{blog.spanSeventeen}</span>
              </li>
              <li>
                {blog.liEighteen} <span>{blog.spanEighteen}</span>
              </li>
              <li>
                {blog.liNineteen} <span>{blog.spanNineteen}</span>
              </li>
              <li>
                {blog.liTwenty} <span>{blog.spanTwenty}</span>
              </li>
              <li>
                {blog.liTwentyOne} <span>{blog.spanTwentyOne}</span>
              </li>
              <li>
                {blog.liTwentyTwo} <span>{blog.spanTwentyTwo}</span>
              </li>
              <li>
                {blog.liTwentyThree} <span>{blog.spanTwentyThree}</span>
              </li>
              <li>
                {blog.liTwentyThreeA} <span>{blog.spanTwentyThreeA}</span>
              </li>
              <li>
                <figure className="manlos">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/elCangrejo/manolos-320.webp 320w, /images/elCangrejo/manolos-480.webp 480w, /images/elCangrejo/manolos-640.webp 640w, /images/elCangrejo/manolos-768.webp 768w, /images/elCangrejo/manolos.webp 1124w"
                      }
                      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1124px"
                    />
                    <source
                      type="image/jpg"
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/elCangrejo/manolos-320.jpg 320w, /images/elCangrejo/manolos-480.jpg 480w, /images/elCangrejo/manolos-640.jpg 640w, /images/elCangrejo/manolos-768.jpg 768w, /images/elCangrejo/manolos.jpg 1124w"
                      }
                      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1124px"
                    />
                    <img
                      className="no-right-click"
                      src={blog.manolos}
                      alt={blog.manolosAltText}
                    />
                  </picture>
                  <figcaption>{blog.manolosCaption}</figcaption>
                </figure>
              </li>
              <li>
                {blog.liTwentyFour} <span>{blog.spanTwentyFour}</span>
              </li>
              <li>
                {blog.liTwentyFourA} <span>{blog.spanTwentyFourA}</span>
              </li>
              <li>
                {blog.liTwentyFourB} <span>{blog.spanTwentyFourB}</span>
              </li>
              <li>
                {blog.liTwentyFourC} <span>{blog.spanTwentyFourC}</span>
              </li>
              <li>
                {blog.liTwentyFive} <span>{blog.spanTwentyFive}</span>
              </li>
              <li>
                {blog.liTwentySix} <span>{blog.spanTwentySix}</span>
              </li>
              <li>
                {blog.liTwentySeven} <span>{blog.spanTwentySeven}</span>
              </li>
              <li>
                {blog.liTwentyEight} <span>{blog.spanTwentyEight}</span>
              </li>
              <li>
                {blog.liTwentyNine} <span>{blog.spanTwentyNine}</span>
              </li>
              <li>
                {blog.liThirty} <span>{blog.spanThirty}</span>
              </li>
              <li>
                {blog.liThirtyOne} <span>{blog.spanThirtyOne}</span>
              </li>
              <li>
                {blog.liThirtyTwo} <span>{blog.spanThirtyTwo}</span>
              </li>
              <li>
                {blog.liThirtyThree} <span>{blog.spanThirtyThree}</span>
              </li>
              <li>
                {blog.liThirtyFour} <span>{blog.spanThirtyFour}</span>
              </li>
              <li>
                {blog.liThirtyFive} <span>{blog.spanThirtyFive}</span>
              </li>
              <li>
                {blog.liThirtySeven} <span>{blog.spanThirtySeven}</span>
              </li>
              <li>
                {blog.liThirtyEight} <span>{blog.spanThirtyEight}</span>
              </li>
              <li>
                <figure className="sen">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/elCangrejo/sen-vietnam-320.webp 320w, /images/elCangrejo/sen-vietnam-480.webp 480w, /images/elCangrejo/sen-vietnam-640.webp 640w, /images/elCangrejo/sen-vietnam-768.webp 768w, /images/elCangrejo/sen-vietnam.webp 1124w"
                      }
                      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1124px"
                    />
                    <source
                      type="image/jpg"
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/elCangrejo/sen-vietnam-320.jpg 320w, /images/elCangrejo/sen-vietnam-480.jpg 480w, /images/elCangrejo/sen-vietnam-640.jpg 640w, /images/elCangrejo/sen-vietnam-768.jpg 768w, /images/elCangrejo/sen-vietnam.jpg 1124w"
                      }
                      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1124px"
                    />
                    <img
                      className="no-right-click"
                      src={blog.sen}
                      alt={blog.senAltText}
                    />
                  </picture>
                  <figcaption>{blog.senCaption}</figcaption>
                </figure>
              </li>
              <li>
                {blog.liThirtyNine} <span>{blog.spanThirtyNine}</span>
              </li>
              <li>
                {blog.liForty} <span>{blog.spanForty}</span>
              </li>
              <li>
                {blog.liFortyOne} <span>{blog.spanFortyOne}</span>
              </li>
              <li>
                {blog.liFortyTwo} <span>{blog.spanFortyTwo}</span>
              </li>
              <li>
                {blog.liFortyThree} <span>{blog.spanFortyThree}</span>
              </li>
            </ul>
            <h3>{blog.barsPubsH3}</h3>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-night-320.webp 320w, /images/elCangrejo/el-cangrejo-night-480.webp 480w, /images/elCangrejo/el-cangrejo-night-640.webp 640w, /images/elCangrejo/el-cangrejo-night-768.webp 768w, /images/elCangrejo/el-cangrejo-night.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-night-320.jpg 320w, /images/elCangrejo/el-cangrejo-night-480.jpg 480w, /images/elCangrejo/el-cangrejo-night-640.jpg 640w, /images/elCangrejo/el-cangrejo-night-768.jpg 768w, /images/elCangrejo/el-cangrejo-night.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.night}
                  alt={blog.nightAltText}
                />
              </picture>
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
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/iglesia-del-carmen-panama-320.webp 320w, /images/elCangrejo/iglesia-del-carmen-panama-480.webp 480w, /images/elCangrejo/iglesia-del-carmen-panama-640.webp 640w, /images/elCangrejo/iglesia-del-carmen-panama-768.webp 768w, /images/elCangrejo/iglesia-del-carmen-panama.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/iglesia-del-carmen-panama-320.jpg 320w, /images/elCangrejo/iglesia-del-carmen-panama-480.jpg 480w, /images/elCangrejo/iglesia-del-carmen-panama-640.jpg 640w, /images/elCangrejo/iglesia-del-carmen-panama-768.jpg 768w, /images/elCangrejo/iglesia-del-carmen-panama.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.delCarmen}
                  alt={blog.delCarmenAltText}
                />
              </picture>
              <figcaption>{blog.delCarmenCaption}</figcaption>
            </figure>
            <p>{blog.theChurch}</p>
            <p>{blog.itHas}</p>
            <p>{blog.towers}</p>
            <p>{blog.itsConstruction}</p>
            <h3>{blog.ffH3}</h3>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/f-and-f-tower-panama-320.webp 320w, /images/elCangrejo/f-and-f-tower-panama-480.webp 480w, /images/elCangrejo/f-and-f-tower-panama-640.webp 640w, /images/elCangrejo/f-and-f-tower-panama-768.webp 768w, /images/elCangrejo/f-and-f-tower-panama.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/f-and-f-tower-panama-320.jpg 320w, /images/elCangrejo/f-and-f-tower-panama-480.jpg 480w, /images/elCangrejo/f-and-f-tower-panama-640.jpg 640w, /images/elCangrejo/f-and-f-tower-panama-768.jpg 768w, /images/elCangrejo/f-and-f-tower-panama.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.ff}
                  alt={blog.ffAltText}
                />
              </picture>
              <figcaption>{blog.ffCaption}</figcaption>
            </figure>
            <p>{blog.theCork}</p>
            <h3>{blog.womanKneeH3}</h3>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/woman-on-her-knee-statue-320.webp 320w, /images/elCangrejo/woman-on-her-knee-statue-480.webp 480w, /images/elCangrejo/woman-on-her-knee-statue-640.webp 640w, /images/elCangrejo/woman-on-her-knee-statue-768.webp 768w, /images/elCangrejo/woman-on-her-knee-statue.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/woman-on-her-knee-statue-320.jpg 320w, /images/elCangrejo/woman-on-her-knee-statue-480.jpg 480w, /images/elCangrejo/woman-on-her-knee-statue-640.jpg 640w, /images/elCangrejo/woman-on-her-knee-statue-768.jpg 768w, /images/elCangrejo/woman-on-her-knee-statue.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.onKnee}
                  alt={blog.onKneeAltText}
                />
              </picture>
              <figcaption>{blog.onKneeCaption}</figcaption>
            </figure>
            <p>{blog.thisIs}</p>
            <h3>{blog.robertoH3}</h3>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/roberto-duran-house-320.webp 320w, /images/elCangrejo/roberto-duran-house-480.webp 480w, /images/elCangrejo/roberto-duran-house-640.webp 640w, /images/elCangrejo/roberto-duran-house-768.webp 768w, /images/elCangrejo/roberto-duran-house.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/roberto-duran-house-320.jpg 320w, /images/elCangrejo/roberto-duran-house-480.jpg 480w, /images/elCangrejo/roberto-duran-house-640.jpg 640w, /images/elCangrejo/roberto-duran-house-768.jpg 768w, /images/elCangrejo/roberto-duran-house.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.duran}
                  alt={blog.duranAltText}
                />
              </picture>
              <figcaption>{blog.duranCaption}</figcaption>
            </figure>
            <p>{blog.houseIn}</p>
            <h3>{blog.otherSitesH3}</h3>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/barberia-de-luis-el-cangrejo-320.webp 320w, /images/elCangrejo/barberia-de-luis-el-cangrejo-480.webp 480w, /images/elCangrejo/barberia-de-luis-el-cangrejo-640.webp 640w, /images/elCangrejo/barberia-de-luis-el-cangrejo-768.webp 768w, /images/elCangrejo/barberia-de-luis-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/barberia-de-luis-el-cangrejo-320.jpg 320w, /images/elCangrejo/barberia-de-luis-el-cangrejo-480.jpg 480w, /images/elCangrejo/barberia-de-luis-el-cangrejo-640.jpg 640w, /images/elCangrejo/barberia-de-luis-el-cangrejo-768.jpg 768w, /images/elCangrejo/barberia-de-luis-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.barber}
                  alt={blog.barberAltText}
                />
              </picture>
              <figcaption>{blog.barberCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/tryp-hotel-el-cangrejo-320.webp 320w, /images/elCangrejo/tryp-hotel-el-cangrejo-480.webp 480w, /images/elCangrejo/tryp-hotel-el-cangrejo-640.webp 640w, /images/elCangrejo/tryp-hotel-el-cangrejo-768.webp 768w, /images/elCangrejo/tryp-hotel-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/tryp-hotel-el-cangrejo-320.jpg 320w, /images/elCangrejo/tryp-hotel-el-cangrejo-480.jpg 480w, /images/elCangrejo/tryp-hotel-el-cangrejo-640.jpg 640w, /images/elCangrejo/tryp-hotel-el-cangrejo-768.jpg 768w, /images/elCangrejo/tryp-hotel-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.tryp}
                  alt={blog.trypAltText}
                />
              </picture>
              <figcaption>{blog.trypCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-coffee-shop-pty-320.webp 320w, /images/elCangrejo/el-coffee-shop-pty-480.webp 480w, /images/elCangrejo/el-coffee-shop-pty-640.webp 640w, /images/elCangrejo/el-coffee-shop-pty-768.webp 768w, /images/elCangrejo/el-coffee-shop-pty.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-coffee-shop-pty-320.jpg 320w, /images/elCangrejo/el-coffee-shop-pty-480.jpg 480w, /images/elCangrejo/el-coffee-shop-pty-640.jpg 640w, /images/elCangrejo/el-coffee-shop-pty-768.jpg 768w, /images/elCangrejo/el-coffee-shop-pty.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.coffee}
                  alt={blog.coffeeAltText}
                />
              </picture>
              <figcaption>{blog.coffeeCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/graffiti-wall-in-el-cangrejo-320.webp 320w, /images/elCangrejo/graffiti-wall-in-el-cangrejo-480.webp 480w, /images/elCangrejo/graffiti-wall-in-el-cangrejo-640.webp 640w, /images/elCangrejo/graffiti-wall-in-el-cangrejo-768.webp 768w, /images/elCangrejo/graffiti-wall-in-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/graffiti-wall-in-el-cangrejo-320.jpg 320w, /images/elCangrejo/graffiti-wall-in-el-cangrejo-480.jpg 480w, /images/elCangrejo/graffiti-wall-in-el-cangrejo-640.jpg 640w, /images/elCangrejo/graffiti-wall-in-el-cangrejo-768.jpg 768w, /images/elCangrejo/graffiti-wall-in-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.graff}
                  alt={blog.graffAltText}
                />
              </picture>
              <figcaption>{blog.graffCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/palm-trees-el-cangrejo-320.webp 320w, /images/elCangrejo/palm-trees-el-cangrejo-480.webp 480w, /images/elCangrejo/palm-trees-el-cangrejo-640.webp 640w, /images/elCangrejo/palm-trees-el-cangrejo-768.webp 768w, /images/elCangrejo/palm-trees-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/palm-trees-el-cangrejo-320.jpg 320w, /images/elCangrejo/palm-trees-el-cangrejo-480.jpg 480w, /images/elCangrejo/palm-trees-el-cangrejo-640.jpg 640w, /images/elCangrejo/palm-trees-el-cangrejo-768.jpg 768w, /images/elCangrejo/palm-trees-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.palm}
                  alt={blog.palmAltText}
                />
              </picture>
              <figcaption>{blog.palmCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/panamanian-motorcycle-club-320.webp 320w, /images/elCangrejo/panamanian-motorcycle-club-480.webp 480w, /images/elCangrejo/panamanian-motorcycle-club-640.webp 640w, /images/elCangrejo/panamanian-motorcycle-club-768.webp 768w, /images/elCangrejo/panamanian-motorcycle-club.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/panamanian-motorcycle-club-320.jpg 320w, /images/elCangrejo/panamanian-motorcycle-club-480.jpg 480w, /images/elCangrejo/panamanian-motorcycle-club-640.jpg 640w, /images/elCangrejo/panamanian-motorcycle-club-768.jpg 768w, /images/elCangrejo/panamanian-motorcycle-club.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.moto}
                  alt={blog.motoAltText}
                />
              </picture>
              <figcaption>{blog.motoCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-life-320.webp 320w, /images/elCangrejo/el-cangrejo-life-480.webp 480w, /images/elCangrejo/el-cangrejo-life-640.webp 640w, /images/elCangrejo/el-cangrejo-life-768.webp 768w, /images/elCangrejo/el-cangrejo-life.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-life-320.jpg 320w, /images/elCangrejo/el-cangrejo-life-480.jpg 480w, /images/elCangrejo/el-cangrejo-life-640.jpg 640w, /images/elCangrejo/el-cangrejo-life-768.jpg 768w, /images/elCangrejo/el-cangrejo-life.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.life}
                  alt={blog.lifeAltText}
                />
              </picture>
              <figcaption>{blog.lifeCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/street-performer-el-cangrejo-320.webp 320w, /images/elCangrejo/street-performer-el-cangrejo-480.webp 480w, /images/elCangrejo/street-performer-el-cangrejo-640.webp 640w, /images/elCangrejo/street-performer-el-cangrejo-768.webp 768w, /images/elCangrejo/street-performer-el-cangrejo.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/street-performer-el-cangrejo-320.jpg 320w, /images/elCangrejo/street-performer-el-cangrejo-480.jpg 480w, /images/elCangrejo/street-performer-el-cangrejo-640.jpg 640w, /images/elCangrejo/street-performer-el-cangrejo-768.jpg 768w, /images/elCangrejo/street-performer-el-cangrejo.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.street}
                  alt={blog.streetAltText}
                />
              </picture>
              <figcaption>{blog.streetCaption}</figcaption>
            </figure>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-view-320.webp 320w, /images/elCangrejo/el-cangrejo-view-480.webp 480w, /images/elCangrejo/el-cangrejo-view-640.webp 640w, /images/elCangrejo/el-cangrejo-view-768.webp 768w, /images/elCangrejo/el-cangrejo-view.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-view-320.jpg 320w, /images/elCangrejo/el-cangrejo-view-480.jpg 480w, /images/elCangrejo/el-cangrejo-view-640.jpg 640w, /images/elCangrejo/el-cangrejo-view-768.jpg 768w, /images/elCangrejo/el-cangrejo-view.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.view}
                  alt={blog.viewAltText}
                />
              </picture>
              <figcaption>{blog.viewCaption}</figcaption>
            </figure>
            <figure className="last-figure">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-panama-320.webp 320w, /images/elCangrejo/el-cangrejo-panama-480.webp 480w, /images/elCangrejo/el-cangrejo-panama-640.webp 640w, /images/elCangrejo/el-cangrejo-panama-768.webp 768w, /images/elCangrejo/el-cangrejo-panama.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/elCangrejo/el-cangrejo-panama-320.jpg 320w, /images/elCangrejo/el-cangrejo-panama-480.jpg 480w, /images/elCangrejo/el-cangrejo-panama-640.jpg 640w, /images/elCangrejo/el-cangrejo-panama-768.jpg 768w, /images/elCangrejo/el-cangrejo-panama.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.arch}
                  alt={blog.archAltText}
                />
              </picture>
              <figcaption>{blog.archCaption}</figcaption>
            </figure>
            <div className="button-parent">
              <button
                title="How do I get around in Panama?"
                onClick={goToTransportationStory}
              >
                &#60;
              </button>
              <button
                title="What languages are spoken in Panama?"
                onClick={goToSpanishStory}
              >
                &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
  if (document.title === "What languages are spoken in Panama?") {
    return (
      <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}</div>}
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
                hashtags={["pickuppanama", "spanish", "language", "panama"]}
                title={"What languages are spoken in Panama?"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"What languages are spoken in Panama?"}
                summary={
                  "Learn about the spoken Spanish of Panama and why Spanish is important to learn."
                }
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"What language is spoken in Panama?"}
                body={`Learn about the spoken Spanish of Panama and why Spanish is important to learn.`}
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
                    "/images/spanish/th-panama-products-320.webp 320w, /images/spanish/th-panama-products-480.webp 480w, /images/spanish/th-panama-products-640.webp 640w, /images/spanish/th-panama-products-768.webp 768w, /images/spanish/panama-products.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/th-panama-products-320.jpg 320w, /images/spanish/th-panama-products-480.jpg 480w, /images/spanish/th-panama-products-640.jpg 640w, /images/spanish/th-panama-products-768.jpg 768w, /images/spanish/panama-products.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  fetchpriority="high"
                  className="no-right-click"
                  src={blog.panProducts}
                  alt={blog.prodAltText}
                />
              </picture>
              <figcaption>{blog.prodCaption}</figcaption>
            </figure>
            <p>{blog.about15}</p>
            <p>{blog.althoughFlu}</p>
            <h2>{blog.whatRoleh2}</h2>
            <p>
              <span className="six-hundred">{blog.busEconSpan}</span>{" "}
              {blog.busEcon}
            </p>
            <p>
              <span className="six-hundred">{blog.tourismSpan}</span>{" "}
              {blog.tourism}
            </p>
            <p>
              <span className="six-hundred">{blog.eduSpan}</span> {blog.educat}
            </p>
            <figure className="school">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/roberto-eisenmann-bilingual-school-320.webp 320w, /images/spanish/roberto-eisenmann-bilingual-school-480.webp 480w, /images/spanish/roberto-eisenmann-bilingual-school-640.webp 640w, /images/spanish/roberto-eisenmann-bilingual-school-768.webp 768w, /images/spanish/roberto-eisenmann-bilingual-school.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/roberto-eisenmann-bilingual-school-320.jpg 320w, /images/spanish/roberto-eisenmann-bilingual-school-480.jpg 480w, /images/spanish/roberto-eisenmann-bilingual-school-640.jpg 640w, /images/spanish/roberto-eisenmann-bilingual-school-768.jpg 768w, /images/spanish/roberto-eisenmann-bilingual-school.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.school}
                  alt={blog.schoolAltText}
                />
              </picture>
              <figcaption>{blog.schoolCaption}</figcaption>
            </figure>
            <p>
              <span className="six-hundred">{blog.irSpan}</span>{" "}
              {blog.internRelations}
            </p>
            <p>
              <span className="six-hundred">{blog.techSciSpan}</span>{" "}
              {blog.techSci}
            </p>
            <p>
              <span className="six-hundred">{blog.expatSpan}</span>{" "}
              {blog.expatComm}
            </p>
            <p>
              <span className="six-hundred">{blog.mediaSpan}</span>{" "}
              {blog.mediaEnt}
            </p>
            <h2>{blog.whyImpH2}</h2>
            <p>{blog.inRemote}</p>
            <p>{blog.learningSpanish}</p>
            <p>{blog.makingEffort}</p>
            <p>{blog.evenIf}</p>
            <p>{blog.nativeSpeakers}</p>
            <h2>{blog.whatAreSomeH2}</h2>
            <p>{blog.learnBasic}</p>
            <h3>{blog.greetingsH3}</h3>
            <ul>
              <li>{blog.liBD}</li>
              <li>{blog.liBT}</li>
              <li>{blog.liBN}</li>
              <li>{blog.liCE}</li>
              <li>{blog.liQT}</li>
              <li>{blog.liCV}</li>
              <li>{blog.MG}</li>
              <li>{blog.hastaL}</li>
              <li>{blog.hastP}</li>
              <li>{blog.nV}</li>
            </ul>
            <h3>{blog.courtesiesH3}</h3>
            <ul>
              <li>{blog.porFli}</li>
              <li>{blog.gracias}</li>
              <li>{blog.muchasG}</li>
              <li>{blog.deNada}</li>
              <li>{blog.conPer}</li>
              <li>{blog.disCulpa}</li>
              <li>{blog.loSiento}</li>
            </ul>
            <h3>{blog.politeReq}</h3>
            <ul>
              <li>{blog.podAy}</li>
              <li>{blog.podDec}</li>
              <li>{blog.meGusSab}</li>
              <li>{blog.serPos}</li>
              <li>{blog.meGusPed}</li>
              <li>{blog.podTraer}</li>
              <li>{blog.podAssist}</li>
              <li>{blog.necisAy}</li>
              <li>{blog.leImp}</li>
              <li>{blog.meGusPre}</li>
            </ul>
            <h3>{blog.basicQuesH3}</h3>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/ordering-food-panama-320.webp 320w, /images/spanish/ordering-food-panama-480.webp 480w, /images/spanish/ordering-food-panama-640.webp 640w, /images/spanish/ordering-food-panama-768.webp 768w, /images/spanish/ordering-food-panama.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/ordering-food-panama-320.jpg 320w, /images/spanish/ordering-food-panama-480.jpg 480w, /images/spanish/ordering-food-panama-640.jpg 640w, /images/spanish/ordering-food-panama-768.jpg 768w, /images/spanish/ordering-food-panama.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.orderFood}
                  alt={blog.orderAltText}
                />
              </picture>
              <figcaption>{blog.orderCaption}</figcaption>
            </figure>
            <ul>
              <li>{blog.cuantoCue}</li>
              <li>{blog.estasFila}</li>
              <li>{blog.nosPuedeDar}</li>
              <li>{blog.tomareAg}</li>
              <li>{blog.deliciosa}</li>
              <li>{blog.laCarna}</li>
              <li>{blog.sinCeb}</li>
              <li>{blog.puedoCambi}</li>
              <li>{blog.sinSal}</li>
              <li>{blog.estoPlato}</li>
              <li>{blog.soyAler}</li>
            </ul>
            <h3>{blog.askingH3}</h3>
            <figure className="alto">
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/panama-stop-sign-320.webp 320w, /images/spanish/panama-stop-sign-480.webp 480w, /images/spanish/panama-stop-sign-640.webp 640w, /images/spanish/panama-stop-sign-768.webp 768w, /images/spanish/panama-stop-sign.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/panama-stop-sign-320.jpg 320w, /images/spanish/panama-stop-sign-480.jpg 480w, /images/spanish/panama-stop-sign-640.jpg 640w, /images/spanish/panama-stop-sign-768.jpg 768w, /images/spanish/panama-stop-sign.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.alto}
                  alt={blog.altoAltText}
                />
              </picture>
              <figcaption>{blog.altoCaption}</figcaption>
            </figure>
            <ul>
              <li>{blog.dondeEst}</li>
              <li>{blog.comoLlego}</li>
              <li>{blog.puedeInd}</li>
              <li>{blog.estoyYendo}</li>
              <li>{blog.hayAlgun}</li>
              <li>{blog.dondeQue}</li>
            </ul>
            <h3>{blog.givingDirectH3}</h3>
            <ul>
              <li>{blog.giraD}</li>
              <li>{blog.giraL}</li>
              <li>{blog.goStraight}</li>
              <li>{blog.estaEsqu}</li>
              <li>{blog.tomaLa}</li>
              <li>{blog.sigaDerecho}</li>
            </ul>
            <h3>{blog.erPhrasesH3}</h3>
            <ul>
              <li>{blog.ayudaLi}</li>
              <li>{blog.llamaAmb}</li>
              <li>{blog.llamaPol}</li>
              <li>{blog.aux}</li>
              <li>{blog.perdido}</li>
              <li>{blog.fuego}</li>
              <li>{blog.necInt}</li>
            </ul>
            <h2>{blog.panamaSpanishH2}</h2>
            <p>{blog.panamaSpanishIs}</p>
            <p>{blog.hasAVariety}</p>
            <p>{blog.dependingOn}</p>
            <p>{blog.whenCoronado}</p>
            <p>{blog.thisIsKnown}</p>
            <p>{blog.buenaBuena}</p>
            <h3>{blog.slangDielects}</h3>
            <p>{blog.hereAreSome}</p>
            <ul>
              <li>{blog.laChiva}</li>
              <li>{blog.chuzo}</li>
              <li>{blog.patacon}</li>
              <li>{blog.chamba}</li>
              <li>{blog.jama}</li>
              <li>{blog.plena}</li>
              <li>{blog.cubetazo}</li>
              <li>{blog.chevere}</li>
              <li>{blog.queXop}</li>
              <li>{blog.AquiTran}</li>
            </ul>
            <p>{blog.inAddition}</p>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/indigenous-panamanians-320.webp 320w, /images/spanish/indigenous-panamanians-480.webp 480w, /images/spanish/indigenous-panamanians-640.webp 640w, /images/spanish/indigenous-panamanians-768.webp 768w, /images/spanish/indigenous-panamanians.webp 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <source
                  type="image/jpg"
                  srcSet={
                    process.env.PUBLIC_URL +
                    "/images/spanish/indigenous-panamanians-320.jpg 320w, /images/spanish/indigenous-panamanians-480.jpg 480w, /images/spanish/indigenous-panamanians-640.jpg 640w, /images/spanish/indigenous-panamanians-768.jpg 768w, /images/spanish/indigenous-panamanians.jpg 1170w"
                  }
                  sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
                />
                <img
                  className="no-right-click"
                  src={blog.indigenous}
                  alt={blog.indigenousAltText}
                />
              </picture>
              <figcaption>{blog.indigenousCaption}</figcaption>
            </figure>
            <h2>{blog.howCanLearnH2}</h2>
            <ul>
              <li>{blog.watchMov}</li>
              <li>{blog.useApps}</li>
              <li>{blog.findExchange}</li>
              <li>{blog.createFlash}</li>
              <li>{blog.readSpanish}</li>
              <li>{blog.pracitceDaily}</li>
            </ul>
            <h3>{blog.languageTransferH3}</h3>
            <p>
              {blog.languageTransfer}
              <span>
                {" "}
                <a
                  className="link"
                  target="_blank"
                  href="https://www.languagetransfer.org"
                  rel="noopener noreferrer"
                  aria-label="language trnasfer"
                >
                  {blog.langTrSpan}
                </a>
                {blog.period}
              </span>
            </p>
            <p>{blog.someonePanama}</p>
            <p>{blog.willBenefit}</p>
            <p>{blog.noMem}</p>
            <p>{blog.theLearner}</p>
            <p>{blog.itsAbout}</p>
            <p>{blog.moreImp}</p>
            <p>{blog.ifYouAre}</p>
            <p>{blog.overall}</p>

            <div className="button-parent">
              <button
                title="Things to do in El Cangrejo"
                onClick={goToElCangrejoStory}
              >
                &#60;
              </button>
              <button
                title="What are the cultural norms of Panama?"
                onClick={goToCulturalNorms}
              >
                &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  } 
  if (document.title === "What are the cultural norms of Panama?") {
    return (
      <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}</div>}
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
            <div className="body intro">
              <p>{blog.intro}</p>
              <p>{blog.byFamiliz}</p>
              </div>
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
                hashtags={["pickuppanama", "cultural norms", "etiquette", "panama"]}
                title={"What are the cultural norms of Panama?"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"What are the cultural norms of Panama?"}
                summary={
                  "Learn the cultural norms of Panama and successfully navigate social interactions."
                }
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"What are the cultural norms of Panama?"}
                body={`Learn the cultural norms of Panama and successfully navigate social interactions.`}
                aria-label="email"
                separator={" "}
              >
                <EmailIcon size={35} />
              </EmailShareButton>
            </div>
            <h2>{blog.hereAre}</h2>
            <p><span className="six-hundred">{blog.repectSpan}</span> {blog.panCult}</p>
            <p><span className="six-hundred">{blog.frienSpan}</span> {blog.panamAre}</p>
            <p><span className="six-hundred">{blog.greet}</span> {blog.itIsCusto}<strong>{blog.strongGreet}</strong>{blog.ifYouAre}</p>
            <p>{blog.whenMeeting}</p>
            <p><span className="six-hundred">{blog.famBondsSpan}</span> {blog.panSoc}</p>
            <p><span className="six-hundred">{blog.relInfluSpan}</span> {blog.mostPan}</p>
            <p><span className="six-hundred">{blog.paceSpan}</span> {blog.punctual}</p>
            <p>{blog.panamaOperates}</p>
            <p><span className="six-hundred">{blog.personSpaceSpan}</span> {blog.panaVal}</p>
            <p><span className="six-hundred">{blog.etiquetteSpan}</span> {blog.tableManners}</p>
            <p><span className="six-hundred">{blog.useTitles}</span> {blog.usingFormal}</p>
            <p><span className="six-hundred">{blog.communicationSpan}</span> {blog.inOrder}</p>
            <p><span className="six-hundred">{blog.casConvSpan}</span> {blog.casConv}</p>
            <p><span className="six-hundred">{blog.foodSharingSp}</span> {blog.sharingFood}</p>
            <p><span className="six-hundred">{blog.celebrFestSP}</span> {blog.boasts}</p>
            <h2>{blog.fauxPasH2}</h2>
            <p><span className="six-hundred">{blog.discusSpan}</span> {blog.avoid}</p>
            <p><span className="six-hundred">{blog.usnsolicitedSpan}</span> {blog.givingUnsol}</p>
            <p><span className="six-hundred">{blog.wastingFoodSpan}</span> {blog.theCultur}</p>
            <p><span className="six-hundred">{blog.speakingLoudSpan}</span> {blog.panaPlace}</p>
            <p><span className="six-hundred">{blog.notOffeing}</span> {blog.givingHelp}</p>
            <p><span className="six-hundred">{blog.ignoringGreetings}</span> {blog.greetingsAre}</p>
            <h2>{blog.doTipH2}</h2>
            <p>{blog.whileTipp}</p>
            <p><span className="six-hundred">{blog.restSpan}</span> {blog.itNormal}</p>
            <p><span className="six-hundred">{blog.barsSpan}</span> {blog.tipAtBars}</p>
            <p><span className="six-hundred">{blog.hotels}</span> {blog.tippingHotel}</p>
            <p><span className="six-hundred">{blog.taxisSpan}</span> {blog.tippingTaxi}</p>
            <p><span className="six-hundred">{blog.tourGuidesSpan}</span> {blog.ifYouGo}</p>
            <p><span className="six-hundred">{blog.otherServicesSpan}</span> {blog.inGeneral}</p>
            <h2>{blog.dressCodeH2}</h2>
            <p>{blog.dressCodeVary}</p>
            <p><span className="six-hundred">{blog.casualSpan}</span> {blog.menDress}</p>
            <p>{blog.duringFormal}</p>
            <p>{blog.forWomen}</p>
            <p><span className="six-hundred">{blog.beachWearSpan}</span> {blog.ifVisiting}</p>
            <p>{blog.womenWear}</p>
            <p>{blog.sunscreen}</p>
            <h3>{blog.dressCodeH3}</h3>
            <p>{blog.disregarding}</p>
            <ul>
              <li>{blog.menMustLi}</li>
              <li>{blog.womenShould}</li>
              <li>{blog.noBare}</li>
              <li>{blog.noT}</li>
              <li>{blog.shoesMust}</li>
            </ul>
            <h2>{blog.miscilLawsH3}</h2>
            <ul>
              <li>{blog.drinkingLi}</li>
              <li>{blog.beachAttire}</li>
              <li>{blog.shirts}</li>
              <li>{blog.driving}</li>
            </ul>
            <p>{blog.understanding}</p>
            <div className="button-parent">
              <button
                title="What languages are spoken in Panama?"
                onClick={goToSpanishStory}
              >
                &#60;
              </button>
              <button
                title="Traditional food in Panama"
                onClick={goToFood}
              >
                &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }
  if (document.title === "Traditional food in Panama") {
    return (
      <main id="main-element" className={`blog-details margin `}>
        {isPending && <div>Loading...</div>}
        {error && <div className="load-error">{error}</div>}
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
            <div className="body intro">
              <p>{blog.intro}</p>
              <p>{blog.thisArticle}</p>
              </div>
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
                hashtags={["pickuppanama", "food", "cuisine", "panama"]}
                title={"Traditional food in Panama"}
                aria-label="twitter"
              >
                <TwitterIcon size={35} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentPageUrl}
                title={"Traditional food in Panama"}
                summary={
                  "Find out about Panamanian food dishes, the best food in Panama City and how to eat on a budget."
                }
                aria-label="linkedin"
              >
                <LinkedinIcon size={35} />
              </LinkedinShareButton>
              <EmailShareButton
                url={currentPageUrl}
                subject={"Traditional food in Panama"}
                body={`Find out about Panamanian food dishes, the best food in Panama City and how to eat on a budget.`}
                aria-label="email"
                separator={" "}
              >
                <EmailIcon size={35} />
              </EmailShareButton>
            </div>

            <h2>{blog.panFoodH2}</h2>
            <p><span className="six-hundred">{blog.sanocSpan}</span> {blog.thisPanNational}</p>
            <p><span className="six-hundred">{blog.arrozConSpan}</span> {blog.aTradition}</p>
            <p><span className="six-hundred">{blog.cevSpan}</span> {blog.panaVers}</p>
            <p><span className="six-hundred">{blog.pataSpan}</span> {blog.friedGreen}</p>
            <p><span className="six-hundred">{blog.carimSpan}</span> {blog.theseAre}</p>
            <p><span className="six-hundred">{blog.ropaViSpan}</span> {blog.aDish}</p>
            <p><span className="six-hundred">{blog.tamalesSp}</span> {blog.panTam}</p>
            <p><span className="six-hundred">{blog.bollosSpan}</span> {blog.cornDough}</p>
            <p><span className="six-hundred">{blog.yucaSpan}</span> {blog.yuca}</p>
            <p><span className="six-hundred">{blog.chichemeSpan}</span> {blog.aSweet}</p>
            <p><span className="six-hundred">{blog.secoSpan}</span> {blog.aChicken}</p>
            <p><span className="six-hundred">{blog.ensaladSpan}</span> {blog.aFestive}</p>
            <h2>{blog.tropFruitsH2}</h2>
            <p>{blog.panamaClimate}</p>
            <p><span className="six-hundred">{blog.guavaSpan}</span> {blog.thisFruit}</p>
            <p><span className="six-hundred">{blog.pinaSpan}</span> {blog.PanamaProd}</p>
            <p><span className="six-hundred">{blog.papaySpan}</span> {blog.papThrive}</p>
            <p><span className="six-hundred">{blog.mangoSpan}</span> {blog.panamOffers}</p>
            <p><span className="six-hundred">{blog.bananSp}</span> {blog.banPlan}</p>
            <p><span className="six-hundred">{blog.cocoSp}</span> {blog.cocoGrow}</p>
            <p><span className="six-hundred">{blog.starSpan}</span> {blog.starFr}</p>
            <p><span className="six-hundred">{blog.passionSpan}</span> {blog.thisTang}</p>
            <p><span className="six-hundred">{blog.sourSopSp}</span> {blog.sourSop}</p>
            <p><span className="six-hundred">{blog.cashfrSp}</span> {blog.cashNuts}</p>
            <h2>{blog.desertsH2}</h2>
            <p>{blog.enjoySome}</p>

            <p><span className="six-hundred">{blog.tresLechSp}</span> {blog.thisIs}</p>
            <p><span className="six-hundred">{blog.dulceTamSp}</span> {blog.tamarindCan}</p>
            <p><span className="six-hundred">{blog.hojaSp}</span> {blog.theseArePan}</p>
            <p><span className="six-hundred">{blog.arrozConSp}</span> {blog.thisIsA}</p>
            <p><span className="six-hundred">{blog.cocadesSp}</span> {blog.theseAreCo}</p>
            <p><span className="six-hundred">{blog.chichSp}</span> {blog.chichIs}</p>
            <h2>{blog.panamaDrinksH2}</h2>
            <p>{blog.theseDrinks}</p>
            <p><span className="six-hundred">{blog.secoHerranoSp}</span> {blog.thisIsPan}</p>
            <p><span className="six-hundred">{blog.chichaSpan}</span> {blog.riceBased}</p>
            <p><span className="six-hundred">{blog.ronPSpan}</span> {blog.ronPonche}</p>
            <p><span className="six-hundred">{blog.refrescNat}</span> {blog.panamaIs}</p>
            <p><span className="six-hundred">{blog.cafeConSpan}</span> {blog.coffeeIs}</p>
            <p><span className="six-hundred">{blog.pipaFriSp}</span> {blog.pipa}</p>
            <h2>{blog.foodHealthH2}</h2>
            <p>{blog.foodHeealthPara}</p>
            <p>{blog.foodEstabl}</p>
            <p>{blog.someAre}</p>
            <p><span className="six-hundred">{blog.ministrySpan}</span> {blog.theMin}</p>
            <p><span className="six-hundred">{blog.panFoodSafeSp}</span> {blog.aupsa}</p>
            <p><span className="six-hundred">{blog.nationalFoodSp}</span> {blog.senIs}</p>
            <p><span className="six-hundred">{blog.panInSp}</span> {blog.idiap}</p>
            <p><span className="six-hundred">{blog.foodAn}</span> {blog.panaFood}</p>
            <h2>{blog.americanFood}</h2>
            <p>{blog.yes}</p>
            <p>{blog.someOf}</p>
            <p><span className="six-hundred">{blog.fastFoodSp}</span> {blog.majorFast}</p>
            <p><span className="six-hundred">{blog.casualDining}</span> {blog.thereAreCas}</p>
            <p><span className="six-hundred">{blog.steakHouse}</span> {blog.amerStyle}</p>
            <p><span className="six-hundred">{blog.intChains}</span> {blog.panaCity}</p>
            <p><span className="six-hundred">{blog.sportsBars}</span> {blog.sports}</p>
            <h2>{blog.howEatH2}</h2>
            <h3>{blog.fondaH3}</h3>
            <p>{blog.fondaRefers}</p>
            <p>{blog.theseEst}</p>
            <p>{blog.theChoices}</p>
            <p>{blog.thisIsAgreat}</p>
            <p>{blog.theMenu}</p>
            <p>{blog.atmosphere}</p>
            <p>{blog.importRole}</p>
            <h2>{blog.otherTips}</h2>
            <h3>{blog.streeVenH2}</h3>
            <p>{blog.streeFood}</p>
            <p>{blog.theseVen}</p>
            <p>{blog.popularInc}</p>
            <p><span className="six-hundred">{blog.empSpan}</span> {blog.theseAreSav}</p>
            <p><span className="six-hundred">{blog.carimanSpan}</span> {blog.similarTo}</p>
            <p><span className="six-hundred">{blog.tamalesSpan}</span> {blog.tamalesAre}</p>
            <p><span className="six-hundred">{blog.cevSpanV}</span> {blog.cev}</p>
            <p><span className="six-hundred">{blog.fruitCupSpan}</span> {blog.freshTropical}</p>
            <p><span className="six-hundred">{blog.chichSpan}</span> {blog.theseAreCrisp}</p>
            <p><span className="six-hundred">{blog.raspeoSpan}</span> {blog.raspOr}</p>
            <p><span className="six-hundred">{blog.plantSp}</span> {blog.plantAre}</p>
            <h3>{blog.menuDel}</h3>
            <p>{blog.manyRest}</p> 
            <h3>{blog.localMarkets}</h3>
            <p>{blog.visitLocal}</p>
            <h3>{blog.cook}</h3>
            <p>{blog.ifYouHave}</p>
            <h3>{blog.shareH3}</h3>
            <p>{blog.shareMeals}</p>
            <h3>{blog.avoidH3}</h3>
            <p>{blog.avoidTourist}</p>
            <h3>{blog.byob}</h3>
            <p>{blog.someAllow}</p>
            <h2>{blog.VeganOptions}</h2>
            <p>{blog.hereAre}</p>
            <p><span className="six-hundred">{blog.veganOSpan}</span> {blog.thisVegan}</p>
            <p><span className="six-hundred">{blog.vegSuSpan}</span> {blog.allDishes}</p>
            <p><span className="six-hundred">{blog.veganShackSpan}</span> {blog.fullyVeg}</p>
            <p><span className="six-hundred">{blog.placeSpan}</span> {blog.veganCafe}</p>



            






            {/* <p>{blog.summary}</p> */}








 









           
            <div className="button-parent">
              <button
                title="What are the cultural norms of Panama?"
                onClick={goToCulturalNorms}
              >
                &#60;
              </button>
              <button
                title="How Do I Visit the Panama Canal?"
                onClick={goToCanalStory}
              >
                &#62;
              </button>
            </div>
          </section>
        )}
      </main>
    );
  }


else {
    return (
      <main id="main-element" className="not-found">
        <figure className="not-found-hero">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/notFound/missing-meal-320.webp 320w, /images/notFound/missing-meal-640.webp 640w, /images/notFound/missing-meal.webp 1017w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 1017px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/notFound/missing-meal-320.jpg 320w, /images/notFound/missing-meal-640.jpg 640w, /images/notFound/missing-meal.jpg 1017w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 1017px"
            />
            <img
              fetchpriority="high"
              className="no-right-click"
              src={process.env.PUBLIC_URL + "/images/notFound/missing-meal.jpg"}
              alt="Villa Mayte Coronado Panama"
            />
          </picture>
          <figcaption className="fig-caption">
            Taken at Delicias Margot in Coronado Panama.
          </figcaption>
        </figure>
        <section className="centered">
          <h1>404</h1>
          <p>This page is missing.</p>
          <Link to="/">Back to the home page...</Link>
        </section>
      </main>
    );
  }
};

export default BlogDetails;
