import * as React from "react"
// import "../js/script"
import StickyHeader from "../Components/Header/StickyHeader"
import FixedNav from "../Components/Header/FixedNav"
// import "../js/scrollbar"
const Header = () => {
return (
<header class="main-header -one home-1 fixed-header">

    <StickyHeader />
    <FixedNav />

</header>
)
}

export default Header