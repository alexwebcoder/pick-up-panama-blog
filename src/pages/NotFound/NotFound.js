import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
    return (
        
            <main className="not-found">
                <figure className="not-found-hero">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/notFound/missing-meal.JPG'} alt="Villa Mayte Coronado Panama"/>
                    <figcaption className="fig-caption">Taken at Delicias Margot in Coronado Panama.</figcaption>
                </figure>
                <section className="centered">
                    <h1>404</h1>
                    <p>This page is missing.</p>
                <Link to="/">Back to the home page...</Link>
                </section>
           </main>
    )
}

export default NotFound;