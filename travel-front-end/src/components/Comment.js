import React, { useState } from "react";

function Comment({ comment, handleDeleteComment, handleUpdateComment}) {

  const [updatedText, setUpdatedText] = useState("");
  const [updatedRating, setUpdatedRating] = useState("");
  console.log(comment.country.name)

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
      .then((r) => r.json())
      .then((updatedComment) => {
        handleUpdateComment(updatedComment)
      })
    })
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
      <button class="ui pink basic button" onClick={handleUpdateClick}>Edit</button>
      <button class="ui orange basic button" onClick={handleDeleteClick}>Remove</button>
    </div>
  )
}

export default Comment;