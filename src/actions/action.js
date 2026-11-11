"use server";

const postRecipe = async (formData) => {
  const recipeName = formData.get("recipename");
  try {
    const response = await fetch("http://localhost:3000/api/recipes/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: recipeName }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.log(error.message);
    // feature-validering: brug kode i try og catch
  }
};

export default postRecipe;
