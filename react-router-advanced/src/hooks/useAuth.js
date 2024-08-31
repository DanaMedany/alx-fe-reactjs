import { useState } from "react";

// Simulated authentication hook
const useAuth = () => {
  // Initially set the user as not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate a login function
  const login = () => {
    setIsAuthenticated(true);
  };

  // Simulate a logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
