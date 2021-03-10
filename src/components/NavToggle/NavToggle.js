import React from 'react';
import darklogo from '../../images/dark-logo.png';
import g1 from '../../images/gallery/1.jpg';
import g2 from '../../images/gallery/2.jpg';
import g3 from '../../images/gallery/3.jpg';
import g4 from '../../images/gallery/4.jpg';
import g5 from '../../images/gallery/5.jpg';
import g6 from '../../images/gallery/6.jpg';

const NavToggle = () => {
    // const toggle = document.querySelector('.right_menu_togle')
   
    return (
        <nav className="right_menu_togle hidden-md">
            <div className="close-btn">
                <div id="nav-close">
                    <div className="line">
                        <span className="line1"></span><span className="line2"></span>
                    </div>
                </div>
            </div>
            <div className="canvas-logo">
                <a href="index.html"><img src={darklogo} alt="logo" /></a>
            </div>
            <div className="offcanvas-text">
                <p>We denounce with righteous indige nationality and dislike men who are so beguiled and demo  by the charms of pleasure of the moment data com so blinded by desire.</p>
            </div>
            <div className="offcanvas-gallery">
                <div className="gallery-img">
                    <a className="image-popup" href="assets/images/gallery/1.jpg"><img src={g1} alt="" /></a>
                </div>
                <div className="gallery-img">
                    <a className="image-popup" href="assets/images/gallery/2.jpg"><img src={g2} alt="" /></a>
                </div>
                <div className="gallery-img">
                    <a className="image-popup" href="assets/images/gallery/3.jpg"><img src={g3} alt="" /></a>
                </div>
                <div className="gallery-img">
                    <a className="image-popup" href="assets/images/gallery/4.jpg"><img src={g4} alt="" /></a>
                </div>
                <div className="gallery-img">
                    <a className="image-popup" href="assets/images/gallery/5.jpg"><img src={g5} alt="" /></a>
                </div>
                <div className="gallery-img">
                    <a className="image-popup" href="assets/images/gallery/6.jpg"><img src={g6} alt="" /></a>
                </div>
            </div>
            <div className="map-img">
                <img src="assets/images/map.jpg" alt="" />
            </div>
            <div className="canvas-contact">
                <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavToggle;