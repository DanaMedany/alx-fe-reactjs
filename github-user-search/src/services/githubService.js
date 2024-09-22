import axios from "axios";

const GITHUB_API_URL = process.env.VITE_GITHUB_API_URL;
const GITHUB_API_KEY = process.env.VITE_GITHUB_API_KEY;

export const searchGitHubUsers = async (query) => {
  const config = {
    headers: {
      Authorization: `token ${GITHUB_API_KEY}`,
    },
  };

  const response = await axios.get(
    `${GITHUB_API_URL}/search/users?q=${query}`,
    config
  );
  return response.data.items;
};
