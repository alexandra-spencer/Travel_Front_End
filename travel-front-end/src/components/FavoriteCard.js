import React from "react";

function FavoriteCard({favorite, handleDeleteFavorite}) {

  function handleDeleteClick() {
    fetch(`http://localhost:3000/country_favorites/${favorite.id}`, {
      method: "DELETE"
    })
    handleDeleteFavorite(favorite)
  }

  return (
    <div className="favoriteCard">
      <li>{favorite.country.name}</li>
      <button className="ui blue basic button" onClick={handleDeleteClick}>Remove</button>
    </div>
  )
}

export default FavoriteCard;
