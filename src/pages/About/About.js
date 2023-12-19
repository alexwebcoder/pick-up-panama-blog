import "./About.css";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";

const About = () => {
  TabTitle("About Pick Up Panama");
  Capitalize();

  return (
    <main className="about-page">
      <figure className="about-hero">
        <picture>
          <source
            type="image/webp"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/about/coronado-panama-320.webp 320w, /images/about/coronado-panama-480.webp 480w, /images/about/coronado-panama-640.webp 640w, /images/about/coronado-panama-768.webp 768w, /images/about/coronado-panama-1024.webp 1024w, /images/about/coronado-panama-1280.webp 1280w, /images/about/coronado-panama-1920.webp 1920w, /images/about/coronado-panama.webp 2543w"
            }
            sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 2543px"
          />
          <source
            type="image/jpg"
            srcSet={
              process.env.PUBLIC_URL +
              "/images/about/coronado-panama-320.jpg 320w, /images/about/coronado-panama-480.jpg 480w, /images/about/coronado-panama-640.jpg 640w, /images/about/coronado-panama-768.jpg 768w, /images/about/coronado-panama-1024.jpg 1024w, /images/about/coronado-panama-1280.jpg 1280w, /images/about/coronado-panama-1920.jpg 1920w, /images/about/coronado-panama.jpg 2543w"
            }
            sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 2543px"
          />
          <img
            className="no-right-click"
            fetchpriority="high"
            src={process.env.PUBLIC_URL + "/images/about/coronado-panama.jpg"}
            alt="villa mayte"
          />
        </picture>
        <figcaption className="fig-caption">
          Villa Mayte Vacation property in Coronado Panama
        </figcaption>
      </figure>
      <div className="line-divider centered wide">
        <h1 className="diamond-text-box">
          <span className="left"></span>
          <span className="content caps centered">About</span>
          <span className="right"></span>
        </h1>
      </div>
      <div className="comic">
        <figure className="panel-1">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/alex-deleon-panama-320.webp 320w, /images/about/alex-deleon-panama-480.webp 480w, /images/about/alex-deleon-panama-640.webp 640w, /images/about/alex-deleon-panama-768.webp 768w,  /images/about/alex-deleon-panama.webp 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/alex-deleon-panama-320.jpg 320w, /images/about/alex-deleon-panama-480.jpg 480w, /images/about/alex-deleon-panama-640.jpg 640w, /images/about/alex-deleon-panama-768.jpg 768w, /images/about/alex-deleon-panama.jpg 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <img
              className="no-right-click"
              src={
                process.env.PUBLIC_URL + "/images/about/alex-deleon-panama.jpg"
              }
              alt="Alex in Panama City"
            />
          </picture>
        </figure>
        <p>
          My name is Alex. I am a Panamanian American who has traveled
          throughout Panama.
        </p>
        <figure className="panel-2">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/man-and-woman-on-boat-in-panama.webp 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/man-and-woman-on-boat-in-panama.jpg 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <img
              className="no-right-click"
              src={
                process.env.PUBLIC_URL +
                "/images/about/man-and-woman-on-boat-in-panama.jpg"
              }
              alt="A man and a woman on a boat in panama"
            />
          </picture>
        </figure>
        <figure className="panel-3">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/san-blas-indians-in-panama-320.webp 320w, /images/about/san-blas-indians-in-panama-480.webp 480w, /images/about/san-blas-indians-in-panama-640.webp 640w, /images/about/san-blas-indians-in-panama-768.webp 768w,  /images/about/san-blas-indians-in-panama.webp 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/san-blas-indians-in-panama-320.jpg 320w, /images/about/san-blas-indians-in-panama-480.jpg 480w, /images/about/san-blas-indians-in-panama-640.jpg 640w, /images/about/san-blas-indians-in-panama-768.jpg 768w, /images/about/san-blas-indians-in-panama.jpg 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <img
              className="no-right-click"
              src={
                process.env.PUBLIC_URL +
                "/images/about/san-blas-indians-in-panama.jpg"
              }
              alt="San Blas Indians selling items in panama"
            />
          </picture>
        </figure>
        <p>
          The first step in learning about a foreign culture is to recognize
          cultural differences.
        </p>
        <figure className="panel-3a">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL + "/images/about/sea-turtle.webp 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL + "/images/about/sea-turtle.jpg 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <img
              className="no-right-click"
              src={process.env.PUBLIC_URL + "/images/about/sea-turtle.jpg"}
              alt="A sea turtle swimming"
            />
          </picture>
        </figure>
        <figure className="panel-4">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/ship-in-the-panama-harbor-320.webp 320w, /images/about/ship-in-the-panama-harbor-480.webp 480w, /images/about/ship-in-the-panama-harbor-640.webp 640w, /images/about/ship-in-the-panama-harbor-768.webp 768w,  /images/about/ship-in-the-panama-harbor.webp 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/ship-in-the-panama-harbor-320.jpg 320w, /images/about/ship-in-the-panama-harbor-480.jpg 480w, /images/about/ship-in-the-panama-harbor-640.jpg 640w, /images/about/ship-in-the-panama-harbor-768.jpg 768w, /images/about/ship-in-the-panama-harbor.jpg 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <img
              className="no-right-click"
              src={
                process.env.PUBLIC_URL +
                "/images/about/ship-in-the-panama-harbor.jpg"
              }
              alt="A ship in the Panama harbor"
            />
          </picture>
        </figure>
        <p>
          Learning about foreign culture can prepare us to interact better with
          others.
        </p>
        <figure className="panel-5">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL + "/images/about/a-sea-anemone.webp 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL + "/images/about/a-sea-anemone.jpg 468w"
              }
              sizes="(max-width: 320px) 320px, 468px"
            />
            <img
              className="no-right-click"
              src={process.env.PUBLIC_URL + "/images/about/a-sea-anemone.webp"}
              alt="A sea anemone"
            />
          </picture>
        </figure>
        <figure className="panel-6">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/young-lady-walking-in-panama-city-320.webp 320w, /images/about/young-lady-walking-in-panama-city-480.webp 480w, /images/about/young-lady-walking-in-panama-city-640.webp 640w, /images/about/young-lady-walking-in-panama-city-768.webp 768w,  /images/about/young-lady-walking-in-panama-city.webp 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/young-lady-walking-in-panama-city-320.jpg 320w, /images/about/young-lady-walking-in-panama-city-480.jpg 480w, /images/about/young-lady-walking-in-panama-city-640.jpg 640w, /images/about/young-lady-walking-in-panama-city-768.jpg 768w, /images/about/young-lady-walking-in-panama-city.jpg 866w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 866px"
            />
            <img
              className="no-right-click"
              src={
                process.env.PUBLIC_URL +
                "/images/about/young-lady-walking-in-panama-city.jpg"
              }
              alt="A young lady walking in front of street vendors in panama city"
            />
          </picture>
        </figure>
        <p className="created">
          I created Pick Up Panama to help travelers solve some of the
          challenges that come with visiting Panama.
        </p>
        <p className="based-on">
          My goal is to develop Pick Up Panama into a resource for knowledge,
          culture, and lifestyle while visiting and learning new things about
          Panama.
        </p>
        <figure className="panel-7">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/panama-fish-market.webp 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/about/panama-fish-market.jpg 468w"
              }
              sizes="(max-width: 468px) 468px"
            />
            <img
              className="no-right-click"
              src={
                process.env.PUBLIC_URL + "/images/about/panama-fish-market.jpg"
              }
              alt="A seafood meal from the fish market in panama city"
            />
          </picture>
        </figure>
      </div>
    </main>
  );
};

export default About;
