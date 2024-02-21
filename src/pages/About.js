import  React, { useState } from "react"



const About = () => {
    const [activeTab, setActiveTab] = useState(0); // Initially set the active tab to 1
const [active,setActive]=useState("")
  const handleTabClick = (index) => {
    setActive("active-btn")
    setActiveTab(index); // Update the active tab when a tab button is clicked
  };
    return (
        <section class="elementor-section elementor-top-section elementor-element elementor-element-d216883 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="d216883" data-element_type="section">


            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-43a92fd" data-id="43a92fd" data-element_type="column">
                    <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-5831279 elementor-widget elementor-widget-naxly_about_company" data-id="5831279" data-element_type="widget" data-widget_type="naxly_about_company.default">
                            <div class="elementor-widget-container">

                                {/* <!-- about-section --> */}
                                <section class="about-section ">
                                    <div class="auto-container">
                                        <div class="tabs-box">
                                            <div class="tabs-content" id="content_block_01">
                                                {activeTab === 0 &&  <div class="tab active-tab " id="tab-0">
                                                    <div class="row clearfix">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 content-column">
                                                            <div class="content-box">
                                                                <div class="sec-title text-left">
                                                                    <p>Reseaux & Opportunités </p>
                                                                    <h2>Votre Carrière, Votre Réseau, Notre App!</h2>
                                                                    <div class="decor"style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}></div>
                                                                </div>
                                                                <div class="text">
                                                                    <p>Trouvez des opportunités professionnelles exclusives grâce à notre réseau d'entreprises partenaires, offrant des offres d'emploi adaptées à vos compétences et à votre formation spécifique à l'INSEA</p>
                                                                </div>
                                                                <ul class="list-item clearfix">
                                                                    <li><span class="dots"></span>Trouvez des offres d'emploi exclusives pour diplômés</li>
                                                                    <li><span class="dots"></span>Accédez à des opportunités ciblées selon vos compétences</li>
                                                                    <li><span class="dots"></span>Bénéficiez de la réputation de l'INSEA auprès d'employeurs</li>
                                                                    <li><span class="dots"></span>Connectez-vous directement avec des entreprises partenaires renommées</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-6 col-sm-12 inner-column">
                                                            <div class="inner-box">
                                                                <div class="video-inner"  style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-1.jpg)' }}>
                                                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="flaticon-play-button"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}
                                               
                                                {activeTab === 1 &&  <div class="tab active-tab" id="tab-1">
                                                <div class="row clearfix">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 content-column">
                                                            <div class="content-box">
                                                                <div class="sec-title text-left">
                                                                    <p>About Company</p>
                                                                    <h2>Vison is to bring the power of AI to every business</h2>
                                                                    <div class="decor" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}></div>
                                                                </div>
                                                                <div class="text">
                                                                    <p>As a solution providing company we offer a wide range of consulting, development &amp; quality services with 100% satisfaction.</p>
                                                                </div>
                                                                <ul class="list-item clearfix">
                                                                    <li><span class="dots"></span>Idea of denouncing pleasure &amp; praising</li>
                                                                    <li><span class="dots"></span>Ever undertakes laborious physical</li>
                                                                    <li><span class="dots"></span>Avoids a pain that produces no resultant</li>
                                                                    <li><span class="dots"></span>Great explorer of the real truth</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-6 col-sm-12 inner-column">
                                                            <div class="inner-box">
                                                                <div class="video-inner" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-1.jpg)' }}>
                                                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="flaticon-play-button"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> }
                                                {activeTab == 2 && <div class="tab active-tab " id="tab-2">
                                                    <div class="row clearfix">
                                                        <div class="col-lg-4 col-md-6 col-sm-12 content-column">
                                                            <div class="content-box">
                                                                <div class="sec-title text-left">
                                                                    <p>About Company</p>
                                                                    <h2>Vison is to bring the power of AI to every business</h2>
                                                                    <div class="decor" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}></div>
                                                                </div>
                                                                <div class="text">
                                                                    <p>As a solution providing company we offer a wide range of consulting, development &amp; quality services with 100% satisfaction.</p>
                                                                </div>
                                                                <ul class="list-item clearfix">
                                                                    <li><span class="dots"></span>Idea of denouncing pleasure &amp; praising</li>
                                                                    <li><span class="dots"></span>Ever undertakes laborious physical</li>
                                                                    <li><span class="dots"></span>Avoids a pain that produces no resultant</li>
                                                                    <li><span class="dots"></span>Great explorer of the real truth</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8 col-md-6 col-sm-12 inner-column">
                                                            <div class="inner-box">
                                                                <div class="video-inner" style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/video-1.jpg)' }}>
                                                                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" class="lightbox-image" data-caption=""><i class="flaticon-play-button"></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> } 
                                                
                                            </div>
                                            <div class="tab-btn-box">
                                                <ul class="tab-btns tab-buttons clearfix">
                                                    <li class={`${activeTab === 0 ? `tab-btn ${active} `:'tab-btn'} `} data-tab="#tab-0" onClick={() => handleTabClick(0)}><h4>Emplois INSEA</h4></li>
                                                    <li class={`${activeTab === 1 ? `tab-btn ${active} `:'tab-btn'} `} data-tab="#tab1" onClick={() => handleTabClick(1)}><h4>Carrière Dynamisée</h4></li>
                                                    <li class={`${activeTab === 2 ? `tab-btn ${active} `:'tab-btn'} `} data-tab="#tab-2" onClick={() => handleTabClick(2)}><h4>Réseau Gagnant</h4></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* <!-- about-section end --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About