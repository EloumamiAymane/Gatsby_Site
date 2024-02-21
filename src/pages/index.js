import  React, { useContext } from "react"
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
import ClickContext from "../Context/Context"
import Process from "./Process"
import Process1 from "./Process1"
import List from "./List"
import Faq from "./Faq"



const IndexPage = () => {
  const {  click } = useContext(ClickContext);
  const mobile="mobile-menu-visible"
  return (
  
    <body class={`${click ? `home page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-1469 logged-in admin-bar wp-custom-logo menu-layer
    elementor-default elementor-kit-9 elementor-page elementor-page-1469 dialog-body dialog-buttons-body dialog-container 
    dialog-buttons-container customize-support e--ua-firefox ${mobile}`:'home page-template page-template-tpl-default-elementor page-template-tpl-default-elementor-php page page-id-1469 logged-in admin-bar wp-custom-logo menu-layer elementor-default elementor-kit-9 elementor-page elementor-page-1469 dialog-body dialog-buttons-body dialog-container  dialog-buttons-container customize-support e--ua-firefox'} `}
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
    {/* <Industry/> */}
    <Process/>
          {/* <Skill/> */}
          <List/>
    <Testimonials/>
    <Faq/>
   {/* <Case/> */}
   {/* <Fact/> */}
   <Process1/>
   <News/>
  
   {/* <Publicity/> */}
    </div>
    <Footer/>
    </div>
    </body>
 
  )
}

export default IndexPage

export const Head = () => <>
<title>Home Page</title>

</>
