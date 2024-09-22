import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const SearchInput = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [usersData, setUsersData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    setLoading(true);
    try {
      const newPageData = await fetchAdvancedUserData(
        username,
        location,
        minRepos,
        page + 1
      );
      setUsersData((prevUsers) => [...prevUsers, ...newPageData.items]); // Append new data
      setPage(page + 1);
    } catch (error) {
      setError("Error loading more users.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsersData(null);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUsersData(data.items); // Search API returns data in 'items'
    } catch (error) {
      setError("No users found with the specified criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username..."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location..."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium">
            Minimum Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories..."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {usersData && (
        <button
          onClick={handleLoadMore}
          className="mt-6 bg-gray-300 text-black py-2 px-4 rounded-md"
        >
          Load More
        </button>
      )}

      {/* Conditional rendering */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {usersData && (
        <div className="mt-6 grid grid-cols-1 gap-6">
          {usersData.map((user) => (
            <div key={user.id} className="p-4 border rounded-md">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-lg font-bold">{user.login}</h3>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
