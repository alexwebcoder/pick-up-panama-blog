// import PanamaSignImage from '/images/panama-sign.JPG'

const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                <img src={process.env.PUBLIC_URL + '/images/panama-sign.JPG'} alt="Alex DeLeon in front of the Panama sign"/>
            </figure>
        </div>
    )
}

export default Hero;