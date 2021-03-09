import React from "react";
import CountryCard from "./CountryCard";
import CommentForm from "./CommentForm";


function CountryList({ countries, handleFavorites, handleSubmitComment, onClickMore }) {
  function getCountryList() {
    if (countries) {
      return countries.map((country) => {
        return <CountryCard key={country.id} country={country} handleFavorites={handleFavorites}/>
      })
    }
  }
  return (
    <div>
      <div className="cards">
          {getCountryList()}
      </div>
        <div>
            <br></br>
            <CommentForm handleSubmitComment={handleSubmitComment} countryList={getCountryList()}/>
        </div>
        <br></br>
    </div>
  );
};

export default CountryList;