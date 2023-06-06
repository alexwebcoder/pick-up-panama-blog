import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipusm...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipusm...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipusm...', author: 'mario', id: 3 }
      ]);

      const [name, setName] = useState('mario');

      const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      }

      //runs after every render, but a dependency array limits the useEffect to running only on the first render

      useEffect(() => {
        console.log('use effect ran');
        console.log(name);
      }, [name]);

    return ( 
        <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
          <button onClick={() => setName('luigi')}>change name</button>
          <p>{name}</p>
        </div>
     );
}
 
export default Home;