import { useParams } from "react-router-dom";

const BlogDetails = () => {
 //using the useParams hook to grab values (route params) from current url (route)
    const { id } = useParams();

    return (
        <div className="blog-details">
            <h2>
                Blog Details - {id}
            </h2> 
        </div>

    );
}

export default BlogDetails;