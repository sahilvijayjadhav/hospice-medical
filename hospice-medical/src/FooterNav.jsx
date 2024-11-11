import React from "react";
import "./style.css"

const FooterNav = (props) =>{
    const FooterFirstH2 = props.FooterFirstH2
    const TopPropducts = props.TopPropducts
    const FooterSecondH2 = props.FooterSecondH2
    const address = props.address
    const Phone = props.Phone
    const FooterThirdH2 = props.FooterThirdH2
    const NewsletterP = props.NewsletterP 
    const NewsletterInput = props.NewsletterInput 
    const NewsletterBtn = props.NewsletterBtn
    return(
        <React.Fragment>
            <section className="footerSecctionOne py-5">
                <section className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-2">
                            <div>
                                <h2 className="footerH2 pb-3">{FooterFirstH2}</h2>
                                <menu>
                                {
                                    TopPropducts.map(function(item,index){
                                        return(
                                            <li className="py-1">
                                                <a href="#">{item.li}</a>
                                            </li>
                                        )
                                    })
                                }
                                </menu>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="contactUs">
                                <h2 className="footerH2 pb-3">{FooterSecondH2}</h2>
                                <address className="pb-3">{address}</address>
                                {
                                    Phone.map(function(item,index){
                                        return(
                                            <strong>{item.no}</strong>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="newsletter">
                                <h2 className="footerH2 pb-3">{FooterThirdH2}</h2>
                                <p>{NewsletterP}</p>
                                <div className="col-12 col-md-6 newsletter-input">
                                    <input className="form-control w-100 rounded-pill" type="email" name="email" placeholder={NewsletterInput} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <a className="submit-btn" href="#">
                                        {
                                            NewsletterBtn.map(function(item,index){
                                                return(
                                                    <React.Fragment>
                                                        {item.text}
                                                        <i className={item.icon}></i>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default FooterNav;