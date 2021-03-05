import React, { useState } from "react";

function CommentForm({ handleSubmitComment, countryList, setCountries }) {
  // const [userId, setUserId] = ("1")
  const [text, setText] = useState("")
  const [rating, setRating] = useState("")
  const [country, setCountry] = useState("")


  const countryListSelect = countryList.map((country) => {
    console.log(country)
    return <option key={country.props.country.id} value={country.props.country.id}>{country.props.country.name} </option>
  })


  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/country_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        country_id: country.id,
        text: text,
        rating: rating
      })
    })
    .then(res => res.json())
    .then((newComment) => {
      handleSubmitComment(newComment)
    })

    setCountry("")
    setText("")
    setRating("")
  }

  function handleChange(e) {
    setCountry(e.target.value)
  }

  return (
    <div className="commentForm">
      <form onSubmit={handleSubmit}>
        <label>
          <select value={country.id} onChange={handleChange}>
          {countryListSelect}
          </select>
        </label>
        <p>
        <input
          type="text"
          name="text"
          placeholder="Review Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        </p>
        <p>
          <input
          type="text"
          name="rating"
          placeholder="Country Rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
        </p>
      <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;