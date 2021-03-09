import React from "react";

function Header() {

    return(
       <div class="header">
        <h2>Travel Safe</h2>
        {/* <h3>Connecting you with practical information for any trip.</h3> */}
        <iframe className="map" src="https://ourworldindata.org/grapher/continents-according-to-our-world-in-data?time=2015" loading="lazy"  title="world map">
        </iframe>
       </div>
    )

}

export default Header;