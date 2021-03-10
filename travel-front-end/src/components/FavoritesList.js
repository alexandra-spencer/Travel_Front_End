import React from "react";
import FavoriteCard from "./FavoriteCard";

function FavoritesList({ favorites, handleDeleteFavorite }) {
  const favoritesList = favorites.map((favorite) => {
    return <FavoriteCard
        key={favorite.id}
        favorite={favorite}
        handleDeleteFavorite={handleDeleteFavorite}/>

  })
  return (
    <div>
      <div className="favoriteTitle">
        <h1><p>Favorite List</p></h1>
      </div>
      <div className="favoriteCards">
      {favoritesList}
      </div>
    </div>
  );
};


export default FavoritesList;