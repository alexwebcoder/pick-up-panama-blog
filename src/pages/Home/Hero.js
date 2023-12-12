
const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                     <picture>
                         <source
                           type="image/webp"
                           srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-1x.webp 320w, /images/home/panama-sign-2x.webp 640w, /images/home/panama-sign.webp 2543w,'}
                           sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 2543px"
                         />
                         <source
                           type="image/jpg"
                           srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-1x.jpg 320w, /images/home/panama-sign-2x.jpg 640w, /images/home/panama-sign.jpg 2543w,'}
                           sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, 2543px"
                         />
                         <img fetchpriority="high" className='no-right-click' src={process.env.PUBLIC_URL + '/images/home/panama-sign.jpg'} alt="Alex DeLeon in front of the Panama sign"/>
                     </picture>
            </figure>
        </div>
    )
}

export default Hero;