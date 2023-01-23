import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecipeItem({ recipe, handleUpdateItem, handleFindVideoData }) {

  const { id, title, image, category, description, is_favorited: isFavorited } = recipe;

  const [isAuthorized, setIsAuthorized] = useState(true)
 

  function handleClick(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_favorited: !isFavorited }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem))
  }


  // console.log(recipe)
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