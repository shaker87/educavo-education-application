import React from 'react';
import { categoryData } from './CategoryData';
import CategoryDetails from './CategoryDetails';

const Category = () => {
    return (
        <div>
            <div id="rs-categories" className="rs-categories main-home pt-90 pb-100 md-pt-60 md-pb-40">
                <div className="container">
                    <div className="sec-title3 text-center mb-45">
                        <div className="sub-title"> Top Categories</div>
                        <h2 className="title black-color">Popular Online Categories</h2>
                    </div>
                    <div className="row mb-35">
                        
                     {
                         categoryData.map(categories=> <CategoryDetails categories={categories}></CategoryDetails>)
                     }
                    </div>
                    <div className="col-lg-12 text-center">
                        <a className="readon orange-btn main-home" href="#">View All categories </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;