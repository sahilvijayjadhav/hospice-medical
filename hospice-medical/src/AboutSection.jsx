import React from "react";
import "./style.css"


const AboutSection = (props) =>{
    const aboutImg = props.aboutImg;
    const aboutH2 = props.aboutH2;
    const aboutP = props.aboutP;
    const aboutCountCard1 = props.aboutCountCard1;
    const aboutCountCard2 = props.aboutCountCard2;
    return(
       <React.Fragment>
        <section className="container py-5">
            <section className="row">
                <div className="col-12 col-lg-6">
                    <img className="w-100" src={aboutImg} alt="about-me"/>
                </div>
                <div className="col-12 col-lg-6 about-details pt-5">
                    <div className="ps-5 about-caption">
                        <h2 className="py-3">{aboutH2}</h2>
                        <p className="pb-3">{aboutP}</p>
                        <div className="row">
                            {
                                aboutCountCard1.map(function(item,index){
                                    return(
                                        <div className="col-12 col-lg-4 card mb-3 mx-3">
                                            <div className="about-count card-body d-flex flex-column">
                                                <i className={item.icon}></i>
                                                <strong className="pb-2">{item.count}</strong>
                                                <span>{item.type}</span>
                                            </div>
                                        </div>    
                                    )
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aboutCountCard2.map(function(item,index){
                                    return(
                                        <div className="col-12 col-lg-4 card mx-3 mb-3">
                                            <div className="about-count card-body d-flex flex-column">
                                                <i className={item.icon}></i>
                                                <strong className="pb-2">{item.count}</strong>
                                                <span>{item.type}</span>
                                            </div>
                                        </div>    
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </React.Fragment>
    )
}

export default AboutSection;