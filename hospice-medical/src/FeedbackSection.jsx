import React from "react";
import "./style.css";
import { Rating, Typography } from "@mui/material";


const FeedbackSection = (props) =>{
    const feedbackImg = props.feedbackImg
    const feedbackH2 = props.feedbackH2
    const feedbackP = props.feedbackP
    const feedStrong = props.feedStrong
    const feedbackReview = props.feedbackReview
    return(
        <React.Fragment>
            <section className="feedback py-5">
                <section className="container my-5 py-5 feedback-details">
                    <h2 className="text-center py-3">{feedbackH2}</h2>
                    <p className="mx-auto text-center pb-5">{feedbackP}</p>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img className="w-100" src={feedbackImg} alt="feedbackImg"/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="review">
                                <strong>{feedStrong}<Rating className="ps-2" name="read-only" value={4} size="small" readOnly /></strong>
                                <p className="w-100 py-2">{feedbackReview}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default FeedbackSection;