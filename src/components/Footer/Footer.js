import ContactForm from "./ContactForm/ContactForm";
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return ( 
        <>
        <footer  id="footer-nav" className="footer centered">
            <ContactForm />
            <nav className="icons">
                <a href="/"><i className="fab fa-facebook"></i></a>
                <a href="/"><i className="fab fa-linkedin"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>     
            </nav>
            <ul className="menu">
                <li className="item"><Link to ="/">Home</Link></li>
                <li className="item"><Link to="#">Newsfeed</Link></li>
                <li className="item"><Link to="#">About</Link></li>
                <li className="item"><Link to="#">Contact</Link></li>
            </ul>
            <p className="copyright">&copy; Pick Up Panama 2023, All rights reserved.</p> 
            <p className="no-reproduction">Content on PickUpPanama.com may not<br/>be reproduced without written permission.</p>
            <p className="credits">Articles and Photography by Alex DeLeon</p>
      </footer>
        </>
     );
}
 
export default Footer;