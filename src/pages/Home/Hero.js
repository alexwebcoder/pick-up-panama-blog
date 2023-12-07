
const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                <img fetchpriority="high" className='no-right-click' src={process.env.PUBLIC_URL + '/images/home/panama-sign.webp'} alt="Alex DeLeon in front of the Panama sign"/>
            </figure>
        </div>
    )
}

export default Hero;