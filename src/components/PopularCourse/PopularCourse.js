import React from 'react';
import { courseData } from './PopularCourseData';
import PopularCourseDetails from './PopularCourseDetails';



const PopularCourse = () => {

    return (
        <>
            <div id="rs-popular-courses" className="rs-popular-courses main-home event-bg pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="sec-title3 text-center mb-45">
                        <div className="sub-title">Select Courses</div>
                        <h2 className="title black-color">Explore Popular Courses</h2>
                    </div>
                    <div className="row">
                       {
                           courseData.map(course => <PopularCourseDetails course={course}></PopularCourseDetails>)
                       }
                    </div>
                </div>
            </div>
           </>
    );
};

export default PopularCourse;