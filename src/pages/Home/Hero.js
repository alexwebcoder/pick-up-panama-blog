
const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                     <picture>
                         <source
                           type="image/webp"
                           srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-320.webp 320w, /images/home/panama-sign-768C.webp 768w, /images/home/panama-sign-1280B.webp 1280w, /images/home/panama-signA.webp 2543w,'}
                           sizes="(max-width: 320px) 320px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 2543px"
                         />
                         <source
                           type="image/jpg"
                           srcSet={process.env.PUBLIC_URL + '/images/home/panama-sign-320.jpg 320w, /images/home/panama-sign-768C.jpg 768w, /images/home/panama-sign-1280B.jpg 1280w, /images/home/panama-signA.jpg 2543w,'}
                           sizes="(max-width: 320px) 320px, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 2543px"
                         />
                         <img fetchpriority="high" className='no-right-click' src={process.env.PUBLIC_URL + '/images/home/panama-sign.jpg'} alt="Alex DeLeon in front of the Panama sign"/>
                     </picture>
            </figure>
        </div>
    )
}

export default Hero;