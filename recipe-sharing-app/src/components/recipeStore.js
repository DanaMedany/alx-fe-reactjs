import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) =>
    set((state) => {
      state.searchTerm = term;
      state.filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
    }),

  // Action to set the initial list of recipes
  setRecipes: (recipes) =>
    set((state) => {
      state.recipes = recipes;
      state.filteredRecipes = recipes; // Initialize with all recipes
    }),
}));

export default useRecipeStore;
