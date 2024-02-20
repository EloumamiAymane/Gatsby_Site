import React, { useEffect, useState } from 'react'

const Owl = ({src,paragraph}) => {
    const [animationClass, setAnimationClass] = useState("animated owl-animated-out fadeOut");

    useEffect(() => {
      // Apply animation class on component mount or when props change
      setAnimationClass("animated owl-animated-out fadeOut");
  
      // Remove animation class after 1 second
      const timeout = setTimeout(() => {
        setAnimationClass("");
      }, 100);
  
      return () => clearTimeout(timeout); // Cleanup function to clear timeout
    }, [src, paragraph]); // Run this effect when src or paragraph prop changes
return (
<div className= { `owl-item ${animationClass}`} style={{ width: '1170px' }}>
    <div class="testimonial-content">
        <figure class="image-box"><img  width="250" height="312"
   
                src={src} />
        </figure>
        <div class="inner-box">
            <div class="icon-box"><i class="flaticon-null"></i></div>
            <div class="inner">
                <ul class="rating clearfix">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star-half-alt"></i></li>
                </ul>
                <div class="text">
                    <p>{paragraph}.</p>
                </div>
                <div class="author-info">
                    <h4>Watson Jsye</h4>
                    <span class="designation">CTO of Smart Tech
                        Solution</span>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Owl