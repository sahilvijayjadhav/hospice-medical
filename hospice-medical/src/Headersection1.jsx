import React from "react";
import './style.css'
const Headersection1 = (props1) =>{
    const icons = props1.icons
    const contact = props1.contact
    return(
        <React.Fragment>
            <section className="container d-none d-md-flex justify-content-between align-items-center headerOne">
                <section className="d-flex social-icon">
                    {
                        icons.map(function(icons,index){
                            return(
                                <i key={index} className={icons.Class}></i>
                            )
                        })
                    }
                </section>
                <section className="d-flex top-contact">
                    {
                        contact.map(function(contact,index){
                            return(
                                <a key={index} href="#"><i className={contact.class}></i>{contact.type}</a>        
                            )
                        })
                    }
                </section>
            </section>
        </React.Fragment>
    )
}

export default Headersection1;