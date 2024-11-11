import React from "react";
import FooterNav from "./FooterNav";

const Footer = (props) =>{
    return(
        <React.Fragment>
            <FooterNav FooterFirstH2 = {props.FooterFirstH2} TopPropducts = {props.TopPropducts} FooterSecondH2 = {props.FooterSecondH2} address = {props.address} Phone = {props.Phone} FooterThirdH2 = {props.FooterThirdH2} NewsletterP = {props.NewsletterP} NewsletterInput = {props.NewsletterInput} NewsletterBtn = {props.NewsletterBtn}/>
        </React.Fragment>
    )
}

export default Footer;