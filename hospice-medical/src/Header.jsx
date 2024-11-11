import React from "react";
import Headersection1 from "./Headersection1";
import Navbar from './Navbar'
import Hero from "./Hero";

const Header = (props) =>{
    return(
        <React.Fragment>
            <Headersection1  icons={props.topNavSocialIcons} contact = {props.topNavcontact} />
            <Navbar logo = {props.logo} navItems = {props.navItems} pagesItems = {props.pagesItems} blogItems = {props.blogItems}  />
            <Hero HeroBackground = {props.HeroBackground} heroH1 = {props.heroH1} heroP = {props.heroP} herobtn = {props.herobtn}/>
        </React.Fragment>
    )
}

export default Header;