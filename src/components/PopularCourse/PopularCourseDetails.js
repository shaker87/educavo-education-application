import React from 'react';

const PopularCourseDetails = ({course}) => {
    const {title, image, price, student, lessons} = course;
    return (
        <div class="col-lg-4 col-md-6">
        <div class="courses-item">
             <div class="courses-grid">
                 <div class="img-part">
                     <a href="#"><img src={image} alt="" /></a>
                 </div>
                 <div class="content-part">
                     <div class="info-meta">
                         <ul>                                                
                             <li class="ratings">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 (1 rating)
                             </li>
                         </ul>
                     </div>
                     <div class="course-price">
                         <span class="price">${price}</span>
                     </div>
                     <h3 class="title"><a href="#">{title}</a></h3>
                     <ul class="meta-part">
                         <li class="user">
                             <i class="fa fa-user"></i>
                              {student} Students                                        
                         </li>
                         <li class="user">
                             <i class="fa fa-file"></i>
                            {lessons}Lessons                                        
                         </li>
                     </ul>
                 </div>
             </div>
        </div>
     </div>
    );
};

export default PopularCourseDetails;