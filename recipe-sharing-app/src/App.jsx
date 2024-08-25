import "./App.css";
import AddRecipeForm from "./stores/Components/AddRecipeForm";
import RecipeList from "./stores/Components/RecipeList";

function App() {
  return (
    <>
      <RecipeList />
      <AddRecipeForm />
    </>
  );
}

export default App;
