import "./About.css";
import { TabTitle, Capitalize } from '../../utils/GeneralFunctions';


const About = () => {
    TabTitle('About Pick Up Panama');
    Capitalize();

    return(
        <main className="about-page">
            <figure className="about-hero">
                <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/coronado-panama.JPG'} alt="Villa Mayte Coronado Panama"/>
                <figcaption className="fig-caption">Villa Mayte Vacation property in Coronado Panama</figcaption>
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
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/alex-deleon-panama.JPG'} alt='Alex in Panama City'/>
                </figure>
                <p>My name is Alex. I am a Panamanian American who has traveled throughout Panama.</p>
                <figure className="panel-2">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/man-and-woman-on-boat.JPG'} alt='A man and a woman on a boat'/>
                </figure>
                <figure className="panel-3">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/san-blas-indians.JPG'} alt='San Blas Indians selling items'/>
                </figure>
                <p>The first step in learning about a foreign culture is to recognize cultural differences.</p>
                <figure className="panel-3a">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/sea-turtle.JPG'} alt='A sea turtle swimming'/>
                </figure>
                <figure className="panel-4">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/ship-in-the-harbor.JPG'} alt='A ship in the Panama harbor'/>
                </figure>
                <p>The lessons we learned while traveling become more clear when we return home.</p>
                <figure className="panel-5">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/a-sea-anemone.JPG'} alt='A sea anemone'/>
                </figure>
                <figure className="panel-6">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/young-lady-walking.JPG'} alt='A young lady walking in front of street vendors'/>
                </figure>
                <p className="created">I created Pick Up Panama to help travelers solve some of the challenges that come with visiting Panama.</p>
                <p className="based-on">My goal is to develop Pick Up Panama into a resource for knowledge, culture, and lifestyle while visiting and learning new things about Panama.</p>
                <figure className="panel-7">
                    <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/about/sea-food-meal.JPG'} alt='A seafood meal from the fish market'/>
                </figure>
            </div>
        </main>
    )
}

export default About;