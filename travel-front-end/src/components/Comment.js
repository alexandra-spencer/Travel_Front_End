import React, { useState } from "react";

function Comment({ comment, handleDeleteComment, handleUpdateComment}) {
  // const { user_id, country_id, text, rating } = comment;
  const [updatedText, setUpdatedText] = useState("");
  const [updatedRating, setUpdatedRating] = useState("");
  const [form, setForm] = useState(false);

  function handleUpdateClick(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/country_comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: comment.user_id,
        country_id: comment.country_id,
        text: updatedText,
        rating: updatedRating
      })
    })
      .then((r) => r.json())
      .then((updatedComment) => {
        handleUpdateComment(updatedComment)
      })
  }

  function showForm() {
    setForm((form) => !form);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/country_comments/${comment.id}`, {
      method: "DELETE"
    })
    handleDeleteComment(comment)
  }

  return (
    <div className="comment">
      <p>User: {comment.user.username}</p>
      <p>Country: {comment.country.name}</p>
      <p>Comment: {comment.text}</p>
      <p>Rating: {comment.rating}</p>
      <button className="ui orange basic button" onClick={handleDeleteClick}>Remove</button>
      <button className="ui pink basic button" onClick={showForm}>Edit</button>
      <br></br>
      <br></br>
      { form ?
          <form className= "ui form" onChange={handleUpdateClick}>
          <input
          type="text"
          placeholder="New Comment"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
          type="number"
          placeholder="New Rating"
          value={updatedRating}
          onChange={(e) => setUpdatedRating(parseInt((e.target.value)))}
          />
          <br></br>
          <br></br>
          <button className="ui teal basic button" type="submit">Update</button>
        </form>
        : null
      }
      <br></br>
      <br></br>

    </div>
  )
}

export default Comment;