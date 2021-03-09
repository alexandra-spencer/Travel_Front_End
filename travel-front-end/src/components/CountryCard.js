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
    // <li className="card">
    //     <p>{country.name}</p>
    //     <p>Continent: {country.continent}</p>
    //     <p>Vaccinations: {country.vaccinations}</p>
    //     <p>Drinking Water: {country.water}</p>
    //     <p>Currency: {country.currency}</p>
    //     <p>Plug Types: {country.plugs}</p>
    //     <br></br>
    //     {!inList? (
    //       <button onClick={handleToggleFavorite}>Add</button>
    //     ) : (
    //       <button onClick={handleToggleFavorite}>Remove</button>
    //     )}
    // </li>

    <div class="ui card">
    <div class="content">
      <div class="country">{country.name}</div>
    </div>
    <div class="content">
      <h4 class="ui sub">Continent: {country.continent}</h4>
      <div class="ui small feed">
        <div class="event">
          <div class="content">
            <div class="summary">
            <p>Vaccinations: {country.vaccinations}</p>
            </div>
          </div>
        </div>
        <div class="event">
          <div class="content">
            <div class="summary">
            <p>Drinking Water: {country.water}</p>
            </div>
          </div>
        </div>
        <div class="event">
          <div class="content">
            <div class="summary">
            <p>Currency: {country.currency}</p>
            </div>
          </div>
        </div>
          <div class="event">
            <div class="content">
              <div class="summary">
              <p>Plug Types: {country.plugs}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="extra content">
      {!inList? (
          <button class="ui teal basic button" onClick={handleToggleFavorite}>Add</button>
        ) : (
          <button class="ui green basic button" onClick={handleToggleFavorite}>Remove</button>
        )}
    </div>
    </div>




  )
};




export default CountryCard;