import React, { useState } from 'react'

const Publicity = () => {
const [activeTab, setActiveTab] = useState(0); // Initially set the active tab to 1
const [active,setActive]=useState("")
const handleTabClick = (index) => {
setActive("active")
setActiveTab(index); // Update the active tab when a tab button is clicked
};
return (
<section
    class="elementor-section elementor-top-section elementor-element elementor-element-d73fb65 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="9a91dad" data-element_type="section">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9691677"
            data-id="9691677" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-0ed33e0 elementor-widget elementor-widget-naxly_our_clients"
                    data-id="0ed33e0" data-element_type="widget" data-widget_type="naxly_our_clients.default">
                    <div class="elementor-widget-container">
                        <section class="clients-section text-center">
                            <div class="pattern-layer"
                                style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-59.png)' }}>
                            </div>
                            <div class="image-layer">
                                <figure class="image-1 rotate-me">
                                    <img decoding="async"
                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/wheel-6.png?w=525&amp;ssl=1"
                                        alt="" width="249" height="243" /></figure>
                                <figure class="image-2 rotate-me">
                                    <img decoding="async"
                                        src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/wheel-7.png?w=525&amp;ssl=1"
                                        alt="" width="311" height="303" /></figure>
                            </div>
                            <div class="auto-container">
                                <div class="title-inner">
                                    <h2>Trusted by innovative companies</h2>
                                    <p>Always holds in these matters to this principle of selection: he rejects
                                        pleasures to secure other greater<br />pleasures, or else he endures pains to
                                        avoid</p>
                                </div>
                                <div class="clients-carousel owl-carousel owl-theme owl-nav-none owl-loaded owl-drag">
                                    <div class="owl-stage-outer">
                                        <div class="owl-stage" style={{
                                            transform: 'translate3d(-2104px, 0px, 0px)',
                                            transition: 'all 0s ease 0s',
                                            width: '5379px'
                                          }}>
                                            {activeTab ==0 && <>
                                                <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                    <figure class="logo-box"><a href="#">
                                                            <img decoding="async"
                                                                src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-1.png?w=525&amp;ssl=1"
                                                                alt="Awesome Image" width="170" height="35" /></a>
                                                    </figure>
                                                </div>
                                                <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                    <figure class="logo-box"><a href="#">
                                                            <img decoding="async"
                                                                src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-2.png?w=525&amp;ssl=1"
                                                                alt="Awesome Image" width="170" height="35" /></a>
                                                    </figure>
                                                </div>
                                                <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                    <figure class="logo-box">
                                                        <a href="#">
                                                            <img decoding="async"
                                                                src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-3.png?w=525&amp;ssl=1"
                                                                alt="Awesome Image" width="170" height="35" /></a>
                                                    </figure>
                                                </div>
                                                <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                    <figure class="logo-box"><a href="#">
                                                            <img decoding="async"
                                                                src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-5.png?w=525&amp;ssl=1"
                                                                alt="Awesome Image" width="170" height="35" /></a>
                                                    </figure>
                                                </div>
                                                <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                    <figure class="logo-box"><a href="#">
                                                            <img decoding="async"
                                                                src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-4.png?w=525&amp;ssl=1"
                                                                alt="Awesome Image" width="170" height="35" /></a>
                                                    </figure>
                                                </div>
                                            </>}
 



                                            <div class="owl-item active" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-5.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item active" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-1.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item active" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-2.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item active" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-3.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-5.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-4.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-1.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-1.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-2.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-3.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a>
                                                </figure>
                                            </div>
                                            <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-4.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                            <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-5.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a>
                                                </figure>
                                            </div>
                                            <div class="owl-item cloned" style={{ width: '233.84px' }}>
                                                <figure class="logo-box"><a href="#">
                                                        <img decoding="async"
                                                            src="https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/clients-logo-1.png?w=525&amp;ssl=1"
                                                            alt="Awesome Image" width="170" height="35" /></a></figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-nav disabled">
                                        <div class="owl-prev"><span class="flaticon-left"></span></div>
                                        <div class="owl-next"><span class="flaticon-right"></span></div>
                                    </div>
                                    <div class="owl-dots">
                                        <div class={`${activeTab===0 ? `owl-dot ${active} `:'owl-dot '} `} onClick={() => handleTabClick(0)}><span></span></div>
                                        <div  class={`${activeTab === 1 ? `owl-dot  ${active} `:' owl-dot '} `}onClick={() => handleTabClick(1)}><span></span></div>
                                        <div  class={`${activeTab === 2 ? `owl-dot  ${active} `:' owl-dot '} `}onClick={() => handleTabClick(2)}><span></span></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
)
}

export default Publicity