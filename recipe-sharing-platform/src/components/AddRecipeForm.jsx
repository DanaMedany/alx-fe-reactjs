import { useState } from "react";

function AddRecipeForm() {
  const [formValues, setFormValues] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle changes to input fields
  const handleChange = (e) => {
    const name = e.target.name; // Extract name and value from the event target
    const value = e.target.value; // Extract name and value from the event target
    setFormValues({
      ...formValues,
      [name]: value, // Update the form field based on the name attribute
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.title) errors.title = "Recipe title is required.";
    if (!formValues.ingredients)
      errors.ingredients = "Ingredients are required.";
    if (!formValues.steps) errors.steps = "Preparation steps are required.";
    if (formValues.ingredients.split(",").length < 2)
      errors.ingredients = "Please include at least two ingredients.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", formValues);
      setIsSubmitted(true);
      // Reset form
      setFormValues({
        title: "",
        ingredients: "",
        steps: "",
      });
    } else {
      setFormErrors(errors);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter recipe title"
          />
          {formErrors.title && (
            <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formValues.ingredients}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter ingredients separated by commas"
          />
          {formErrors.ingredients && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.ingredients}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-semibold mb-2"
          >
            Preparation Steps
          </label>
          <textarea
            name="steps"
            id="steps"
            value={formValues.steps}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter preparation steps"
          />
          {formErrors.steps && (
            <p className="text-red-500 text-sm mt-1">{formErrors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>

        {isSubmitted && (
          <p className="text-green-500 text-center mt-4">
            Recipe submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default AddRecipeForm;
