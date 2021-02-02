import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  const APP_ID = "05134333";
  const APP_KEY = "74216bb59939c655a3c6e403ba218ca1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <div className="top-bar">
        <form onSubmit={getSearch} className="search-bar">
          <input
            type="text"
            placeholder="I wanna cook..."
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="search-button" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="homepage">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cautions={recipe.recipe.caurions}
            dietLables={recipe.recipe.dietLabels}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
