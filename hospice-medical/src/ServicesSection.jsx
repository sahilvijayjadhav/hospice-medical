import React from "react";
import "./style.css"

const ServicesSection = (props) =>{
    const servicesH2 = props.servicesH2
    const servicesP = props.servicesP
    const servicesCard = props.servicesCard
    return(
        <React.Fragment>
            <section className="container py-5 services">
                <h2 className="text-center pt-5 pb-3">{servicesH2}</h2>
                <p className="text-center w-50 mx-auto" >{servicesP}</p>
                <div className="row py-4">
                    {
                        servicesCard.map(function(item,index){
                            return(
                                <div className="col-12 col-md-6 col-lg-3">
                                    <a href="#" className="services-card text-center d-flex justify-content-center flex-column">
                                        <i className={item.icon}></i>
                                        <h3 className="pb-3">{item.type}</h3>
                                        <p>{item.caption}</p>
                                    </a>
                                </div>
                            )
                        })
                    }    
                </div>
            </section>
        </React.Fragment>
    )
}

export default ServicesSection;