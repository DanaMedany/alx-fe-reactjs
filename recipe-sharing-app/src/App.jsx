import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RecipeList />
          <AddRecipeForm />
        </Route>
        <Route path="/recipe/:id">
          {({ match }) => <RecipeDetails recipeId={Number(match.params.id)} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
