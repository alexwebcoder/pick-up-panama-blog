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
        <main className="blog-details margin">
            { isPending && <div>Loading...</div> } 
            { error && <div>{ error }</div> }
            { blog && (
                <section className={blog.className}>
                    <p className="date centered">{ blog.date }</p>
                    <h1 className="centered">{ blog.title }</h1>
                    <h2 className="body">
                        { blog.body }
                    </h2>
                    <figure>
                        <img className="no-right-click" src={blog.imageTwo} alt={blog.altTwo}/>
                        <figcaption>{blog.figcaptionTwo}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyTwo }
                    </div>
                    <figure>
                        <img className="no-right-click" src={blog.imageThree} alt={blog.altThree}/>
                        <figcaption>{blog.figcaptionThree}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyThree }
                    </div>
                    <figure>
                        <img className="no-right-click" src={blog.imageFour} alt={blog.altFour}/>
                        <figcaption>{blog.figcaptionFour}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyFour }
                    </div>
                    <figure>
                        <img className="no-right-click" src={blog.imageFive} alt={blog.altFive}/>
                        <figcaption>{blog.figcaptionFive}</figcaption>
                    </figure>
                    <div>
                    <figure>
                        <img className="no-right-click" src={blog.image} alt={blog.alt}/>
                        <figcaption>{blog.figcaption}</figcaption>
                    </figure>
                        { blog.bodyFive }
                    </div>
                </section>
            )}
        </main>

    );
}

export default BlogDetails;