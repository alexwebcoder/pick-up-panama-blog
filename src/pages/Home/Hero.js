
const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                <img fetchpriority="high" className='no-right-click'
                srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-1x.webp 380w, /images/home/panama-sign-2x.webp 640w, /images/home/panama-sign.webp 2543w,'}
                src={process.env.PUBLIC_URL + '/images/home/panama-sign.webp'} alt="Alex DeLeon in front of the Panama sign"/>
            </figure>
        </div>
    )
}

export default Hero;