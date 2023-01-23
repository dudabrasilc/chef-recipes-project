
import React, { useState } from 'react';

function EditComment({ id, comment, setIsEditing, handleUpdateComment}) {

    const { description } = comment

    const [updatedDescription, setUpdatedDescription] = useState(description)

    function handleDescriptionChange(e){
        setUpdatedDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`/comments/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: updatedDescription
          }),
        })
          .then((r) => r.json())
          .then((updatedDescription) => handleUpdateComment(updatedDescription))
          .then(() => setIsEditing(false));
      }



  return (
    <form className="edit-comment" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="edit-comment">
            Edit Comment:
        </label>
        <br/>
        <input
            name="edit-comment"
            type="text" 
            placeholder={description}
            value={updatedDescription}
            onChange={handleDescriptionChange}
            className="edit-comment-input"
        />
        <br/>
        <button className="save-button" type="submit" value="Save">Save</button>
    </form>
  )
}

export default EditComment;
