import "./App.css";
import SearchInput from "./components/SearchInput";
import UserResults from "./components/UserResults";

function App() {
  return (
    <>
      <div className="App">
        <h1>GitHub User Search</h1>
        <SearchInput />
        <UserResults />
      </div>
    </>
  );
}

export default App;
