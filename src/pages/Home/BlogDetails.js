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

    if (document.title == 'Is Panama Safe?') {
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
                        <section>
                            <h2>{ blog.h2 }</h2>
                            <p>{ blog.bodyThree }</p>
                            <h3>{ blog.h3 }</h3>
                            <p>{ blog.bodyFour }</p>
                            <p>{ blog.bodyFourA }</p>
                            <h3>{ blog.h3One }</h3>
                            <p>{ blog.bodyFive }</p>
                            <p>{ blog.bodySix }</p>
                            <p>{ blog.bodySeven }</p>
                            <p>{ blog.bodyEight }</p>
                            <p>{ blog.bodyNine }</p>
                            <p>{ blog.bodyTen }</p>
                            <h3>{ blog.h3Two }</h3>
                            <p>{ blog.bodyEleven }</p>
                            <p>{ blog.bodyTwelve }</p>
                            <p>{ blog.bodyThirteen }</p>
                            <h2>{ blog.h2One }</h2>
                            <p>{ blog.bodyFourteen }</p>
                            <p>{ blog.bodyFifteen }</p>
                            <p>{ blog.bodySixteen }</p>
                            <h2>{ blog.h2Two }</h2>
                            <p>{ blog.bodySeventeen }</p>
                            <ul>
                                <li>{ blog.listItemA}</li>
                                <li>{ blog.listItemB}</li>
                                <li>{ blog.listItemC}</li>
                            </ul>
                            <p>{ blog.bodyEighteen }</p>
                            <p>{ blog.bodyNineteen }</p>
                            <p>{ blog.bodyTwenty }</p>
                            <h3>{ blog.h3Three }</h3>
                            <p>{ blog.bodyTwentyOne }</p>
                            <h3>{ blog.h3Four }</h3>
                            <p>{ blog.bodyTwentyTwo }</p>
                            <p>{ blog.bodyTwentyThree }</p>
                            <h2>{ blog.h2Three }</h2>
                            <p>{ blog.bodyTwentyFour }</p>
                            <p>{ blog.bodyTwentyFive }</p>
                            <p>{ blog.bodyTwentySix }</p>
                            <h2>{ blog.h2Four }</h2>
                            <p>{ blog.bodyTwentySeven }</p>
                            <h2>{ blog.h2Five }</h2>
                            <ul>
                                <li>{ blog.listItemD}</li>
                                <li>{ blog.listItemE}</li>
                                <li>{ blog.listItemF}</li>
                                <li>{ blog.listItemG}</li>
                                <li>{ blog.listItemH}</li>
                                <li>{ blog.listItemI}</li>
                                <li>{ blog.listItemJ}</li>
                                <li>{ blog.listItemK}</li>
                                <li>{ blog.listItemL}</li>
                                <li>{ blog.listItemM}</li>
                                <li>{ blog.listItemN}</li>
                                <li>{ blog.listItemO}</li>
                                <li>{ blog.listItemP}</li>
                                <li>{ blog.listItemQ}</li>
                                <li>{ blog.listItemR}</li>
                                <li>{ blog.listItemS}</li>
                                <li>{ blog.listItemT}</li>
                                <li>{ blog.listItemU}</li>
                            </ul>
                            <p>{ blog.bodyTwentyEight }</p>
                            <p>{ blog.bodyTwentyNine }</p>
                        </section>
                    </section>
                )}
            </main>
    );
    } if (document.title == 'How do I get Around in Panama?') {
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
    }  if (document.title == 'What are Molas?') {
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