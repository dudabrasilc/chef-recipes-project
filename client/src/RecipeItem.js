import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeItem({ recipe }) {

  console.log(recipe.description)
  // console.log(recipe.description)

  let summary = recipe.description.substring(0, 50)
  console.log(summary)
  

  return (
    <div className="recipe-item">
      <div>
        <h2 className="recipe-card-title">{recipe.title}</h2>
        <img src={recipe.image} className="recipeimage" alt="recipe"/>
        <p></p>
        <h4 className="recipe-card-category">{recipe.category}</h4>
        <p className="recipe-card-description">{summary}</p>
      </div>
      <Link exact to={`/video/${recipe.id}`} className="play-recipe">
        <p className="play-recipe">▶</p>
      </Link>
    </div>
  );
}