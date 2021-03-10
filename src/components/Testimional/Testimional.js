import React from "react";
import test2 from '../../images/testimonial/main-home/test-2.png';
import style51 from '../../images/testimonial/style5/1.png';
import style52 from '../../images/testimonial/style5/2.png';
import style53 from '../../images/testimonial/style5/3.png';

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";
import SingleTestimonial from "./SingleTestimonial";

function Testimional() {
    const totalData =[
        {
            image1: test2,
            description: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
            image2:style51 ,
            linkText: ' Mahadi Monsura',
            spanText: "Student"
        },
        {
            image1: test2,
            description: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
            image2:style52 ,
            linkText: 'Alex Fenando',
            spanText: "English Teacher"
        },
        {
            image1: test2,
            description: "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company.",
            image2:style53 ,
            linkText: 'Losis Dcosta',
            spanText: "Math Teacher"
        },
    ]
    const [slideIndex, setSlideIndex] = React.useState(0);

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
    <section>
      <div class='rs-testimonial main-home pt-100 pb-100 md-pt-70 md-pb-70'>
        <div class='container'>
          <div class='sec-title3 mb-50 md-mb-30 text-center'>
            <div class='sub-title primary'>Testimonial</div>
            <h2 class='title white-color'>What Students Saying</h2>
          </div>
          <div className="row">
              <div className="col-md-12">
              <Swiper
              spaceBetween={5}
              slidesPerView={2}
              // navigation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              onClick={(swiper) => onClickHandler(swiper)}
              onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
            >
              {totalData.map((singleData, i) => {
                return (
                  <SwiperSlide key={i}>
                    <SingleTestimonial singleData={singleData} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
              </div>
          </div>
          {/* <div
            class='rs-carousel owl-carousel'
            data-loop='true'
            data-items='2'
            data-margin='30'
            data-autoplay='true'
            data-hoverpause='true'
            data-autoplay-timeout='5000'
            data-smart-speed='800'
            data-dots='true'
            data-nav='false'
            data-nav-speed='false'
            data-md-device='2'
            data-md-device-nav='false'
            data-md-device-dots='true'
            data-center-mode='false'
            data-ipad-device2='1'
            data-ipad-device-nav2='false'
            data-ipad-device-dots2='true'
            data-ipad-device='2'
            data-ipad-device-nav='false'
            data-ipad-device-dots='true'
            data-mobile-device='1'
            data-mobile-device-nav='false'
            data-mobile-device-dots='false'
          >
            <div class='testi-item'>
              <div class='author-desc'>
                <div class='desc'>
                  <img
                    class='quote'
                    src='assets/images/testimonial/main-home/test-2.png'
                    alt=''
                  />
                  Professional, responsive, and able to keep up with
                  ever-changing demand and tight deadlines: That’s how I would
                  describe Jeramy and his team at The Lorem Ipsum Company. When
                  it comes to content marketing, you’ll definitely get the
                  5-star treatment from the Lorem Ipsum Company.
                </div>
                <div class='author-img'>
                  <img src='assets/images/testimonial/style5/1.png' alt='' />
                </div>
              </div>
              <div class='author-part'>
                <a class='name' href='#'>
                  Mahadi Monsura
                </a>
                <span class='designation'>Student</span>
              </div>
            </div>
            <div class='testi-item'>
              <div class='author-desc'>
                <div class='desc'>
                  <img
                    class='quote'
                    src='assets/images/testimonial/main-home/test-2.png'
                    alt=''
                  />
                  Professional, responsive, and able to keep up with
                  ever-changing demand and tight deadlines: That’s how I would
                  describe Jeramy and his team at The Lorem Ipsum Company. When
                  it comes to content marketing, you’ll definitely get the
                  5-star treatment from the Lorem Ipsum Company.
                </div>
                <div class='author-img'>
                  <img src='assets/images/testimonial/style5/2.png' alt='' />
                </div>
              </div>
              <div class='author-part'>
                <a class='name' href='#'>
                  Alex Fenando
                </a>
                <span class='designation'>English Teacher</span>
              </div>
            </div>
            <div class='testi-item'>
              <div class='author-desc'>
                <div class='desc'>
                  <img
                    class='quote'
                    src='assets/images/testimonial/main-home/test-2.png'
                    alt=''
                  />
                  Professional, responsive, and able to keep up with
                  ever-changing demand and tight deadlines: That’s how I would
                  describe Jeramy and his team at The Lorem Ipsum Company. When
                  it comes to content marketing, you’ll definitely get the
                  5-star treatment from the Lorem Ipsum Company.
                </div>
                <div class='author-img'>
                  <img src='assets/images/testimonial/style5/3.png' alt='' />
                </div>
              </div>
              <div class='author-part'>
                <a class='name' href='#'>
                  Losis Dcosta
                </a>
                <span class='designation'>Math Teacher</span>
              </div>
            </div>
            <div class='testi-item'>
              <div class='author-desc'>
                <div class='desc'>
                  <img
                    class='quote'
                    src='assets/images/testimonial/main-home/test-2.png'
                    alt=''
                  />
                  Professional, responsive, and able to keep up with
                  ever-changing demand and tight deadlines: That’s how I would
                  describe Jeramy and his team at The Lorem Ipsum Company. When
                  it comes to content marketing, you’ll definitely get the
                  5-star treatment from the Lorem Ipsum Company.
                </div>
                <div class='author-img'>
                  <img src='assets/images/testimonial/style5/1.png' alt='' />
                </div>
              </div>
              <div class='author-part'>
                <a class='name' href='#'>
                  Mahadi Monsura
                </a>
                <span class='designation'>Student</span>
              </div>
            </div>
            <div class='testi-item'>
              <div class='author-desc'>
                <div class='desc'>
                  <img
                    class='quote'
                    src='assets/images/testimonial/main-home/test-2.png'
                    alt=''
                  />
                  Professional, responsive, and able to keep up with
                  ever-changing demand and tight deadlines: That’s how I would
                  describe Jeramy and his team at The Lorem Ipsum Company. When
                  it comes to content marketing, you’ll definitely get the
                  5-star treatment from the Lorem Ipsum Company.
                </div>
                <div class='author-img'>
                  <img src='assets/images/testimonial/style5/2.png' alt='' />
                </div>
              </div>
              <div class='author-part'>
                <a class='name' href='#'>
                  Alex Fenando
                </a>
                <span class='designation'>English Teacher</span>
              </div>
            </div>
            <div class='testi-item'>
              <div class='author-desc'>
                <div class='desc'>
                  <img
                    class='quote'
                    src='assets/images/testimonial/main-home/test-2.png'
                    alt=''
                  />
                  Professional, responsive, and able to keep up with
                  ever-changing demand and tight deadlines: That’s how I would
                  describe Jeramy and his team at The Lorem Ipsum Company. When
                  it comes to content marketing, you’ll definitely get the
                  5-star treatment from the Lorem Ipsum Company.
                </div>
                <div class='author-img'>
                  <img src='assets/images/testimonial/style5/3.png' alt='' />
                </div>
              </div>
              <div class='author-part'>
                <a class='name' href='#'>
                  Losis Dcosta
                </a>
                <span class='designation'>Math Teacher</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Testimional;
