import React from 'react'

const Search = () => {
  return (
    
        <div id="search-popup" class="search-popup">
    <div class="close-search"><span>Close</span></div>
    <div class="popup-inner">
        <div class="overlay-layer"></div>
        <div class="search-form">
            <form action="https://naxly.wpcomstaging.com/" method="get">
    <div class="form-group">
        <fieldset>
            <input type="search" class="form-control" name="s" value="" placeholder="Search here" required />
            <input type="submit" value="Search Now!" class="theme-btn style-four"/>
        </fieldset>
    </div>
</form>
        </div>
    </div>
</div>
    
  )
}

export default Search