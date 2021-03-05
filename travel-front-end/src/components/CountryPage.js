import React, {useState, useEffect} from "react";
import CountryList from "./CountryList";
import FavoritesList from "./FavoritesList";
import CommentList from "./CommentList";
import Dropdown1 from "./Dropdown1";
import Search from "./Search";


function CountryPage() {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("All")
  // const [countryIndex, setCountryIndex] = useState(0);


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


  // function handleVaccinations() {
  //   const vaccinations = countries.filter((country) => {
  //     return country.vaccinations !== "no vaccines required"
  //   })
  //   return vaccinations;
  // }


  // function handleSafeWater() {
  //   const safeWater = countries.filter((country) => {
  //     return country.water === "safe"
  //   })
  //   return safeWater;
  // }

  function handleOptionChange() {
    console.log(option)
    if (option === 'Safe Drinking Water') {
      return countries.filter((country) => {
        return country.water === "safe"
      })
    } else if (option === "Vaccinations") {
      return countries.filter((country) => {
        return country.vaccinations !== "no vaccines required"
      })
    } else {
      return countries;
    }
  }




  // function handleClickMore() {
  //   setCountryIndex((countryIndex) => (countryIndex + 5) % countries.length);
  // }

  // const displayedCountries = countries.filter((country) => {
  //   return country.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return(
    <div>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Dropdown1 option={option} setOption={setOption} 
      />
      <CountryList countries={handleOptionChange()} handleFavorites={handleFavorites} handleSubmitComment={handleSubmitComment} />
      <FavoritesList favorites={favorites} handleDeleteFavorite={handleDeleteFavorite}/>
      <CommentList comments={comments}  handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} countries={countries}
      />
    </div>
  )
};

export default CountryPage;