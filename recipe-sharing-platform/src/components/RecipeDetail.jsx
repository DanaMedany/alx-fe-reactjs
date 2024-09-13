import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 mb-6 inline-block">
        Back to Home
      </Link>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-700 mt-4">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mt-6">Ingredients:</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {/* Example ingredients, replace with your actual data */}
          <li>2 eggs</li>
          <li>100g cheese</li>
          <li>200g spaghetti</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Instructions:</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          {/* Example instructions, replace with your actual data */}
          <li>Boil the pasta.</li>
          <li>Fry the bacon until crisp.</li>
          <li>Mix eggs and cheese in a bowl.</li>
          <li>Toss the pasta with the bacon, then stir in the egg mixture.</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
