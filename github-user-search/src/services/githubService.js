import axios from "axios";

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const GITHUB_API_URL = `https://api.github.com/users/${username}`;
  const response = await axios.get(GITHUB_API_URL);
  return response.data;
};
