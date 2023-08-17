import "./About.css"

const About = () => {
    return(
        <main className="margin">
            <div className="line-divider centered wide">
                <h2 className="diamond-text-box">
                <span className="left"></span>
                <span className="content caps centered">About</span>
                <span className="right"></span>
                </h2>
            </div>
            <div className="comic">
                <figure className="panel-1">
                    <img src={process.env.PUBLIC_URL + '/images/P1000413.JPG'} alt='Alex in Panama City'/>
                    <figcaption>My name is Alex. I am a Panamanian American and have traveled to Panama multiple times.</figcaption>
                </figure>
                <figure className="panel-2">
                    <img src={process.env.PUBLIC_URL + '/images/P1010243.JPG'} alt='A man and a woman on a boat'/>
                </figure>
                <figure className="panel-3">
                    <img src={process.env.PUBLIC_URL + '/images/P1000438.JPG'} alt='San Blas Indians selling items'/>
                    <figcaption>When we travel out of the country, we have the opportunity to learn from other cultures.</figcaption>
                </figure>
                <figure className="panel-3a">
                    <img src={process.env.PUBLIC_URL + '/images/P1000617.JPG'} alt='A turtle swimming'/>
                </figure>
                <figure className="panel-4">
                    <img src={process.env.PUBLIC_URL + '/images/P1000363.JPG'} alt='A ship in the Panama harbor'/>
                    <figcaption>What we learn from traveling becomes clear when we return home.</figcaption>
                </figure>
                <figure className="panel-5">
                    <img src={process.env.PUBLIC_URL + '/images/P1000632.JPG'} alt='A sea anemone'/>
                </figure>
                <figure className="panel-6">
                    <img src={process.env.PUBLIC_URL + '/images/P1010133.JPG'} alt='A young lady walking in front of street vendors'/>
                    <figcaption>Based on my trips to Panama, I created Pick Up Panama to answer questions about Panama.</figcaption>
                </figure>
                <figure className="panel-7">
                    <img src={process.env.PUBLIC_URL + '/images/P1000381.JPG'} alt='A seafood meal from the fish market'/>
                </figure>
            </div>
        </main>
    )
}


export default About;