import panamaSignImage from '../../assets/images/panama-sign.JPG'

const Hero = () => {
    return (
        <div className="hero-image">
            <figure>
                <img src={panamaSignImage} alt="Alex DeLeon in front of the Panama sign"/>
            </figure>
        </div>
    )
}

export default Hero;