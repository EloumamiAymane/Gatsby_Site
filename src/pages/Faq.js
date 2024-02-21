import React, { useState } from 'react'

const Faq = () => {
    const [activeTab, setActiveTab] = useState(0); // Initially set the active tab to 1
   
      const handleTabClick = (index) => {
       
        setActiveTab(index); // Update the active tab when a tab button is clicked
      };
return (
<section
    class="elementor-section elementor-top-section elementor-element elementor-element-05374c9 elementor-section-full_width elementor-section-height-default elementor-section-height-default">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-row">
            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-056ecb6"
                data-id="056ecb6" data-element_type="column">
                <div class="elementor-column-wrap elementor-element-populated">
                    <div class="elementor-widget-wrap">
                        <div class="elementor-element elementor-element-03dafa0 elementor-widget elementor-widget-naxly_our_faqs"
                            data-id="03dafa0" data-element_type="widget" data-widget_type="naxly_our_faqs.default">
                            <div class="elementor-widget-container">

                                <section class="faq-page-section ">
                                    <div class="auto-container">
                                        <div class="content-box-one">
                                            <div class="row clearfix">
                                                <div class="col-lg-4 col-md-6 col-sm-12 left-column">
                                                    <div class="inner-box">
                                                        <div class="icon-box"><i class="icon flaticon-analytics"></i>
                                                        </div>
                                                        <span>Frequent Questions in</span>
                                                        <h3>Artificial Intelligence</h3>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-md-6 col-sm-12 right-column">
                                                    <div class="accordion-block">
                                                        <ul class="accordion-box">
                                                            <li class="accordion block">
                                                                <div class="acc-btn">
                                                                    <div class="icon-outer"><i class="fas fa-plus" onClick={()=>{handleTabClick(0)}}></i>
                                                                    </div>
                                                                    <h5>Can i have multiple activities in single
                                                                        feature?</h5>
                                                                </div>
                                                                <div class="acc-content current"
                                                                    style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                                                                    <p>These cases are perfectly simple and easy to
                                                                        distinguish. In a free hour, when our power
                                                                        choice is untrammelled and when nothing prevents
                                                                        our being able do what we like best, every
                                                                        pleasure is to be welcomed and every pain
                                                                        avoided.</p>
                                                                </div>
                                                            </li>
                                                            <li class="accordion block">
                                                                <div class="acc-btn">
                                                                    <div class="icon-outer"><i class="fas fa-plus"  onClick={()=>{handleTabClick(1)}}></i>
                                                                    </div>
                                                                    <h5>Why focus on Data Science?</h5>
                                                                </div>
                                                                <div class="acc-content "  style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                                                                    <p>These cases are perfectly simple and easy to
                                                                        distinguish. In a free hour, when our power
                                                                        choice is untrammelled and when nothing prevents
                                                                        our being able do what we like best, every
                                                                        pleasure is to be welcomed and every pain
                                                                        avoided.</p>
                                                                </div>
                                                            </li>
                                                            <li class="accordion block">
                                                                <div class="acc-btn">
                                                                    <div class="icon-outer"><i class="fas fa-plus"  onClick={()=>{handleTabClick(2)}}></i>
                                                                    </div>
                                                                    <h5>What is the difference between a Data Scientist,
                                                                        Data Analyst?</h5>
                                                                </div>
                                                                <div class="acc-content "  style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                                                                    <p>These cases are perfectly simple and easy to
                                                                        distinguish. In a free hour, when our power
                                                                        choice is untrammelled and when nothing prevents
                                                                        our being able do what we like best, every
                                                                        pleasure is to be welcomed and every pain
                                                                        avoided.</p>
                                                                </div>
                                                            </li>
                                                            <li class="accordion block active-block">
                                                                <div class="acc-btn active">
                                                                    <div class="icon-outer"><i class="fas fa-plus"  onClick={()=>{handleTabClick(3)}}></i>
                                                                    </div>
                                                                    <h5>What are the payment options for the naxly?</h5>
                                                                </div>
                                                                <div class="acc-content "  style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                                                                    <p>These cases are perfectly simple and easy to
                                                                        distinguish. In a free hour, when our power
                                                                        choice is untrammelled and when nothing prevents
                                                                        our being able do what we like best, every
                                                                        pleasure is to be welcomed and every pain
                                                                        avoided.</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
)
}

export default Faq