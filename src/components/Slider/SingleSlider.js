import React from "react";
import bg1 from "../../images/bg/bg1.png";

function SingleSlider(props) {
  const { paragraph, heading, linkText } = props.totalData;
  return (
    <div
      className='slider-content slide1'
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className='container'>
        <div className='content-part'>
          <div
            className='sl-sub-title wow bounceInLeft'
            data-wow-delay='300ms'
            data-wow-duration='2000ms'
          >
            {paragraph}
          </div>
          <h1
            className='sl-title wow fadeInRight'
            data-wow-delay='600ms'
            data-wow-duration='2000ms'
          >
            {heading}
          </h1>
          <div
            className='sl-btn wow fadeInUp'
            data-wow-delay='900ms'
            data-wow-duration='2000ms'
          >
            <a className='readon orange-btn main-home' href='#'>
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSlider;
