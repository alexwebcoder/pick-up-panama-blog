import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main id="main-element" className="not-found">
      <figure className="not-found-hero">
        <picture>
          <source
            type="image/webp"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/notFound/missing-meal-320.webp 320w, /images/notFound/missing-meal-640.webp 640w, /images/notFound/missing-meal.webp 1017w"
            }
            sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 1017px"
          />
          <source
            type="image/jpg"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/notFound/missing-meal-320.jpg 320w, /images/notFound/missing-meal-640.jpg 640w, /images/notFound/missing-meal.jpg 1017w"
            }
            sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 1017px"
          />
          <img
            fetchpriority="high"
            className="no-right-click"
            src={process.env.PUBLIC_URL + "/images/notFound/missing-meal.jpg"}
            alt="Villa Mayte Coronado Panama"
          />
        </picture>
        <figcaption className="fig-caption">
          Taken at Delicias Margot in Coronado Panama.
        </figcaption>
      </figure>
      <section className="centered">
        <h1>404</h1>
        <p>This page is missing.</p>
        <Link to="/">Back to the home page...</Link>
      </section>
    </main>
  );
};

export default NotFound;
