import React from 'react'

const Scroll = () => {
	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth",
		});
	  };
  return (
   <>
    <div class="scroll-top scroll-to-target" data-target="html"  onClick={scrollToTop}>
    <span class="fas fa-angle-up"></span>
</div>
	<div class="pageloader" style={{ zIndex: 999999 }}>
	      <div class="loader">
	        	<div class="loader-inner semi-circle-spin">
		<div></div>
	</div>
	      </div>	
	</div>
   </>
  )
}

export default Scroll