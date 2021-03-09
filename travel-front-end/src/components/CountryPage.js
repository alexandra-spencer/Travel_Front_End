import React, {useState, useEffect} from "react";
import CountryList from "./CountryList";
import MoreButton from "./MoreButton";
import FavoritesList from "./FavoritesList";
import CommentList from "./CommentList";
import Dropdown1 from "./Dropdown1";
import Search from "./Search";


function CountryPage() {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("All");
  const [countryIndex, setCountryIndex] = useState(0);
  const [secondNumber, setSecondNumber] = useState(20);


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

  function handleDeleteComment(removedComment) {
    const updatedComments= comments.filter(
      (comment) =>
      comment.id !== removedComment.id
    )
    setComments(updatedComments)
  }

  function handleSubmitComment(newComment) {
    const updatedCommentsArray = [...comments, newComment];
    setComments(updatedCommentsArray);
  }

  function handleUpdateComment(updatedComment) {
    const updatedCommentsArray = comments.map((comment) => {
      if (comment.id === updatedComment.id) {
        return updatedComment;
      } else {
        return comment;
      }
    });
    setComments(updatedCommentsArray);
  }


  function handleOptionChange() {
    if (option === 'Safe Drinking Water') {
      return displayedCountries.filter((country) => {
        return country.water === "safe"
      })
    } else if (option === "Vaccinations") {
      return displayedCountries.filter((country) => {
        return country.vaccinations !== "no vaccines required"
      })
    } else {
      return displayedCountries;
    }
  }

  const countrySlice = countries.slice(countryIndex, secondNumber);

  const displayedCountries = countrySlice.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleClickMore() {
    setSecondNumber((secondNumber) => (secondNumber + 19) % countries.length);
  }



  return(
    <div>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <br></br>
      <Dropdown1 option={option} setOption={setOption}
      />
      <br></br>
      <MoreButton onClickMore={handleClickMore}/>
      <CountryList countries={handleOptionChange()} handleFavorites={handleFavorites} handleSubmitComment={handleSubmitComment} />
      <FavoritesList favorites={favorites} handleDeleteFavorite={handleDeleteFavorite}/>
      <CommentList comments={comments}  handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} countries={countries}
      />
    </div>
  )
};

export default CountryPage;