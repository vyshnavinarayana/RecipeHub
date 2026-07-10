import React from "react";
import "./styles/RecipeCard.css";

const RecipeCard = ({
  recipe,
  selected,
  toggleFavorite,
  favorites,
}) => {

  const isFavorite =
    favorites &&
    favorites.some((item) => item.idMeal === recipe.idMeal);

  return (
    <div className="recipe-card">

      <div
        className="recipe-image"
        onClick={() => selected(recipe)}
      >

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <span className="recipe-badge">
          {recipe.strCategory}
        </span>

        <span className="recipe-rating">
          ⭐ 4.8
        </span>

      </div>

      <div className="recipe-content">

        <h3>{recipe.strMeal}</h3>

        <div className="recipe-info">
          <span>⏱ 30 min</span>
          <span>🍽 Easy</span>
        </div>

        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(recipe)}
        >
          {isFavorite
            ? "❤️ Remove Favorite"
            : "🤍 Add Favorite"}
        </button>

      </div>

    </div>
  );
};

export default RecipeCard;