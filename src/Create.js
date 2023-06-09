import { useState } from "react";

const Create = () => {
    //two way data binding gives components in an app a way to share data. use two way binding to listen for events and update values simultaneously between parent and child components
    //controlled inputs allow our code to take what the user types into a form and store it in state
    //in this case a user will be able to send a post request and add it to our data

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const handleSubmit = (e) => {
        //this prevents the page from refreshing
      e.preventDefault();
      //a blog object is created on submit
      const blog = { title, body, author };

      console.log(blog);
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
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                 </select>
                 <button>Add blog</button>
            </form>
        </div>
    )
}

export default Create;