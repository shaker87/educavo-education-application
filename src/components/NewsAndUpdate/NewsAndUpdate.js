import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import image1 from "../../images/blog/style2/1.jpg"
import image2 from "../../images/blog/style2/2.jpg"
import image3 from "../../images/blog/style2/3.jpg"
import image4 from "../../images/blog/style2/4.jpg"
import SingleNewsAndUpdate from "./SingleNewsAndUpdate";

function NewsAndUpdate() {
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
  const newsAndUpdate = [
      {
          image: image1,
          user: 'Admin',
          date: 'December 15, 2020',
          title: 'Education is The Process of Facilitating Learning',
          description: 'the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling',

      },
      {
          image: image2,
          user: 'Admin',
          date: 'October 15, 2020',
          title: 'High school program starting soon 2021',
          description: 'the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling',

      },
      {
          image: image3,
          user: 'Admin',
          date: 'April 25, 2020',
          title: 'Shutdown of schools extended to Aug 31',
          description: 'the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling',

      },
      {
          image: image4,
          user: 'Admin',
          date: 'June 20, 2010',
          title: 'This is a great source of content for anyone…',
          description: 'the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling',

      },
      {
          image: image1,
          user: 'Admin',
          date: 'May 20, 2010',
          title: 'Modern School the lovely valley team work',
          description: 'the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling',

      },
  ]
  return (
    <section>
      <div
        id='rs-blog'
        class='rs-blog main-home pb-100 pt-100 md-pt-70 md-pb-70'
      >
        <div class='container'>
          <div class='sec-title3 text-center mb-50'>
            <div class='sub-title'> News Update</div>
            <h2 class='title'> Latest News & events</h2>
          </div>
          <div className="row">
              <div className="col-md-12">
              <Swiper
              spaceBetween={5}
              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              onClick={(swiper) => onClickHandler(swiper)}
              onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
            >
              {newsAndUpdate.map((singleData, i) => {
                return (
                  <SwiperSlide key={i}>
                    <SingleNewsAndUpdate singleData={singleData} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
              </div>
          </div>
          {/* <div
            class='rs-carousel owl-carousel'
            data-loop='true'
            data-items='3'
            data-margin='30'
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
            data-ipad-device='2'
            data-ipad-device-nav='false'
            data-ipad-device-dots='false'
            data-ipad-device2='1'
            data-ipad-device-nav2='false'
            data-ipad-device-dots2='false'
            data-md-device='3'
            data-md-device-nav='false'
            data-md-device-dots='false'
          >
            <div class='blog-item'>
              <div class='image-part'>
                <img src='assets/images/blog/style2/1.jpg' alt='' />
              </div>
              <div class='blog-content'>
                <ul class='blog-meta'>
                  <li>
                    <i class='fa fa-user-o'></i> Admin
                  </li>
                  <li>
                    <i class='fa fa-calendar'></i>December 15, 2020
                  </li>
                </ul>
                <h3 class='title'>
                  <a href='blog-single.html'>
                    Education is The Process of Facilitating Learning
                  </a>
                </h3>
                <div class='desc'>
                  the acquisition of knowledge, skills, values befs, and habits.
                  Educational methods include teach ing, training, storytelling
                </div>
                <div class='btn-btm'>
                  <div class='cat-list'>
                    <ul class='post-categories'>
                      <li>
                        <a href='#'>College</a>
                      </li>
                    </ul>
                  </div>
                  <div class='rs-view-btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='blog-item'>
              <div class='image-part'>
                <img src='assets/images/blog/style2/2.jpg' alt='' />
              </div>
              <div class='blog-content'>
                <ul class='blog-meta'>
                  <li>
                    <i class='fa fa-user-o'></i> Admin
                  </li>
                  <li>
                    <i class='fa fa-calendar'></i>October 15, 2020
                  </li>
                </ul>
                <h3 class='title'>
                  <a href='blog-single.html'>
                    High school program starting soon 2021{" "}
                  </a>
                </h3>
                <div class='desc'>
                  the acquisition of knowledge, skills, values befs, and habits.
                  Educational methods include teach ing, training, storytelling
                </div>
                <div class='btn-btm'>
                  <div class='cat-list'>
                    <ul class='post-categories'>
                      <li>
                        <a href='#'>College</a>
                      </li>
                    </ul>
                  </div>
                  <div class='rs-view-btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='blog-item'>
              <div class='image-part'>
                <img src='assets/images/blog/style2/3.jpg' alt='' />
              </div>
              <div class='blog-content'>
                <ul class='blog-meta'>
                  <li>
                    <i class='fa fa-user-o'></i> Admin
                  </li>
                  <li>
                    <i class='fa fa-calendar'></i>April 25, 2020
                  </li>
                </ul>
                <h3 class='title'>
                  <a href='blog-single.html'>
                    Shutdown of schools extended to Aug 31{" "}
                  </a>
                </h3>
                <div class='desc'>
                  the acquisition of knowledge, skills, values befs, and habits.
                  Educational methods include teach ing, training, storytelling
                </div>
                <div class='btn-btm'>
                  <div class='cat-list'>
                    <ul class='post-categories'>
                      <li>
                        <a href='#'>College</a>
                      </li>
                    </ul>
                  </div>
                  <div class='rs-view-btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='blog-item'>
              <div class='image-part'>
                <img src='assets/images/blog/style2/4.jpg' alt='' />
              </div>
              <div class='blog-content'>
                <ul class='blog-meta'>
                  <li>
                    <i class='fa fa-user-o'></i> Admin
                  </li>
                  <li>
                    <i class='fa fa-calendar'></i>June 20, 2010
                  </li>
                </ul>
                <h3 class='title'>
                  <a href='blog-single.html'>
                    This is a great source of content for anyone…{" "}
                  </a>
                </h3>
                <div class='desc'>
                  the acquisition of knowledge, skills, values befs, and habits.
                  Educational methods include teach ing, training, storytelling
                </div>
                <div class='btn-btm'>
                  <div class='cat-list'>
                    <ul class='post-categories'>
                      <li>
                        <a href='#'>College</a>
                      </li>
                    </ul>
                  </div>
                  <div class='rs-view-btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='blog-item'>
              <div class='image-part'>
                <img src='assets/images/blog/style2/5.jpg' alt='' />
              </div>
              <div class='blog-content'>
                <ul class='blog-meta'>
                  <li>
                    <i class='fa fa-user-o'></i> Admin
                  </li>
                  <li>
                    <i class='fa fa-calendar'></i>August 30, 2020
                  </li>
                </ul>
                <h3 class='title'>
                  <a href='blog-single.html'>
                    Pandemic drives millions from Latin America’s
                  </a>
                </h3>
                <div class='desc'>
                  the acquisition of knowledge, skills, values befs, and habits.
                  Educational methods include teach ing, training, storytelling
                </div>
                <div class='btn-btm'>
                  <div class='cat-list'>
                    <ul class='post-categories'>
                      <li>
                        <a href='#'>College</a>
                      </li>
                    </ul>
                  </div>
                  <div class='rs-view-btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class='blog-item'>
              <div class='image-part'>
                <img src='assets/images/blog/style2/6.jpg' alt='' />
              </div>
              <div class='blog-content'>
                <ul class='blog-meta'>
                  <li>
                    <i class='fa fa-user-o'></i> Admin
                  </li>
                  <li>
                    <i class='fa fa-calendar'></i>May 10, 2020
                  </li>
                </ul>
                <h3 class='title'>
                  <a href='blog-single.html'>
                    Modern School the lovely valley team work
                  </a>
                </h3>
                <div class='desc'>
                  the acquisition of knowledge, skills, values befs, and habits.
                  Educational methods include teach ing, training, storytelling
                </div>
                <div class='btn-btm'>
                  <div class='cat-list'>
                    <ul class='post-categories'>
                      <li>
                        <a href='#'>College</a>
                      </li>
                    </ul>
                  </div>
                  <div class='rs-view-btn'>
                    <a href='#'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default NewsAndUpdate;
