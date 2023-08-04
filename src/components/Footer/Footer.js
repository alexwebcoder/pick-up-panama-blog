import ContactForm from "../ContactForm/ContactForm";
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
        <p className="copyright">
            &copy; Pick Up Panama 2023, All rights reserved. <br/>Content on PickUpPanama.com may not be reproduced without written permission.
        </p>
        <p className="credits">Articles and Photography by Alex DeLeon</p>
    </footer>
        </>
     );
}
 
export default Footer;