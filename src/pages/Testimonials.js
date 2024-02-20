import React, { useEffect, useState } from 'react'
import Owl from './Owl'

const Testimonials = () => {
    const [randomImage, setRandomImage] = useState(null);
    const [paragraphs, setParagraphs] = useState();

  // List of image URLs
  const images = [
    "https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-9.png?resize=250%2C312&amp;ssl=1",
    "https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-10.png?resize=250%2C312&amp;ssl=1",
    "https://i0.wp.com/naxly.wpcomstaging.com/wp-content/uploads/2020/03/testimonial-10.png?resize=250%2C312&amp;ssl=1",
  ];
  const paragraphsArray = [
    "As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data",
    "As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data",
    "As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data",
  ];
    useEffect(() => {
      // Automatically switch images every 5 seconds
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
         setRandomImage(images[randomIndex]);
         setParagraphs(paragraphsArray[randomIndex])
         // Apply animation class
    


    
      }, 5000);
  
      return () => {clearInterval(interval)} // Clear the interval on component unmount
    }, []); // Run this effect only once when the component mounts
  
  
  
return (
<section
    class="elementor-section elementor-top-section elementor-element elementor-element-d73fb65 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
    data-id="d73fb65" data-element_type="section">

    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-29d4db1"
            data-id="29d4db1" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-a8a426a elementor-widget elementor-widget-naxly_testimonials_v1"
                    data-id="a8a426a" data-element_type="widget" data-widget_type="naxly_testimonials_v1.default">
                    <div class="elementor-widget-container">

                        <section class="testimonial-section ">
                            <div class="pattern-layer">
                                <div class="pattern-1"
                                    style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-5.png)' }}>
                                </div>
                                <div class="pattern-2"
                                    style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/uploads/2020/03/shape-6.png)' }}>
                                </div>
                            </div>
                            <div class="auto-container">
                                <div class="upper-box clearfix">
                                    <div class="sec-title text-left pull-left">
                                        <p>Testimonials</p>
                                        <h2>What say our clients about our awesome service</h2>
                                        <div class="decor"
                                            style={{ backgroundImage: 'url(https://naxly.wpcomstaging.com/wp-content/themes/naxly/assets/images/icons/decor-1.png)' }}>
                                        </div>
                                    </div>
                                    <div class="btn-box pull-right">
                                        <a href="http://el.commonsupport.com/newwp/naxly/get-in-touch/"
                                            class="theme-btn style-three">Send Your Review<span>+</span></a>
                                    </div>
                                </div>
                                <div
                                    class="testimonial-carousel owl-carousel owl-theme owl-dots-none owl-loaded owl-drag">

                                    <div class="owl-stage-outer">
                                        <div class="owl-stage"
                                            style={{ transform: 'translate3d(-2340px, 0px, 0px)', transition: 'all 0s ease 0s', width: '8190px'}}>
                              {images.map((imageUrl, index) => (
                                
                                            <Owl src={randomImage} paragraph={paragraphs} />
                                           
                                            ))}
                                        </div>
                                    </div>
                                    <div class="owl-nav">
                                        <div class="owl-prev"><span class="flaticon-left"></span></div>
                                        <div class="owl-next"><span class="flaticon-arrow"></span></div>
                                    </div>
                                    <div class="owl-dots">
                                        <div class="owl-dot active"><span></span></div>
                                        <div class="owl-dot"><span></span></div>
                                        <div class="owl-dot"><span></span></div>
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

export default Testimonials