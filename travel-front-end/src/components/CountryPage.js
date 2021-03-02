import React, {useState, useEffect} from "react";
import CountryList from "./CountryList";
import FavoritesList from "./FavoritesList";
import Search from "./Search";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function CountryPage() {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [comments, setComments] = useState([]);


  useEffect(() => {
      fetch(`http://localhost:3000/countries`)
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/country_favorites`)
    .then(res => res.json())
    .then(setFavorites);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/country_comments`)
    .then(res => res.json())
    .then(setComments);
  }, []);



  function handleFavorites(newFavorite) {


    setFavorites([...favorites], newFavorite)

    fetch(`http://localhost:3000/country_favorites`)
    .then(res => res.json())
    .then(setFavorites);
  }


  function handleDeleteFavorite(removedItem) {
    const updatedList = favorites.filter((favorite) =>
      favorite.id !== removedItem.id
    )
    setFavorites(updatedList);
  }

  function handleSubmitComment(newComment) {
    const updatedCommentsArray = [...comments, newComment];
    setComments(updatedCommentsArray);
  }

  function handleUpdateComment(id) {

  }

  return(
    <div>
      <Search />
      <CountryList countries={countries} handleFavorites={handleFavorites}/>
      <p>Favorite List</p>
      <FavoritesList favorites={favorites} handleDeleteFavorite={handleDeleteFavorite}/>
      <CommentList comments={comments}  handleUpdateComment={handleUpdateComment}/>
      <br></br>
      <CommentForm handleSubmitComment={handleSubmitComment}/>
    </div>
  )
};

export default CountryPage;