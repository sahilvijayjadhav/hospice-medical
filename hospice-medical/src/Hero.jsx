import React from "react";
import "./style.css"


const Hero = (props) =>{
    const HeroBackground = props.HeroBackground
    const heroH1 = props.heroH1
    const heroP = props.heroP
    const herobtn = props.herobtn
    return(
        <React.Fragment>
            <section className="hero">
                <section className="container py-5 hero-details">
                    <section className="row">
                        <div className="col-12 col-md-6">
                            <h1 className="py-4">{heroH1}</h1>
                            <p className="pb-4">{heroP}</p>
                            <a href="#" className="btn">{herobtn}</a>
                        </div>
                    </section>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Hero;