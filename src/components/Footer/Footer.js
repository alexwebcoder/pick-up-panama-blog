import ContactForm from "./OptInForm/OptInForm";
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return ( 
        <>
        <footer  id="footer-nav" className="footer centered">
            <ContactForm />
            <nav className="icons">
                <a target="_blank" href="https://www.instagram.com/pickuppanamadotcom/" rel="noopener noreferrer" aria-label="instagram"><i className="fab fa-instagram"></i></a>
                <a target="_blank" href="https://twitter.com/PickUpPanama" rel="noopener noreferrer" aria-label="twitter"><i className="fab fa-x-twitter"></i></a>
                <a target="_blank" href="https://www.facebook.com/PickUpPanama/" rel="noopener noreferrer" aria-label="facebook"><i className="fab fa-facebook"></i></a>
                <a target="_blank" href="https://www.pinterest.com/pickuppanama/" rel="noopener noreferrer" aria-label="pinterest"><i className="fab fa-pinterest"></i></a>
            </nav>
            <ul className="menu">
                <li className="item caps home"><Link to ="/">Home</Link></li>
                <li className="item caps news"><Link to="/newsfeed">Newsfeed</Link></li>
                <li className="item caps about"><Link to="/about">About</Link></li>
                <li className="item caps"><Link to="/contact">Contact</Link></li>
            </ul>
            <p className="copyright">&copy; Pick Up Panama 2023-2024. All rights reserved.</p>
            <p className="no-reproduction">Content on PickUpPanama.com may not<br/>be reproduced without written permission.</p>
            <p className="credits">Articles and Photography by Alex DeLeón</p>
      </footer>
        </>
     );
}
 
export default Footer;