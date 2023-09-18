
const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                <img className='no-right-click' src={process.env.PUBLIC_URL + '/images/home/panama-sign.JPG'} alt="Alex DeLeon in front of the Panama sign"/>
            </figure>
        </div>
    )
}

export default Hero;