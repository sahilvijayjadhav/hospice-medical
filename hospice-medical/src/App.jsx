import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";


const topNavSocialIcons = [
    {
        Class : "fa-brands fa-facebook-f",
        Name : 'facebook'
    },
    {
        Class : "fa-brands fa-twitter",
        Name : 'twitter'
    },
    {
        Class : "fa-brands fa-instagram",
        Name : 'instagram'
    },
    {
        Class : "fa-brands fa-linkedin-in",
        Name : 'linkedin'
    },
]
const topNavcontact = [
    {
        class : "bi bi-telephone",
        type : "012-6532-568-9746"
    },
    {
        class : "bi bi-envelope",
        type : "EMERGENCY@COLORLIB.COM"
    }
]
const logo = "./images/illustration/logo.png";
const navItems = ['HOME','DEPARTMENTS','DOCTORS','CONTACT'];
const pagesItems = ['ABOUT','SERVICES','ELEMENTS'];
const blogItems = ['BLOG','BLOG DETAILS']
const HeroBackground = "./images/illustration/home.jpg"
const heroH1 = 'We Care for Your Health Every Moment';
const heroP = 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each.';
const herobtn = 'Get Started';
const CategoryH2 = 'Procedure Category'
const CategoryP = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const categoryImg = [
    {
        imgPath : "./images/illustration/p1.jpg",
        caption : " EMERGENCY TREATMENT"
    },
    {
        imgPath : "./images/illustration/p2.jpg",
        caption : " EMERGENCY TREATMENT"
    },
    {
        imgPath : "./images/illustration/p3.jpg",
        caption : " EMERGENCY TREATMENT"
    }
]
const aboutImg = "./images/illustration/about-me.jpg"
const aboutH2 = "About Myself"
const aboutP = "nappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That's why it's crucial that, as women, our behavior on the job is beyond reproach.";
const aboutCountCard1 = [
    {
        icon : 'bi bi-database pb-2',
        count : '$0.4 M',
        type : 'Total Donation'
    },
    {
        icon : 'bi bi-journals pb-2',
        count : '90',
        type : 'Total Project'
    }
]
const aboutCountCard2 = [
    {
        icon : 'bi bi-person pb-2',
        count : '2',
        type : 'Total Volunteers'
    },
    {
        icon : 'bi bi-person pb-2',
        count : '12',
        type : 'Total Volunteers'
    }
]
const feedbackH2 = "Enjoy our Client's Feedback";
const feedbackP = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const feedbackImg = "./images/illustration/feedback-bg.jpg";
const feedStrong = "Fannie Rowe";
const feedbackReview = 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you canfind the best computer accessory for your laptop, monitor, printer, scanner, speaker.';
const servicesH2 = 'Our Offered Services'
const servicesP = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const servicesCard = [
    {
        icon : "bi bi-rocket-takeoff py-3",
        type : "24/7 Emergency",
        caption : 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
    },
    {
        icon : "bi bi-heart-pulse py-3",
        type : "Expert Consultation",
        caption : 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
    },
    {
        icon : "bi bi-bug py-3",
        type : "Intensive Care",
        caption : 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
    },
    {
        icon : "bi bi-person py-3",
        type : "Family Planning",
        caption : 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'
    }
]
const FooterFirstH2 = 'Top Products'
const TopPropducts = [
    {
        li : 'Managed Website'
    },
    {
        li : 'Manage Reputation'
    },
    {
        li : 'Power Tools'
    },
    {
        li : 'Marketing Service'
    }
]
const FooterSecondH2 = 'Contact Us'
const address = '56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA'
const Phone = [
    {
        no : '012-6532-568-9746'
    },
    {
        no : '012-6532-568-97468'
    }
]
const FooterThirdH2 = 'Newsletter'
const NewsletterP = 'You can trust us. we only send promo offers, not a single spam.'
const NewsletterInput = 'Your Email Address'
const NewsletterBtn = [
    {
        text : 'Get Started',
        icon : 'bi bi-arrow-right ps-1'
    }
]
const App = () =>{
    return(
        <React.Fragment>
            <Header topNavSocialIcons = {topNavSocialIcons} topNavcontact = {topNavcontact} logo = {logo} navItems = {navItems} pagesItems = {pagesItems} blogItems = {blogItems} HeroBackground = {HeroBackground} heroH1 = {heroH1} heroP = {heroP} herobtn = {herobtn}/>
            <MainSection CategoryH2 = {CategoryH2} CategoryP = {CategoryP} categoryImg = {categoryImg} aboutImg = {aboutImg} aboutH2 = {aboutH2} aboutP = {aboutP} aboutCountCard1 = {aboutCountCard1} aboutCountCard2 = {aboutCountCard2} feedbackH2 = {feedbackH2} feedbackP = {feedbackP} feedbackImg = {feedbackImg} feedStrong = {feedStrong} feedbackReview = {feedbackReview} servicesH2 = {servicesH2} servicesP = {servicesP} servicesCard = {servicesCard}/>
            <Footer FooterFirstH2 = {FooterFirstH2} TopPropducts = {TopPropducts} FooterSecondH2 = {FooterSecondH2} address = {address} Phone = {Phone} FooterThirdH2 = {FooterThirdH2} NewsletterP = {NewsletterP} NewsletterInput = {NewsletterInput} NewsletterBtn = {NewsletterBtn}/>
        </React.Fragment>
    )
}

export default App;