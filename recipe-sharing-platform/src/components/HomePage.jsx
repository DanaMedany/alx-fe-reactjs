import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      {/* Grid layout for the recipe cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col h-full">
              {/* Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              {/* Content area */}
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
                <p className="text-gray-700 mt-2">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
