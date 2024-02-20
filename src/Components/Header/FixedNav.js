import React from 'react'

const FixedNav = () => {
return (
<div class="sticky-header">
    <div class="auto-container clearfix">
        <figure class="logo-box"><a href="https://naxly.wpcomstaging.com/" title="Titre du site"><img
                    src="https://naxly.wpcomstaging.com/wp-content/uploads/2020/04/logo_DS.png" alt="logo"
                    style={{ width:'100px',height:'30px',position:'relative',top:'8px' }} /></a></figure>
        <div class="menu-area">
            <nav class="main-menu clearfix" id='y'>

                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li id="menu-item-15"
                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                            <a title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Nos Missions</a>
                            {/* <ul role="menu" class="submenu">
                                <li id="menu-item-14"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1469 current_page_item menu-item-14 active">
                                    <a title="Data Science" href="https://naxly.wpcomstaging.com/">Data Science</a></li>
                                <li id="menu-item-117"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-117"><a
                                        title="Artificial intelligence"
                                        href="https://naxly.wpcomstaging.com/artificial-intelligence/">Artificial
                                        intelligence</a></li>
                                <li id="menu-item-209"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"><a
                                        title="Machine Learning"
                                        href="https://naxly.wpcomstaging.com/machine-learning/">Machine Learning</a>
                                </li>
                                <li id="menu-item-274"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-274"><a
                                        title="Business Intelligence"
                                        href="https://naxly.wpcomstaging.com/business-intelligence/">Business
                                        Intelligence</a></li>
                                <li id="menu-item-273"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-273"><a
                                        title="User Analysis" href="https://naxly.wpcomstaging.com/user-analysis/">User
                                        Analysis</a></li>
                                <li id="menu-item-361"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-361"><a
                                        title="Home Boxed" href="https://naxly.wpcomstaging.com/home-boxed/">Home
                                        Boxed</a></li>
                                <li id="menu-item-1242"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1242"><a
                                        title="Chatbot" href="https://naxly.wpcomstaging.com/chatbot/">Chatbot</a></li>
                                <li id="menu-item-1342"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1342"><a
                                        title="Mobile App" href="https://naxly.wpcomstaging.com/mobile-app/">Mobile
                                        App</a></li>
                                <li id="menu-item-1388"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1388"><a
                                        title="Sentiment Analysis"
                                        href="https://naxly.wpcomstaging.com/sentiment-analysis/">Sentiment Analysis</a>
                                </li>
                                <li id="menu-item-941"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-941"><a
                                        title="Home RTL" href="https://naxly.wpcomstaging.com/home-rtl/">Home RTL</a>
                                </li>
                                <li id="menu-item-940"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-940"><a
                                        title="Home OnePage" href="https://naxly.wpcomstaging.com/home-onepage/">Home
                                        OnePage</a></li>
                                <li id="menu-item-467"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-467 dropdown current">
                                    <a title="Header Styles" href="#">Header Styles</a>
                                    <ul role="menu" class="submenu">
                                        <li id="menu-item-473"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1469 current_page_item menu-item-473 active">
                                            <a title="Header Style One" href="https://naxly.wpcomstaging.com/">Header
                                                Style One</a></li>
                                        <li id="menu-item-472"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-472">
                                            <a title="Header Style Two"
                                                href="https://naxly.wpcomstaging.com/artificial-intelligence/">Header
                                                Style Two</a></li>
                                        <li id="menu-item-471"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-471">
                                            <a title="Header Style Three"
                                                href="https://naxly.wpcomstaging.com/machine-learning/">Header Style
                                                Three</a></li>
                                        <li id="menu-item-470"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-470">
                                            <a title="Header Style Four"
                                                href="https://naxly.wpcomstaging.com/business-intelligence/">Header
                                                Style Four</a></li>
                                        <li id="menu-item-469"
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-469">
                                            <a title="Header Style Five"
                                                href="https://naxly.wpcomstaging.com/user-analysis/">Header Style
                                                Five</a></li>
                                    </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
                                </li>
                            </ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div> */}
                        </li>
                        <li id="menu-item-353"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                            <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Opportunités</a>
                            {/* <ul role="menu" class="submenu">
                                <li id="menu-item-482"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-482"><a
                                        title="About Company" href="https://naxly.wpcomstaging.com/about-company/">About
                                        Company</a></li>
                                <li id="menu-item-500"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a
                                        title="Meet Our Team" href="https://naxly.wpcomstaging.com/meet-our-team/">Meet
                                        Our Team</a></li>
                                <li id="menu-item-511"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-511"><a
                                        title="Get In Touch" href="https://naxly.wpcomstaging.com/get-in-touch/">Get In
                                        Touch</a></li>
                            </ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div> */}
                        </li>
                        <li id="menu-item-354"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                            <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Projets</a>
                            {/* <ul role="menu" class="submenu">
                                <li id="menu-item-525"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-525"><a
                                        title="Our Services" href="https://naxly.wpcomstaging.com/our-services/">Our
                                        Services</a></li>
                                <li id="menu-item-703"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-703"><a
                                        title="Service Details"
                                        href="https://naxly.wpcomstaging.com/service-details/">Service Details</a></li>
                            </ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div> */}
                        </li>
                        <li id="menu-item-355"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                            <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Carrière Professionnel</a>
                            {/* <ul role="menu" class="submenu">
                                <li id="menu-item-550"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a
                                        title="Project 2 Columns"
                                        href="https://naxly.wpcomstaging.com/project-2-columns/">Project 2 Columns</a>
                                </li>
                                <li id="menu-item-570"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a
                                        title="Project 3 Columns"
                                        href="https://naxly.wpcomstaging.com/project-3-columns/">Project 3 Columns</a>
                                </li>
                                <li id="menu-item-588"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-588"><a
                                        title="Case Studies" href="https://naxly.wpcomstaging.com/case-studies/">Case
                                        Studies</a></li>
                                <li id="menu-item-1136"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1136"><a
                                        title="Case Details"
                                        href="http://el.commonsupport.com/newwp/naxly/naxly_project/baby-care-mobile-app/">Case
                                        Details</a></li>
                            </ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div> */}
                        </li>
                        <li id="menu-item-356"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                            <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Join Us</a>
                            {/* <ul role="menu" class="submenu">
                                <li id="menu-item-595"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a
                                        title="Classic Grid" href="https://naxly.wpcomstaging.com/classic-grid/">Classic
                                        Grid</a></li>
                                <li id="menu-item-623"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a
                                        title="Classic With S/B"
                                        href="https://naxly.wpcomstaging.com/classic-with-s-b/">Classic With S/B</a>
                                </li>
                                <li id="menu-item-632"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632"><a
                                        title="Modern With S/B"
                                        href="https://naxly.wpcomstaging.com/modern-with-s-b/">Modern With S/B</a></li>
                                <li id="menu-item-933"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-933"><a
                                        title="Single Post" href="http://el.commonsupport.com/newwp/naxly/?p=667">Single
                                        Post</a></li>
                            </ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div> */}
                        </li>
                    
                        <li id="menu-item-358"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                            <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Pages</a>
                            {/* <ul role="menu" class="submenu">
                                <li id="menu-item-672"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-672"><a
                                        title="404" href="http://el.commonsupport.com/newwp/naxly/?p=123456abc">404</a>
                                </li>
                                <li id="menu-item-675"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-675"><a
                                        title="Coming Soon" href="https://naxly.wpcomstaging.com/coming-soon/">Coming
                                        Soon</a></li>
                                <li id="menu-item-676"
                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-676"><a
                                        title="Faq’s" href="https://naxly.wpcomstaging.com/faqs/">Faq’s</a></li>
                            </ul>
                            <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div> */}
                        </li>
                        <li >
                    <button class="theme-btn style-one"   style={{ position:'relative',left:'38px' }} >Join Us</button>
               </li>
               
                    </ul>
                </div>
            </nav>

            {/* <div class="btn-box">
                <a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/" class="theme-btn style-one">Get in
                    Touch</a>
            </div> */}

        </div>
    </div>
</div>
)
}

export default FixedNav