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
                    <img src={process.env.PUBLIC_URL + '/images/P1000413.JPG'} alt=''/>
                    <figcaption>My name is Alex. I am a Panamanian American and have traveled to Panama multiple times.</figcaption>
                </figure>
                <figure className="panel-2">
                    <img src={process.env.PUBLIC_URL + '/images/P1010243.JPG'} alt=''/>
                </figure>
                <figure className="panel-3">
                    <img src={process.env.PUBLIC_URL + '/images/P1000438.JPG'} alt=''/>
                    <figcaption>When we travel out of the country, we have the opportunity to learn from other cultures.</figcaption>
                </figure>
                <figure className="panel-4">
                    <img src={process.env.PUBLIC_URL + '/images/P1010055.JPG'} alt=''/>
                    <figcaption>What we learn from traveling becomes clear when we return home.</figcaption>
                </figure>
                <figure className="panel-5">
                    <img src={process.env.PUBLIC_URL + '/images/P1000770.JPG'} alt=''/>
                </figure>
                <figure className="panel-6">
                    <img src={process.env.PUBLIC_URL + '/images/P1010055.JPG'} alt=''/>
                    <figcaption>Based on my trips to Panama, I created Pick Up Panama to answer questions about Panama.</figcaption>
                </figure>
            </div>
        </main>
    )
}


export default About;