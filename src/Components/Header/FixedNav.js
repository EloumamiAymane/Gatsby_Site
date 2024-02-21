import React from 'react'

const FixedNav = () => {
return (
<div class="sticky-header" style={{position:'fixed',top:'0px'}}>
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
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Nos
                                Missions</a>

                        </li>
                        <li id="menu-item-353"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-353 dropdown">
                            <a title="Company" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll=""
                                data-options="easing: easeOutQuart">Opportunités</a>

                        </li>
                        <li id="menu-item-354"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                            <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Projets</a>

                        </li>
                        <li id="menu-item-355"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                            <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Carrière
                                Professionnel</a>

                        </li>
                        <li id="menu-item-356"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                            <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Join Us</a>

                        </li>

                        <li id="menu-item-358"
                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                            <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                                aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Pages</a>

                        </li>

                    </ul>
                </div>
            </nav>

            <div class="btn-box">
                <a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/" class="theme-btn style-one">Join Us</a>
            </div>

        </div>
    </div>
</div>
)
}

export default FixedNav