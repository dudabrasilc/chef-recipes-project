import React, {useState} from 'react';
import EditComment from './EditComment';
import { Link } from 'react-router-dom';

export default function CommentItem({ id, selectedRecipe, commentRecipe, comment, handleDeleteComment, handleUpdateComment, handleShowComment }) {

  const [isEditing, setIsEditing] = useState(false);
  const [canDelete, setCanDelete] = useState(true)
  
  console.log(commentRecipe.id)

  const { description, user } = comment

  function handleDelete(){
    fetch(`/comments/${comment.id}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => {
      if (resp.ok) {
        handleDeleteComment(comment.id)
      } else {
        setCanDelete(false)
      }
    })
  }

  return (
     <div className="bubble">
       {isEditing ? (
        <EditComment
          id={id}
          comment={comment}
          setIsEditing={setIsEditing}
          handleUpdateComment={handleUpdateComment}
        />
       ) : (
        <div className="comment-container">
           <button className="delete-button" onClick={handleDelete}>X</button>
           <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
            </button>
            <br/>
           <h3 className="comment">
            <p className="error">{ canDelete ? "" : "Not allowed to delete" }</p>
            <Link to={`/video/${commentRecipe.id}`}>
              <img id="img-comment" alt="recipe-img" src={commentRecipe.image}></img>
            </Link>
            <p>{description.substring(0,25)}...</p>
           <p className="username">- Chef {user.username}</p>
           <Link className="full-comment-button" to={`/comments/${id}`}>Full Comment</Link>
           </h3>
        </div>
       )
      }
      </div>
  )
}