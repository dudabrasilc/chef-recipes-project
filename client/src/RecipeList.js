import React, { useState } from 'react';
import RecipeItem from './RecipeItem';

export default function RecipeList({ recipeData,  setRecipeData, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

  // const [dataIndex, setDataIndex] = useState(0)
  

  // const recipeItems = [...recipeData]
  //   .slice(dataIndex, dataIndex + 3)

  const recipeItems = recipeData
    .map((recipe) => 
    <RecipeItem 
      key={recipe.id}
      recipe={recipe}
      handleUpdateItem={handleUpdateItem}
      clicked={clicked}
      setClicked={setClicked}
      handleFindVideoData={handleFindVideoData}
      handleFindId={handleFindId}
    />
  )

  // function handleClickMore() {
  //   setDataIndex((dataIndex) => (dataIndex + 3) % recipeData.length);
  // }
  // function handleClickLess() {
  //   setDataIndex((dataIndex) => (dataIndex - 3) % recipeData.length);
  // }
  
  return (
    <>
    <div className="comment-page-title">
      <h3>A community for chefs from all around the world.</h3>
      <h5>Share recipes, build your own recipes selection and leave your feedback.</h5>
    </div>
    <div className="comment-page-intro">
      <p></p>
    </div>
    <div className="recipe-list">
      <div className="recipe-container">{recipeItems}</div>
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
