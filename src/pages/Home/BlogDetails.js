import { useParams } from "react-router-dom";
import useFetch from '../../useFetch';
import "./BlogDetails.css";
import { TabTitle, Capitalize } from '../../utils/GeneralFunctions';


const BlogDetails = () => {
 //using the useParams hook to grab values (route params) from current url (route)
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    
    TabTitle(id.charAt(0).toUpperCase()+id.slice(1).split('-').join(' '));
    Capitalize();
    if (document.title === 'Is Panama Safe?') {
        return (
            <main className={`blog-details margin `}>
                { isPending && <div>Loading...</div> } 
                { error && <div>{ error }</div> }
                { blog && (
                    <section className={blog.className}>
                         <div className="line-divider centered wide">
                            <p className="diamond-text-box date">
                            <span className="left"></span>
                            <span className="content caps centered">{ blog.date }</span>
                            <span className="right"></span>
                            </p>
                         </div>
                        <h1 className="centered caps">{ blog.title }</h1>
                        <p className="body intro">
                            { blog.intro }
                        </p>
                        <p className="body-two">
                            { blog.moderateCrime }
                        </p>
                        <p className="body-two-a">
                            { blog.despiteThis }
                        </p>
                        <figure className="cops-at-fruitstand">
                            <img className="no-right-click" src={blog.copsAtFruitStand} alt={blog.fruitStandCopAltText}/>
                            <figcaption>{blog.fruitStandCopCaption}</figcaption>
                        </figure>
                        <section>
                            <h2>{ blog.h2targets }</h2>
                            <p>{ blog.criteria }</p>
                            <h3>{ blog.h3alone }</h3>
                            <p>{ blog.commonTarget }</p>
                            <p>{ blog.Oftentimes }</p>
                            <h3>{ blog.unsurePeople }</h3>
                            <p>{ blog.bodyLanguage }</p>
                            <p>{ blog.ifAble }</p>
                            <p>{ blog.goingAroundCorners }</p>
                            <p>{ blog.muggersMoveIn }</p>
                            <p>{ blog.takeNote }</p>
                            <p>{ blog.whenYouEnter }</p>
                            <h3>{ blog.h3wealth }</h3>
                            <p>{ blog.cuffLinks }</p>
                            <p>{ blog.makeEffort }</p>
                            <p>{ blog.ensureThat }</p>
                            <h2>{ blog.h2whatToDo }</h2>
                            <p>{ blog.ifMugged }</p>
                            <p>{ blog.manyMuggers }</p>
                            <p>{ blog.dummyWallet }</p>
                            <h2>{ blog.h2HighCrime }</h2>
                            <p>{ blog.accordingTo }</p>
                            <ul>
                                <li>{ blog.sanMiguelito}</li>
                                <li>{ blog.rioAbajo}</li>
                                <li>{ blog.elChorrillo}</li>
                                <li>{ blog.santaAna}</li>
                                <li>{ blog.panamaViejo}</li>
                            </ul>
                            <p>{ blog.mostCrimeReported }</p>
                            <p>{ blog.duringDay }</p>
                            <figure className="casco-police">
                            <img className="no-right-click" src={blog.cascoViejoPolice} alt={blog.cascoViejoPolceAltText}/>
                            <figcaption>{blog.cascoViejoPoliceCaption}</figcaption>
                            </figure>
                            <p>{ blog.cascoViejoBorders }</p>
                            <figure className="near-casco">
                            <img className="no-right-click" src={blog.nearCascoViejo} alt={blog.nearCascoViejoAltText}/>
                            <figcaption>{blog.nearCascoViejoCaption}</figcaption>
                            </figure>
                            <p>{ blog.iAdviseAgainst }</p>
                            <h3>{ blog.h3Colon }</h3>
                            <p>{ blog.colonIsOn }</p>
                            <h3>{ blog.darianGap }</h3>
                            <p>{ blog.nearColumbianBorder }</p>
                            <p>{ blog.difficultToNavigate }</p>
                            <p>{ blog.adventureTourist }</p>
                            <h2>{ blog.h2SafeWater }</h2>
                            <p>{ blog.hygieneStandards }</p>
                            <p>{ blog.hepatitisA }</p>
                            <p>{ blog.playItSafe }</p>
                            <h2>{ blog.h2Insects }</h2>
                            <p>{ blog.panamaDoesHave }</p>
                            <h2>{ blog.h2Tips }</h2>
                            <ul>
                                <li>{ blog.shareItinerary }</li>
                                <li>{ blog.beforeLeavingHotel }</li>
                                <li>{ blog.smartTraveler }</li>
                                <li>{ blog.moneyBelt }</li>
                                <li>{ blog.differentPockets }</li>
                                <li>{ blog.rubberBand }</li>
                                <li>{ blog.mentalChecklist }</li>
                                <li>{ blog.beGuarded }</li>
                                <li>{ blog.neverLeave }</li>
                                <li>{ blog.beMindful }</li>
                                <li>{ blog.commotion }</li>
                                <li>{ blog.takeLookBack }</li>
                                <li>{ blog.checkIn }</li>
                                <li>{ blog.emergencyNum }</li>
                                <li>{ blog.insurance }</li>
                                <li>{ blog.phrases }</li>
                                <li>{ blog.copyPassport }</li>
                                <li>{ blog.avoidWalking }</li>
                                <li>{ blog.clubbing }</li>
                                <li>{ blog.parkWellLit }</li>
                            </ul>
                            <p>{ blog.overallPanamaIs }</p>
                            <p>{ blog.mostTips }</p>
                        </section>
                    </section>
                )}
            </main>
    );
} if (document.title === 'How do I get Around in Panama?') {

    return(
        <main className={`blog-details margin `}>
                { isPending && <div>Loading...</div> } 
                { error && <div>{ error }</div> }
                { blog && (
                    <section className={blog.className}>
                         <div className="line-divider centered wide">
                            <p className="diamond-text-box date">
                            <span className="left"></span>
                            <span className="content caps centered">{ blog.date }</span>
                            <span className="right"></span>
                            </p>
                         </div>
                        <h1 className="centered caps">{ blog.title }</h1>
                        <p className="body intro">
                            { blog.body }
                        </p>
                        <p className="body-two">
                            { blog.bodyTwo }
                        </p>
                        <p className="body-two-a">
                            { blog.bodyTwoA }
                        </p>
                        <figure>
                            <img className="no-right-click" src={blog.imageTwo} alt={blog.altTwo}/>
                            <figcaption>{blog.figcaptionTwo}</figcaption>
                        </figure>
                    </section>
                )}
            </main>
        )
    }  if (document.title === 'What are Molas?') {
        return(
            <main className={`blog-details margin `}>
                { isPending && <div>Loading...</div> } 
                { error && <div>{ error }</div> }
                { blog && (
                    <section className={blog.className}>
                         <div className="line-divider centered wide">
                            <p className="diamond-text-box date">
                            <span className="left"></span>
                            <span className="content caps centered">{ blog.date }</span>
                            <span className="right"></span>
                            </p>
                         </div>
                        <h1 className="centered caps">{ blog.title }</h1>
                        <p className="body intro">
                            { blog.body }
                        </p>
                        <p className="body-two">
                            { blog.bodyTwo }
                        </p>
                        <p className="body-two-a">
                            { blog.bodyTwoA }
                        </p>
                        <figure>
                            <img className="no-right-click" src={blog.imageTwo} alt={blog.altTwo}/>
                            <figcaption>{blog.figcaptionTwo}</figcaption>
                        </figure>
                    </section>
                )}
            </main>
        )
    }
}

export default BlogDetails;