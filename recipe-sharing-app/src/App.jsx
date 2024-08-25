import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import useRecipeStore from "./components/recipeStore";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = [
        {
          id: 1,
          title: "Spaghetti",
          description: "Delicious spaghetti with marinara sauce.",
        },
        {
          id: 2,
          title: "Chocolate Cake",
          description: "Rich and moist chocolate cake.",
        },
        // Add more mock recipes if necessary
      ];
      setRecipes(recipes);
    };

    fetchRecipes();
  }, [setRecipes]);

  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Recipe Sharing Application</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
