import React, { useState } from "react";
// import { Container } from 'semantic-ui-react';

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
    <container>
    <div className="ui card">
    <div className="content">
      <div className="country">{country.name}</div>
    </div>
    <div className="content">
      <h4 className="ui sub">Continent: {country.continent}</h4>
      <div className="ui small feed">
        <div className="event">
          <div className="content">
            <div className="summary">
            <p>Vaccinations: {country.vaccinations}</p>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="content">
            <div className="summary">
            <p>Drinking Water: {country.water}</p>
            </div>
          </div>
        </div>
        <div className="event">
          <div className="content">
            <div className="summary">
            <p>Currency: {country.currency}</p>
            </div>
          </div>
        </div>
          <div className="event">
            <div className="content">
              <div className="summary">
              <p>Plug Types: {country.plugs}</p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
              <a href={country.url}>Additional Data</a>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="extra content">
      {!inList? (
          <button className="ui teal basic button" onClick={handleToggleFavorite}>Add</button>
        ) : (
          <button className="ui green basic button" onClick={handleToggleFavorite}>Remove</button>
        )}
    </div>
    </div>
    </container>



  )
};




export default CountryCard;