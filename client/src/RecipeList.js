import React, { useState } from 'react';
import RecipeItem from './RecipeItem';

export default function RecipeList({ recipeData,  setRecipeData, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

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
      <div className="recipe-container">{recipeData
    .map((recipe) => 
    <RecipeItem 
      key={recipe.id}
      recipe={recipe}
      handleUpdateItem={handleUpdateItem}
      clicked={clicked}
      setClicked={setClicked}
      handleFindVideoData={handleFindVideoData}
      handleFindId={handleFindId}
    />)}</div>
      {/* <div className="float-container">
          <div className="next-container">
                <button 
                className="back-button" 
                onClick={handleClickLess}><i className="gg-chevron-left"></i></button>
          </div>
          <div className="next-container">
              <button 
                className="next-button" 
                onClick={handleClickMore}><i className="gg-chevron-right"></i></button>
            </div>
        </div> */}
    </div>
   </> 
  )
}
