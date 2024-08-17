import ProfilePage from "./ProfilePage";
import { useContext } from "react";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  <useContext.Provider value={userData}>
    <ProfilePage />;
  </useContext.Provider>;
}

export default App;
