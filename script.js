document.addEventListener("DOMContentLoaded", loadRecipes);

function addRecipe() {
    let title = document.getElementById("title").value;
    let ingredients = document.getElementById("ingredients").value;
    let imageURL = document.getElementById("imageURL").value;
    if (!title || !ingredients || !imageURL) {
        alert("All fields are required!");
        return;
    }
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push({ title, ingredients, imageURL });
    localStorage.setItem("recipes", JSON.stringify(recipes));
    loadRecipes();
}

function loadRecipes() {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    let recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";
    recipes.forEach((recipe, index) => {
        let recipeDiv = document.createElement("div");
        recipeDiv.className = "recipe";
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <img src="${recipe.imageURL}" alt="${recipe.title}" width="100%">
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeDiv);
    });
}

function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes"));
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    loadRecipes();
}
