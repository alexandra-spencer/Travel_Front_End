import React, { useState } from "react";

function CountryCard({ country, handleFavorites }) {
  const [inList, setInList] = useState(false);

  function handleToggleFavorite() {
    setInList(!inList);
    if (!inList) {
      fetch(`http://localhost:3000/country_favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1,
          country_id: country.id,
        }),
      })
      .then(res => res.json())
      .then((newFavorite) => {
        handleFavorites(newFavorite)
      })
    }
  }

  // function handleToggleDeleteFavorite() {
  //   setInList(inList);
  //   if(inList) {
  //     fetch(`http://localhost:3000/country_favorites/${favorite.id}`, {
  //       method: 'DELETE'
  //     })
  //     handleDeleteFavorite(favorite)
  //   }
  // }

  return(
    <li className="card">
        <p>{country.name}</p>
        <p>Continent: {country.continent}</p>
        <p>Vaccinations: {country.vaccinations}</p>
        <p>Drinking Water: {country.water}</p>
        <p>Currency: {country.currency}</p>
        <p>Plug Types: {country.plugs}</p>
        <br></br>
        {!inList? (
          <button onClick={handleToggleFavorite}>Add</button>
        ) : (
          <button onClick={handleToggleFavorite}>Remove</button>
        )}
    </li>
  )
};




export default CountryCard;