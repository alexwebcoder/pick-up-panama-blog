import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../../useFetch';
import "./BlogDetails.css";

const BlogDetails = () => {
 //using the useParams hook to grab values (route params) from current url (route)
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
        //this is asyncronous and fires a function when complete
      }).then (() => {
        navigate('/');
      })
    }

    return (
        <div className="blog-details margin">
            { isPending && <div>Loading...</div> } 
            { error && <div>{ error }</div> }
            { blog && (
                <article className={blog.className}>
                    <h2>{ blog.title }</h2>
                    <figure className="panel-1">
                        <img className="no-right-click" src={blog.image} alt={blog.alt}/>
                        <figcaption>{blog.figcaption}</figcaption>
                    </figure>
                    <p>Written by: { blog.author }</p>
                    <div>
                        { blog.body }
                    </div>
                    <figure className="panel-1">
                        <img className="no-right-click" src={blog.imageTwo} alt={blog.altTwo}/>
                        <figcaption>{blog.figcaptionTwo}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyTwo }
                    </div>
                    <figure className="panel-1">
                        <img className="no-right-click" src={blog.imageThree} alt={blog.altThree}/>
                        <figcaption>{blog.figcaptionThree}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyThree }
                    </div>
                    <figure className="panel-1">
                        <img className="no-right-click" src={blog.imageFour} alt={blog.altFour}/>
                        <figcaption>{blog.figcaptionFour}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyFour }
                    </div>
                    <figure className="panel-1">
                        <img className="no-right-click" src={blog.imageFive} alt={blog.altFive}/>
                        <figcaption>{blog.figcaptionFive}</figcaption>
                    </figure>
                    <div>
                        { blog.bodyFive }
                    </div>
                </article>
            )}
        </div>

    );
}

export default BlogDetails;