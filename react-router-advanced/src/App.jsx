import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuth from "./hooks/useAuth"; // Import useAuth

function App() {
  const { isAuthenticated, login, logout } = useAuth(); // Use the auth hook

  return (
    <Router>
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
