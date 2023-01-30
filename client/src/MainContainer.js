import React, { useState } from 'react';
import Video from './Video';
import RecipeList from './RecipeList';
import { Route, Routes } from "react-router-dom"; 
import CommentList from "./CommentList";
import ShowComment from "./ShowComment";
import NewRecipe from "./NewRecipe";

function MainContainer({ recipeData, setRecipeData, user }) {

  const [clicked, setClicked] = useState(false);

  function addRecipe(newRecipe) {
    const updatedRecipes = [...recipeData, newRecipe]
    setRecipeData(updatedRecipes)
  }

  return (
    <div>
       <Routes> 
          <Route exact path="/video/:id" element={
              <Video
                recipeData={recipeData}
                user={user}
              />}
          />
          <Route exact path="/comments" element={
              <CommentList user={user} recipeData={recipeData} />} 
              />
          <Route exact path="/comments/:id" element={
               <ShowComment />
             }
             />
          <Route exact path="/recipes" element={
            <RecipeList 
              recipeData={recipeData}
              setRecipeData={setRecipeData}
              clicked={clicked} 
              setClicked={setClicked}
              />}
            />
            <Route exact path='/new-recipe' element= {
              <NewRecipe recipeData={recipeData} setRecipeData={setRecipeData} addRecipe={addRecipe}/>
            }
            />
        </Routes>  
    </div>
  )
}

export default MainContainer;
