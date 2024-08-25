import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import useRecipeStore from "./components/recipeStore";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Example of fetching recipes (replace this with your actual data fetching logic)
  useEffect(() => {
    const fetchRecipes = async () => {
      // Replace this with your API call or data fetching logic
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
        // Add more recipe data here
      ];
      setRecipes(recipes);
    };

    fetchRecipes();
  }, [setRecipes]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Application</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
