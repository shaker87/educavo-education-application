import React from 'react';
import Category from '../Category/Category';
import CTASection from '../CTASection/CTASection';
import FAQSection from '../FAQSection/FAQSection';
import Footer from '../Footer/Footer';
import NewsAndUpdate from '../NewsAndUpdate/NewsAndUpdate';
import NewsLeter from '../NewsLeter/NewsLeter';
import PopularCourse from '../PopularCourse/PopularCourse';
import Slider from '../Slider/Slider';
import Testimional from '../Testimional/Testimional';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Category></Category>
            <PopularCourse></PopularCourse>
            <CTASection></CTASection>
            <FAQSection></FAQSection>
            <Testimional></Testimional>
            <NewsAndUpdate></NewsAndUpdate>
            <NewsLeter></NewsLeter>
            <Footer></Footer>
        </>
    );
};

export default Home;