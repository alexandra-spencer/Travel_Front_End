import React, { useState } from "react";

function CommentForm({ handleSubmitComment }) {


  const [text, setText] = useState("")
  const [rating, setRating] = useState()

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`http://localhost:3000/country_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text,
        rating: rating
      })
    })
    .then(res => res.json())
    .then((newComment) => {
      handleSubmitComment(newComment)
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="text"
          placeholder="Review Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          name="rating"
          placeholder="Country Rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
      <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;