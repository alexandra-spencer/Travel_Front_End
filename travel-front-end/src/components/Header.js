import React from "react";

function Header() {

    return(
       <div className="header">
        <h1>Travel Safe</h1>
        <h5>Hello, where are you travelling to?</h5>
        <iframe className="map" src="https://ourworldindata.org/grapher/continents-according-to-our-world-in-data?time=2015" loading="lazy"  title="world map">
        </iframe>
       </div>
    )

}

export default Header;