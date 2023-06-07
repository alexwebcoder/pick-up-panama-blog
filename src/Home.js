import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    //this is the pending state so we see the loading... text
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

      //runs after every render, but a dependency array limits the useEffect to running only on the first render
      //fetch the data as soon as the component renders
      useEffect(() => {
          fetch('http://localhost:8000/blogs')
          //if there is an error, server will send an error back
            .then(res => {
              console.log(res); // this is the response object
              if(!res.ok) {
                //then we throw a user defined error, execution stops in the function and control goes to the first catch block
                throw Error('could not fetch data for that resource');
              }
              return res.json();
            })
            .then((data) => {
              setBlogs(data);
              setIsPending(false);
              setError(null); //if it is successfull, we set this back the initial state.
            })
            //catch statement defines a block of code to run if an error is thrown.
            .catch(err => {
              setError(err.message);
              setIsPending(false);
              setBlogs(null);  //prevents error message and blogs from showing up at same time
            });
            
      }, []);

    return ( 
        <div className="home">
          {/* This get rendered only if we have a value for error(conditionally) */}
          { error && <div>{ error }</div>}
          { isPending && <div>Loading...</div> }
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;