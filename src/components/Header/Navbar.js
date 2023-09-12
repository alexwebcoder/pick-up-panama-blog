import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

    return (  
    <header className="header">
        <nav id="main-nav" className="nav">
            <ul className="menu">
                <li className="logo caps"><a href="/">Pick Up<br/>Panama</a></li>
                <li className="toggle"><div tabIndex={0} className="toggle-anchor"><div className="hamburger-container">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div></div></li>
                <li className="item home-link"><Link to ="/">Home</Link></li>
                <li className="item"><Link to="/newsfeed">Newsfeed</Link></li>
                <li className="item"><Link to="/about">About</Link></li>
                <li className="item"><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="sidenav centered" tabIndex={-1}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/newsfeed">Newsfeed</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="flag panama">
                <div>
                  <div className="panama-star blue"></div>
                </div>
                <div className="red-field"></div>
                <div className="blue-field"></div>
                <div>
                  <div className="panama-star red"></div>
                </div>  
            </div>
        </nav>
        <div className="definition">
            <p>Where you <span>learn about Panama</span></p>
        </div>
        <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
    </header>
    );
}
 
export default Navbar;