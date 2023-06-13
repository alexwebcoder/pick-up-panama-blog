import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar"> 
           <h1>The Panama Blog</h1>
           <div className="links">
            {/* Link tags are used instead of anchor tags to prevent an external request to the server. This way, React handles the routing only in the browser. It enables React to intercept the request to the server */}
             <Link to="/">Home</Link>
             <Link to="/create">New Blog</Link>
           </div>   
        </nav>
    );
}
 
export default Navbar;