import "./Footer.css"

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="icons">
           <a href="#"><i className="fab fa-facebook"></i></a>
           <a href="#"><i className="fab fa-linkedin"></i></a>
           <a href="#"><i className="fab fa-instagram"></i></a>
           <a href="#"><i className="fab fa-twitter"></i></a>
            <p className="company-name">
                ABC &copy; 2021, ALL Rights Reserved
            </p>
        </div>
    </footer>
     );
}
 
export default Footer;