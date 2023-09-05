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

    return (
        <main className={`blog-details margin `}>
            { isPending && <div>Loading...</div> } 
            { error && <div>{ error }</div> }
            { blog && (
                <section className={blog.className}>
                    <p className="date centered">{ blog.date }</p>
                    <h1 className="centered">{ blog.title }</h1>
                    <p className="body">
                        { blog.body }
                    </p>
                    <p className="body-two">
                        { blog.bodyTwo }
                    </p>
                    <div className="body-two-a">
                        { blog.bodyTwoA }
                    </div>
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

                    </section>
                </section>
            )}
        </main>

    );
}

export default BlogDetails;