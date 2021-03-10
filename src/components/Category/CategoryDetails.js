import React from 'react';

const CategoryDetails = ({categories}) => {
    const {catImg, image, title, quantity} = categories;
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-30">
                <div className="categories-items">
                    <div className="cate-images">
                        <a href="#"><img src={catImg} alt="" /></a>
                    </div>
                    <div className="contents">
                        <div className="img-part">
                            <img src={image} alt="" />
                        </div>
                        <div className="content-wrap">
                            <h2 className="title"><a href="#">{title}</a></h2>
                            <span className="course-qnty">{quantity} Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryDetails;