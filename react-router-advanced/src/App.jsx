import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost"; // Import the BlogPost component

function App() {
  return (
    <Router>
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
        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
