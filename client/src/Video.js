import { React } from "react";
import "./styles";

import { Link, useParams } from 'react-router-dom';
import YoutubeEmbed from "./YoutubeEmbed";

export default function Video({ recipeData, user }) {

  let {id} = useParams()
  
  const matchedRecipe = recipeData.filter(recipe => {
    return Number(recipe.id) === Number(id)
  })

  let recipe = matchedRecipe[0]

  return (
    <>
    <div className="video-container">
      <Link to="/recipes" className="literally-back-button">Back</Link>
      <YoutubeEmbed videoData={recipe.video} />
      <h2 className="video-title" >{recipe.title}</h2>
      <h5 className="video-category">{recipe.chef}</h5>
      <p className="video-description">{recipe.description}</p>
    </div>
    </>
  );
}

// NOTE: add description of yoga pose here!