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
     {favoritesList}
    </div>
  );
};


export default FavoritesList;