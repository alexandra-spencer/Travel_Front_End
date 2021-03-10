import Comment from "./Comment";


function CommentList({ comments, handleUpdateComment, handleDeleteComment}) {

  const commentList = comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} />
  })
  return (
    <div>
      <div className="commentTitle">
        <h2><p>Reviews</p></h2>
      </div>
      <div className="commentList">
        {commentList}
      </div>
    </div>
  )

}

export default CommentList;