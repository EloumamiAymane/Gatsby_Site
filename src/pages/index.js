import * as React from "react"
import Header from "./Header"
import MainPage from "./MainPage"
import FirstMenu from "./FirstMenu"
import Mobile from "./Mobile"
import About from "./About"
import Work from "./Work"
import Industry from "./Industry"
import Skill from "./Skill"
import Testimonials from "./Testimonials"
import Case from "./Case"
import Fact from "./Fact"
import News from "./News"
import Publicity from "./Publicity"
import Footer from "./Footer"
import Preloader from "./Preloader"

import { withPrefix } from "gatsby"
import Scroll from "./Scroll"
import Search from "./Search"
import { Helmet } from "react-helmet"



const IndexPage = () => {
  return (
    <body class="home page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-1469 logged-in admin-bar wp-custom-logo menu-layer
     elementor-default elementor-kit-9 elementor-page elementor-page-1469 dialog-body dialog-buttons-body dialog-container 
     dialog-buttons-container customize-support e--ua-firefox"
     data-elementor-device-mode="desktop"
     style={{ overflow: 'visible' }}
     >
   <div class="n-stan">
    {/* <Preloader/> */}
    <Scroll/>
    <Search/> 
     <Header></Header>
    <Mobile/>
    <div class="elementor elementor-1469" data-elementor-type="wp-page" data-elementor-id="1469"> 
    <MainPage/>
    
    <FirstMenu/>
    <About/>
    <Work/>
    <Industry/>
    <Skill/>
    <Testimonials/>
   <Case/>
   <Fact/>
   <News/>
   <Publicity/>
    </div>
    <Footer/>
    </div>
    </body>
  )
}

export default IndexPage

export const Head = () => <>
<title>Home Page</title>
<Helmet>
{/* <script src={withPrefix("../js/script.js")} type="text/javascript" /> */}
</Helmet>
</>
