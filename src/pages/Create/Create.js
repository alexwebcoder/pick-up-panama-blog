import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    //two way data binding gives components in an app a way to share data. use two way binding to listen for events and update values simultaneously between parent and child components
    //controlled inputs allow our code to take what the user types into a form and store it in state
    //in this case a user will be able to send a post request and add it to our data

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Alex DeLeon');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    //useNavigate is to redirect the user and also go back and forward. it gives you access to the navigate object that you can use to navigate the user

    const handleSubmit = (e) => {
        //this prevents the page from refreshing
      e.preventDefault();
      //a blog object is created on submit
      const blog = { title, body, author };

      setIsPending(true);

      //this makes a post request to the endpoint to add a new blog
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(() => {
        //since the fetch method is asyncronous and returns a promise, you can add a then method and pass in a callback to run after the blog is created
        console.log('new blog added');
         setIsPending(false);
        //  navigate(-1); this will take the user back one page after the blog is created
        //navigate.push will take the use to the home page
        navigate('/');
      });

    }


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            {/* assign a handler to the form */}
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                       required
                       value={title}
                       //e.target.value will update the value with whatever the user types into the input
                       onChange={(e) => setTitle(e.target.value)}
                />
                 <label>Blog body:</label>
                 <textarea  required value={body} onChange={(e) => setBody(e.target.value)}>
                   
                 </textarea>
                 <label>Blog author:</label>
                 <select
                   value={author}
                   onChange={(e)=> setAuthor(e.target.value)}
                 >
                    <option value="Alex DeLeon">Alex DeLeon</option>
                    <option value="yoshi">yoshi</option>
                 </select>
                 { isPending ? <button disabled>Adding blog...</button> : <button>Add blog</button>}
            </form>
        </div>
    )
}

export default Create;