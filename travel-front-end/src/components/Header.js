import React from "react";
import NavBar from "./NavBar";

function Header() {

    return(
       <div className="header">
        <NavBar />
        <h1 className= "title">Travel Safe</h1>
        {/* <h3>Connecting you with practical information for any trip.</h3> */}

        <iframe className="map" src="https://ourworldindata.org/grapher/continents-according-to-our-world-in-data?time=2015" loading="lazy"  title="world map">
        </iframe>
       </div>
    )

}

export default Header;