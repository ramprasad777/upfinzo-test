import './banner.css';
import Button from '../Button/Button';
const Banner = ()=>{
    return(
        <>
        <section className="hero">
            <div className="overlay"></div>

            <div className="ring ring1"></div>
            <div className="ring ring2"></div>

            <div className="content">
                <h1 className="text-white text-6xl leading-[1.3]">
                    AI-powered 
                    <span className="highlight"> Banking & Payment Solutions</span><br />
                    built for Modern Businesses
                </h1>

                <p className="subtitle text-gray-100 mt-2">
                    UzOfin brings intelligent automation, real-time payments, and seamless financial <br />
                    operations together so you can scale without friction.
                </p>

                <div className="buttons">
                    <Button link="#" text="Start Building" style="primaryBtn" />
                    <Button link="#" text="Build AI" style="secondaryBtn" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Banner;