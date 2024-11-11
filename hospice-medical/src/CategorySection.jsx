import React from "react";
import "./style.css"


const CategorySection = (props) =>{
    const CategoryH2 = props.CategoryH2
    const CategoryP = props.CategoryP
    const categoryImg = props.categoryImg
    return(
        <React.Fragment>
            <section className="py-5 container text-center category">
                <h2 className="pt-5">{CategoryH2}</h2>
                <p className="pb-5">{CategoryP}</p>
                <section className="row py-5">
                {
                    categoryImg.map(function(item,index){
                        return(
                            <div className="col-12 col-lg-4 px-3 py-3">
                                <div className="category-card">
                                    <img id="category-img" className="img-fluid" src={item.imgPath} alt="category-img" />
                                    <div className="category-caption">
                                        <div className="text">
                                            <div className="border-line mb-2"></div>
                                            <a href="#"><h3>{item.caption}</h3></a>
                                            <div className="border-line"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </section>
            </section>
        </React.Fragment>
    )
}

export default CategorySection