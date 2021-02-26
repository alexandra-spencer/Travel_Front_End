import React from "react";
import CountryCard from "./CountryCard";


function CountryList({ countries, handleFavorites }) {
  const countryList = countries.map((country) => {
    return <CountryCard key={country.id} country={country} handleFavorites={handleFavorites}/>
  })
  return(
    <div>
      {countryList}
    </div>
  );
};

export default CountryList;