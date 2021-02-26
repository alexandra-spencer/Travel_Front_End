import React, {useState, useEffect} from "react";
import CountryList from "./CountryList";
import Favorites from "./Favorites";
import Search from "./Search";

function CountryPage() {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
      fetch(`http://localhost:3000/countries`)
      .then(res => res.json())
      .then(setCountries);
  }, []);

  function handleFavorites(newFavorite) {
    setFavorites([...favorites], newFavorite)
  }

  return(
    <div>
      <CountryList countries={countries} handleFavorites={handleFavorites}/>
      <Favorites />
      <Search />
    </div>
  )
};

export default CountryPage;