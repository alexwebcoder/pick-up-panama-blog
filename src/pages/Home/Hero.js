
const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                     <picture>
                         <source
                           type="image/webp"
                           srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-320.webp 320w, /images/home/panama-sign-640.webp 640w, /images/home/panama-sign-768.webp 768w, /images/home/panama-sign-1280.webp 1280w, /images/home/panama-sign-1920.webp 1920w, /images/home/panama-sign.webp 2543w'}
                           sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 2543px"
                         />
                         <source
                           type="image/jpg"
                           srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-320.jpg 320w, /images/home/panama-sign-640.jpg 640w, /images/home/panama-sign-768.jpg 768w, /images/home/panama-sign-1280.jpg 1280w, /images/home/panama-sign-1920.jpg 1920w, /images/home/panama-sign.jpg 2543w'}
                           sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1280px) 1280px,  (max-width: 1920px) 1920px, 2543px"
                         />
                         <img fetchpriority="high" className='no-right-click' src={process.env.PUBLIC_URL + '/images/home/panama-sign.jpg'} alt="Alex DeLeon in front of the Panama sign"/>
                     </picture>
            </figure>
        </div>
    )
}

export default Hero;