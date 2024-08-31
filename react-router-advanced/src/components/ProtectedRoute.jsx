import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the authentication state

  // Check if the user is authenticated
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
