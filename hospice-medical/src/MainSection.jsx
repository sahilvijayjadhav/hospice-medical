import React from "react";
import CategorySection from "./CategorySection";
import AboutSection from "./AboutSection";
import FeedbackSection from "./FeedbackSection";
import ServicesSection from "./servicesSection";

const MainSection = (props) =>{
    return(
        <React.Fragment>
            <CategorySection CategoryH2 = {props.CategoryH2} CategoryP = {props.CategoryP} categoryImg = {props.categoryImg} />
            <AboutSection aboutImg = {props.aboutImg} aboutH2 = {props.aboutH2} aboutP = {props.aboutP} aboutCountCard1 = {props.aboutCountCard1} aboutCountCard2 = {props.aboutCountCard2}/>
            <FeedbackSection feedbackH2 = {props.feedbackH2} feedbackP = {props.feedbackP} feedbackImg = {props.feedbackImg} feedStrong = {props.feedStrong} feedbackReview = {props.feedbackReview}/>
            <ServicesSection servicesH2 = {props.servicesH2} servicesP = {props.servicesP} servicesCard = {props.servicesCard} />
        </React.Fragment>
    )
}

export default MainSection