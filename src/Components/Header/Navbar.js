import { Link } from 'gatsby';
import React, { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
          const mainHeader = document.querySelector('.main-header');
          const scrollLink = document.querySelector('.scroll-top');
          if (mainHeader) {
            const windowpos = window.scrollY || window.pageYOffset;
            if (windowpos >= 110) {
              mainHeader.classList.add('fixed-header');
              scrollLink.classList.add('open');
            } else {
              mainHeader.classList.remove('fixed-header');
              scrollLink.classList.remove('open');
            }
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up event listener on unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
return (
   
 <nav class="main-menu navbar-expand-md navbar-light" id='x' style={{position:'relative',right:'100px'}} >
    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
        <ul class="navigation clearfix">
            <li id="menu-item-15"
                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-15 dropdown current">
                <Link title="Home" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false"
                    data-scroll="" data-options="easing: easeOutQuart">Nos Missions </Link>
               
                <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>
            </li>
           
          <li id="menu-item-354"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-354 dropdown">
                <a title="Services" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                    aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Opportunités </a>
               
            </li>
            <li id="menu-item-355"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-355 dropdown">
                <a title="Works" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false"
                    data-scroll="" data-options="easing: easeOutQuart">Projets </a>
              
            </li>
            <li id="menu-item-356"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-356 dropdown">
                <a title="Blog" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false"
                    data-scroll="" data-options="easing: easeOutQuart">Carrière </a>
               
            </li>  
            <li id="menu-item-357"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-357 dropdown">
                <a title="Elements" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1"
                    aria-expanded="false" data-scroll="" data-options="easing: easeOutQuart">Join Us</a>
              
            </li> 
            <li id="menu-item-358"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-358 dropdown">
                <a title="Pages" href="#" data-toggle="dropdown1" class="hvr-underline-from-left1" aria-expanded="false"
                    data-scroll="" data-options="easing: easeOutQuart">Pages</a>

            </li>
         

            
        </ul>
        
      
    </div>
    
</nav> 

)
}

export default Navbar