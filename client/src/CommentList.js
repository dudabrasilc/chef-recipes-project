import React, { useState, useEffect } from 'react';
import CommentItem from './CommentItem';


function CommentList({ user, recipeData }) {

    const [commentData, setCommentData] = useState([])
    const [formData, setFormData] = useState({
      description: "",
      user_id: user.id,
      recipe_id: 0
    })
    const [canSubmit, setCanSubmit] = useState(true)

    console.log(user)
    console.log(formData)

    // map through recipeData array to return option tags
    const titles = recipeData.map(recipe => {
      return (
        <option key={recipe.id} name="title" value={recipe.id}>{recipe.title}</option>
      )
    })
    
    useEffect(() => {
        fetch("/comments")
        .then((r) => r.json())
        .then((comments) => { setCommentData(comments) });
    }, []);

    // const findRecipe = recipeData.filter(recipe => {
    //   return recipe.recipe_id === recip.recipe_id
    // })

    // console.log(findRecipe)

    function addNewComment(newComment){
        setCommentData((comments) => [...comments, newComment])
      }

      function handleDeleteComment(comment_id){
        let comments = commentData.filter(comment => {
          return Number(comment.id) !== Number(comment_id)
        })
        // console.log(comments)
        setCommentData(comments);
      }

      function handleUpdateComment(updatedCommentObj) {
        const editedComments = commentData.map((comment) => {
          if (comment.id === updatedCommentObj.id) {
            return updatedCommentObj;
          } else {
            return comment;
          }
        });
        setCommentData(editedComments);
      }

    function handleSubmit(e){
        e.preventDefault();
        const newCommentObj = {
            description: formData.description,
            user_id: user.id,
            recipe_id: formData.recipe_id
        }
              fetch("/comments",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCommentObj)
              })
              .then(response => {
                if (response.ok) {
                  response.json().then((data) => {
                  addNewComment(data)  
                  setFormData({
                  description: "",
                  user_id: user.id,
                  recipe_id: 0
                  })
                  setCanSubmit(true)
                })
                } else {
                  setCanSubmit(false)
                  }}
                )}
    
      const commentList = commentData
      .map((comment) =>
            <CommentItem
              key={comment.id}
              id={comment.id}
              comment={comment}
              commentRecipe={comment.recipe}
              handleDeleteComment={handleDeleteComment} 
              handleUpdateComment={handleUpdateComment}
            />
        ) 
        

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      });
    }
    
    if (!recipeData) {
      return "Loading.."
    } else {

      return (
        <>
        <div className="comment-page-title">
        <p>Comments</p>
        </div>
        <div className="comment-page">
        <p> Share your experience on making this special selection of recipes!<br/><br/></p>
        </div>
        <form className="create-comment" onSubmit={handleSubmit} >
          <label className="comment-label" htmlFor="comment">New Comment: </label>
          <input 
            className="comment-input"
            name="description"
            type="text"
            placeholder="Enter a comment..."
            value={formData.description}
            onChange={handleChange}
            ></input>
            <select value={formData.recipe_id} name="recipe_id" className="select-dropdown" onChange={handleChange}>
              <option value="none">Select recipe</option>
              {titles}
            </select>
            <p></p>
            <div className="select-recipe">{ canSubmit ? "" : "Please select a recipe"}</div>
            <input className="submit-button" type="submit" value="Post" />
        </form>
        <div className="comments-div">{commentList}</div>
        <div className="float-container">
        </div>
        </>
      )
    }
  }
 
export default CommentList;
