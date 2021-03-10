import React from 'react';
import darklogo from '../../images/dark-logo.png';
import lightlogo from '../../images/lite-logo.png';
import s1 from '../../images/shop/1.jpg';
import s2 from '../../images/shop/2.jpg';



const MainHeader = () => {
    
    return (
        <>
            <div className="full-width-header home8-style4 main-home">

                <header id="rs-header" className="rs-header">

                    <div className="menu-area menu-sticky">
                        <div className="container">
                            <div className="row y-middle">
                                <div className="col-lg-2">
                                    <div className="logo-cat-wrap">
                                        <div className="logo-part">
                                            <a href="index.html">
                                                <img className="normal-logo" src={darklogo} alt="" srcset="" />
                                                <img className="sticky-logo" src={lightlogo} alt="" srcset="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 text-right">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <div className="mobile-menu">
                                                <a className="rs-menu-toggle">
                                                    <i className="fa fa-bars"></i>
                                                </a>
                                            </div>
                                            <nav className="rs-menu">
                                                <ul className="nav-menu">
                                                    <li className="rs-mega-menu mega-rs menu-item-has-children current-menu-item"> <a href="index.html">Home</a>
                                                        <ul className="mega-menu">
                                                            <li className="mega-menu-container">
                                                                <div className="mega-menu-innner">
                                                                    <div className="single-megamenu">
                                                                        <ul className="sub-menu">
                                                                            <li className="active"><a href="index.html">Main Demo</a> </li>
                                                                            <li><a href="index2.html">Online Course</a> </li>
                                                                            <li><a href="index3.html">University 01</a> </li>
                                                                            <li><a href="index4.html">E-Learning</a> </li>
                                                                            <li><a href="index5.html">Distance Learning</a> </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="single-megamenu">
                                                                        <ul className="sub-menu last-sub-menu">
                                                                            <li><a href="index6.html">Personal Demo</a> </li>
                                                                            <li><a href="index7.html">Online Training</a> </li>
                                                                            <li><a href="index8.html">Online Learning</a> </li>
                                                                            <li><a href="index9.html">Kitchen Coach</a> </li>
                                                                            <li><a href="index10.html">University 02</a> </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="single-megamenu">
                                                                        <ul className="sub-menu last-sub-menu">
                                                                            <li><a href="index11.html">Kindergarten 01</a> </li>
                                                                            <li><a href="index12.html">Freelancing Course</a> </li>
                                                                            <li><a href="index13.html">Gym Coach</a> </li>
                                                                            <li><a href="index14.html">Courses Archive</a> </li>
                                                                            <li><a href="#">Coming Soon</a> </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a href="#">About</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="about.html">About One</a> </li>
                                                            <li><a href="about2.html">About Two</a> </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item-has-children">
                                                        <a href="#">Courses</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="course.html">Courses One</a> </li>
                                                            <li><a href="course2.html">Courses Two</a> </li>
                                                            <li><a href="course3.html">Courses Three</a> </li>
                                                            <li><a href="course4.html">Courses Four</a>
                                                            </li>
                                                            <li><a href="course5.html">Courses Five</a> </li>
                                                            <li><a href="course-single.html">Courses Single</a> </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item-has-children">
                                                        <a href="#">Pages</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item-has-children right">
                                                                <a href="#">Team</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="team.html">Team One</a></li>
                                                                    <li><a href="team2.html">Team Two</a></li>
                                                                    <li><a href="team-single.html">Team Single</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Event</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="events-style1.html">Event One</a></li>
                                                                    <li><a href="events-style2.html">Event Two</a></li>
                                                                    <li><a href="events-style3.html">Event Three</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Gallery</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="gallery-style1.html">Gallery One</a></li>
                                                                    <li><a href="gallery-style2.html">Gallery Two</a></li>
                                                                    <li><a href="gallery-style3.html">Gallery Three</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Shop</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="shop.html">Shop</a></li>
                                                                    <li><a href="shop-single.html">Shop Single</a></li>
                                                                    <li><a href="cart.html">Cart</a></li>
                                                                    <li><a href="checkout.html">Checkout</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Others</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="faq.html">FAQ</a></li>
                                                                    <li><a href="error.html">404 Page</a></li>
                                                                    <li><a href="login.html">Login</a></li>
                                                                    <li><a href="register.html">Register</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item-has-children">
                                                        <a href="#">Blog</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Blog Sidebar</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="blog-left.html">Blog Left Sidebar</a></li>
                                                                    <li><a href="blog-right.html">Blog Right Sidebar</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Single Post</a>
                                                                <ul className="sub-menu right">
                                                                    <li><a href="blog-post-left.html">Post Left Sidebar</a></li>
                                                                    <li><a href="blog-post-right.html">Post Right Sidebar</a></li>
                                                                    <li><a href="blog-single.html">Full Width Post</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                    <li className="menu-item-has-children">
                                                        <a href="#">Contact</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="contact.html">Contact One</a> </li>
                                                            <li><a href="contact2.html">Contact Two</a> </li>
                                                            <li><a href="contact3.html">Contact Three</a> </li>
                                                            <li><a href="contact4.html">Contact Four</a> </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-2 text-right">
                                    <div className="expand-btn-inner">
                                        <ul>

                                            <li>
                                                <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                                                    <i className="flaticon-search"></i>
                                                </a>
                                            </li>
                                            <li className="user-icon cart-inner no-border mini-cart-active">
                                                <a href="#"><i className="fa fa-shopping-bag"></i></a>
                                                <div className="woocommerce-mini-cart text-left">
                                                    <div className="cart-bottom-part">
                                                        <ul className="cart-icon-product-list">
                                                            <li className="display-flex">
                                                                <div className="icon-cart">
                                                                    <a href="#"><i className="fa fa-times"></i></a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <a href="cart.html">Law Book</a><br />
                                                                    <span className="quantity">1 × $30.00</span>
                                                                </div>
                                                                <div className="product-image">
                                                                    <a href="cart.html"><img src={s1} alt="Product Image" /></a>
                                                                </div>
                                                            </li>
                                                            <li className="display-flex">
                                                                <div className="icon-cart">
                                                                    <a href="#"><i className="fa fa-times"></i></a>
                                                                </div>
                                                                <div className="product-info">
                                                                    <a href="cart.html">Spirit Level</a><br />
                                                                    <span className="quantity">1 × $30.00</span>
                                                                </div>
                                                                <div className="product-image">
                                                                    <a href="cart.html"><img src={s2} alt="Product Image" /></a>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                        <div className="total-price text-center">
                                                            <span className="subtotal">Subtotal:</span>
                                                            <span className="current-price">$85.00</span>
                                                        </div>

                                                        <div className="cart-btn text-center">
                                                            <a className="crt-btn btn1" href="cart.html">View Cart</a>
                                                            <a className="crt-btn btn2" href="checkout.html">Check Out</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-icon last-icon">
                                                <a href="#"><i className="fa fa-user" aria-hidden="true"></i></a>
                                            </li>

                                        </ul>
                                        <span>
                                            <a id="nav-expander" className="nav-expander">
                                                <span className="dot1"></span>
                                                <span className="dot2"></span>
                                                <span className="dot3"></span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </header>
            </div>
        </>
    );
};

export default MainHeader;