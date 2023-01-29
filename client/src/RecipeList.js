import React from 'react';
import RecipeItem from './RecipeItem';

export default function RecipeList({ recipeData,  setRecipeData, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

  const recipes = recipeData
    .map((recipe) => {

      return (
<RecipeItem 
      key={recipe.id}
      recipe={recipe}
    /> )}
      )
    console.log(recipes)

  return (
    <>
    <div className="comment-page-title">
      <h3 className="recipe-list-header">A community that reunites chefs, with the finest recipes.</h3>
      <h5>Share, browse and leave your comment!</h5>
    </div>
    <div className="comment-page-intro">
      <p></p>
    </div>
    <div className="recipe-list">
      <div className="recipe-container">{recipes}</div>
    </div>
   </> 
  )
}
