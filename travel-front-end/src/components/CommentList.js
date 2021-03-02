import Comment from "./Comment";


function CommentList({ comments, handleUpdateComment }) {

  const commentList = comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} handleUpdateComment={handleUpdateComment}/>
  })
  return (
    <div>
      {commentList}
    </div>
  )

}

export default CommentList;