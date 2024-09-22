import axios from "axios";

// Function to fetch users based on advanced criteria
export const fetchUserData = async (username, location, minRepos) => {
  const GITHUB_SEARCH_API = "https://api.github.com/search/users?q";
  let query = "";

  if (username) query += `${username}+in:login`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`${GITHUB_SEARCH_API}?q=${query}`);
  return response.data;
};
