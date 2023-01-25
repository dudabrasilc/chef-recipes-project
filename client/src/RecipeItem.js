import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeItem({ recipe }) {

  const { id, title, image, category, description } = recipe;

  const summary = description.substring(0, 50)
  

  return (
    <div className="recipe-item">
      <div>
        <h2 className="recipe-card-title">{title}</h2>
        <img src={image} className="recipeimage" alt="recipe"/>
        <p></p>
        {/* <button onClick={handleClick} className="like-btn">{isFavorited ? "♥" : "♡"}</button> */}
        <h4 className="recipe-card-category">{category}</h4>
        <p className="recipe-card-description">{summary}...</p>
      </div>
      <Link exact to={`/video/${id}`} className="play-recipe">
        <p className="play-recipe">▶</p>
      </Link>
    </div>
  );
}