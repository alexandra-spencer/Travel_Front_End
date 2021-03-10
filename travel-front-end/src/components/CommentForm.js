import React, { useState } from "react";

function CommentForm({ handleSubmitComment, countryList, setCountries }) {

  const [text, setText] = useState("")
  const [rating, setRating] = useState("")
  const [country, setCountry] = useState("")
  const [showForm, setShowForm] = useState(false)


  const countryListSelect = countryList.map((country) => {
    return <option key={country.props.country.id} value={country.props.country.id}>{country.props.country.name}</option>
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
        country_id: country,
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

  function toggleForm() {
    setShowForm((showForm) => !showForm)
  }

  return (
    <div className="review">
    <button onClick={toggleForm} className="ui teal basic button">Add Review</button>
    <br></br>
    <br></br>
    { showForm ?
    <div className="ui form searchbar">
      <div className="field">
      <form onSubmit={handleSubmit}>
      <div className="ui form dropdown">
        <div className="field">
          <select className="ui search dropdown" value={country.id} onChange={handleChange}>
          {countryListSelect}
          </select>
        </div>
      </div>
      <br></br>
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
      <button className="ui teal basic button" type="submit">Submit</button>
      </form>
      </div>
    </div>
    : null
    }
    </div>
  );
}

export default CommentForm;