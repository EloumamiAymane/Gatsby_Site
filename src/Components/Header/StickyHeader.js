import React from 'react'
import Navbar from './Navbar'

const StickyHeader = () => {
return (
<div class="auto-container">
    <div class="row clearfix">
        <div class="col-lg-3 col-md-12 col-sm-12 logo-column">
            <div class="logo-box style-two">
                <figure class="logo"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                            src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/04/logo_DS.png" alt="logo"
                            style={{ width: '160px', height: '45px' }} /></a></figure>
            </div>
        </div>
        <div class="col-lg-9 col-md-12 col-sm-12 outer-column">
            <div class="outer-box">
                <div class="header-top clearfix">
                    <div class="top-right pull-right clearfix">
                        <div class="support"><i class="flaticon-music"></i><span>Start your project today</span><span
                               >&nbsp;&nbsp;&nbsp;+00-555-67-890</span></div>

                        <ul class="social-links clearfix">
                            <li><a href="https://www.facebook.com/"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' }}><i
                                        class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.skype.com/"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' }}><i
                                        class="fab fa-skype"></i></a></li>
                            <li><a href="https://www.twitter.com/"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' }}><i
                                        class="fab fa-twitter"></i></a></li>
                        </ul>

                        <div class="search-box-outer">
                            <form action="https://naxly.wpcomstaging.com/" method="post" class="search-btn">
                                <button type="button" class="search-toggler"><i
                                        class="flaticon-search"></i>Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="header-upper clearfix">
                    <div class="menu-area pull-right clearfix">
                        {/*
                        <!--Mobile Navigation Toggler--> */}
                        <div class="mobile-nav-toggler">
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                        </div>
                        <Navbar />

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StickyHeader