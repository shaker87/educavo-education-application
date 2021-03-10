import React, { useState } from "react";
import icon3 from "../../images/features/icon/3.png";
import icon2 from "../../images/features/icon/2.png";
import icon1 from "../../images/features/icon/1.png";
import Loader from "../Loader/Loader";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SingleSlider from "./SingleSlider";
import SearchBox from "../Seachbox/SearchBox";
import MainHeader from "../Header/MainHeader";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Slider = () => {
  const sliderPart = [
    {
      paragraph: "Start to learning today",
      heading: "Online Courses From Leading Experts",
      linkText: "Find Courses",
    },
    {
      paragraph: "Start to learning today",
      heading: "Online Courses From Leading Experts",
      linkText: "Find Courses",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const onClickHandler = (swiper) => {
    if (swiper.clickedSlide) {
      if (swiper.clickedSlide.attributes) {
        let a = swiper.clickedSlide.attributes.getNamedItem(
          "data-swiper-slide-index"
        ).value;
        setSlideIndex(a);
      }
    }
  };
  return (
    <>
      <Loader></Loader>
      <MainHeader></MainHeader>
      <SearchBox></SearchBox>
      <div className='rs-slider main-home'>
        <div className='row'>
          <div className='col-md-12'>
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              onClick={(swiper) => onClickHandler(swiper)}
              onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
            >
              {sliderPart.map((slide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <SingleSlider totalData={slide} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* <div
          className='rs-carousel owl-carousel'
          data-loop='true'
          data-items='1'
          data-margin='0'
          data-autoplay='true'
          data-hoverpause='true'
          data-autoplay-timeout='5000'
          data-smart-speed='800'
          data-dots='false'
          data-nav='false'
          data-nav-speed='false'
          data-center-mode='false'
          data-mobile-device='1'
          data-mobile-device-nav='false'
          data-mobile-device-dots='false'
          data-ipad-device='1'
          data-ipad-device-nav='false'
          data-ipad-device-dots='false'
          data-ipad-device2='1'
          data-ipad-device-nav2='false'
          data-ipad-device-dots2='false'
          data-md-device='1'
          data-md-device-nav='true'
          data-md-device-dots='false'
        >
          <div className='slider-content slide1'>
            <div className='container'>
              <div className='content-part'>
                <div
                  className='sl-sub-title wow bounceInLeft'
                  data-wow-delay='300ms'
                  data-wow-duration='2000ms'
                >
                  Start to learning today
                </div>
                <h1
                  className='sl-title wow fadeInRight'
                  data-wow-delay='600ms'
                  data-wow-duration='2000ms'
                >
                  Online Courses From Leading Experts
                </h1>
                <div
                  className='sl-btn wow fadeInUp'
                  data-wow-delay='900ms'
                  data-wow-duration='2000ms'
                >
                  <a className='readon orange-btn main-home' href='#'>
                    Find Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-content slide2'>
            <div className='container'>
              <div className='content-part'>
                <div
                  className='sl-sub-title wow bounceInLeft'
                  data-wow-delay='300ms'
                  data-wow-duration='2000ms'
                >
                  Start to learning today
                </div>
                <h1
                  className='sl-title wow fadeInRight'
                  data-wow-delay='600ms'
                  data-wow-duration='2000ms'
                >
                  Explore Interests and Career With Courses
                </h1>
                <div
                  className='sl-btn wow fadeInUp'
                  data-wow-delay='900ms'
                  data-wow-duration='2000ms'
                >
                  <a className='readon orange-btn main-home' href='#'>
                    Find Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='rs-features' className='rs-features main-home'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-12 md-mb-30'>
                <div className='features-wrap'>
                  <div className='icon-part'>
                    <img src={icon3} alt='' />
                  </div>
                  <div className='content-part'>
                    <h4 className='title'>
                      <span className='watermark'>5,320 online courses</span>
                    </h4>
                    <p className='dese'>Enjoy a variety of fresh topics</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 md-mb-30'>
                <div className='features-wrap'>
                  <div className='icon-part'>
                    <img src={icon2} alt='' />
                  </div>
                  <div className='content-part'>
                    <h4 className='title'>
                      <span className='watermark'>Expert instruction</span>
                    </h4>
                    <p className='dese'>Find the right instructor</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12'>
                <div className='features-wrap'>
                  <div className='icon-part'>
                    <img src={icon1} alt='' />
                  </div>
                  <div className='content-part'>
                    <h4 className='title'>
                      <span className='watermark'>Lifetime access</span>
                    </h4>
                    <p className='dese'>Learn on your schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Slider;
