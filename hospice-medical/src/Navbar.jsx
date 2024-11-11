import React from "react";
import"./style.css";

const Navbar = (props) =>{
    const logo = props.logo
    const navItems = props.navItems 
    const pagesItems = props.pagesItems
    const blogItems = props.blogItems
    return(
        <React.Fragment>
            <section className="navigation navbar navbar-expand-lg">
                <section className="container">
                    <a href="#"><img src={logo} alt="logo" /></a>
                    <button type="button" className="navbar-toggler" data-bs-target="#mymenu" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="mymenu" className="collapse navbar-collapse">
                        <ul className="main-navigation navbar-nav ms-auto">
                            {
                                navItems.map(function(item,index){
                                    return(
                                        <li key={index} className="nav-item"><a href="#" className="nav-link text-dark">{item}</a></li>    
                                    )
                                })
                            }
                            <li className="nav-item dropdown">
                                <a className="text-dark nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">PAGES</a>
                                    <ul className="dropdown-menu">
                                        {
                                            pagesItems.map(function(item,index){
                                                return(
                                                    <React.Fragment>
                                                        <li key={index}><a className="dropdown-item" href="#">{item}</a></li>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="text-dark nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">BLOG</a>
                                    <ul className="dropdown-menu">
                                        {
                                            blogItems.map(function(item,index){
                                                return(
                                                    <React.Fragment>
                                                        {/* <li><hr className="dropdown-divider"/></li> */}
                                                        <li key={index}><a className="dropdown-item" href="#">{item}</a></li>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </ul>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Navbar;