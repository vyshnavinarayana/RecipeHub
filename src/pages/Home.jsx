import React, { useState, useEffect } from "react";
import Features from "../components/Features";
import {
  fetchRecipes,
  fetchRecipeDetails,
  searchRecipes,
} from "../utils/api";

import RecipeCard from "../components/RecipeCard";
import Loader from "../components/Loader";
import RecipeModal from "../components/RecipeModal";

import "./Home.css";
import CategoryBar from "../components/CategoryBar";
const Home = ({ searchQuery }) => {
  const [chickenRecipes, setChickenRecipes] = useState([]);
  const [beefRecipes, setBeefRecipes] = useState([]);
  const [porkRecipes, setPorkRecipes] = useState([]);
  const [seafoodRecipes, setSeafoodRecipes] = useState([]);
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
});

  // Load default recipes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const chicken = await fetchRecipes("Chicken");
        setChickenRecipes(chicken.slice(0, 6));

        const beef = await fetchRecipes("Beef");
        setBeefRecipes(beef.slice(0, 6));

        const pork = await fetchRecipes("Pork");
        setPorkRecipes(pork.slice(0, 6));

        const seafood = await fetchRecipes("Seafood");
        setSeafoodRecipes(seafood.slice(0, 6));

        const vegetarian = await fetchRecipes("Vegetarian");
        setVegetarianRecipes(vegetarian.slice(0, 6));

        const soup = await fetchRecipes("Soup");
        setSoupRecipes(soup);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Search recipes
  useEffect(() => {
    const fetchSearch = async () => {
      if (!searchQuery || searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      const data = await searchRecipes(searchQuery);
      setSearchResults(data);
    };

    fetchSearch();
  }, [searchQuery]);
  useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

  const showMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleRecipeClick = async (recipe) => {
    const fullRecipe = await fetchRecipeDetails(recipe.idMeal);
    setSelectedRecipe(fullRecipe);
  };
  const toggleFavorite = (recipe) => {
  const exists = favorites.find(
    (item) => item.idMeal === recipe.idMeal
  );

  if (exists) {
    // Remove from favorites
    setFavorites(
      favorites.filter(
        (item) => item.idMeal !== recipe.idMeal
      )
    );
  } else {
    // Add to favorites
    setFavorites([...favorites, recipe]);
  }
};

  if (loading) {
    return <Loader />;
  }
return (
  <div className="home-layout">

    {/* LEFT SIDE - HOME CONTENT */}
    <div className="home-container">
      
      <CategoryBar />
      <Features />
      <section className="trending-section">
  <div className="section-header">
    <h2>🔥 Trending Recipes</h2>
    <button className="view-all-btn">View All</button>
  </div>

  <div className="trending-grid">
    {chickenRecipes.slice(0, 4).map((recipe) => (
      <RecipeCard
        key={recipe.idMeal}
        recipe={recipe}
        selected={handleRecipeClick}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    ))}
  </div>
</section>

      {/* SEARCH RESULTS */}
      {searchQuery.trim() !== "" ? (
        <div className="section">
          <h2>Search Results</h2>

          <div className="recipe-grid">
            {searchResults.length > 0 ? (
              searchResults.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))
            ) : (
              <h3>No recipes found.</h3>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Chicken */}
          <div className="section" id="chicken">
            <h2>Chicken Recipes</h2>
            <div className="recipe-grid">
              {chickenRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
            </div>
          </div>

          {/* Beef */}
          <div className="section" id="Beef">
            <h2>Beef Recipes</h2>
            <div className="recipe-grid">
              {beefRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
            </div>
          </div>

          {/* Pork */}
          <div className="section"id="Pork">
            <h2>Pork Recipes</h2>
            <div className="recipe-grid">
              {porkRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
            </div>
          </div>

          {/* Seafood */}
          <div className="section" id="Seafood">
            <h2>Seafood Recipes</h2>
            <div className="recipe-grid">
              {seafoodRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
            </div>
          </div>

          {/* Vegetarian */}
          <div className="section" id="Vegetarian">
            <h2>Vegetarian Recipes</h2>
            <div className="recipe-grid">
              {vegetarianRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
            </div>
          </div>

          {/* Soup */}
          <div className="section" id="Soup">
            <h2>Soup Recipes</h2>

            <div className="recipe-grid">
              {soupRecipes.slice(0, visibleCount).map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  selected={handleRecipeClick}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                />
              ))}
            </div>

            {visibleCount < soupRecipes.length && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  className="show-more-btn"
                  onClick={showMore}
                >
                  Show More
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>

    {/* RIGHT SIDE - FAVORITES */}
    <div className="favorites-sidebar">
      <h2>❤️ Favorite Recipes</h2>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="recipe-grid">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              selected={handleRecipeClick}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          ))}
        </div>
      )}
    </div>

    {/* Recipe Details Modal */}
<RecipeModal
  recipe={selectedRecipe}
  onClose={() => setSelectedRecipe(null)}
/>

</div>
);
};
export default Home;