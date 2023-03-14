/*
Create an interface for a recipe that has a name, a list of ingredients

Create a function with one argument: array of recipes

Function returns a recipe that has the longest list of ingredients
*/

interface Recipe {
    name: string,
    ingredients: string[]
};

const longestRecipe = (arr: Recipe[]): Recipe => {
    return arr.reduce((a, b) => {
        return b.ingredients.length > a.ingredients.length ? b : a;
    });
}

const recipes: Recipe[] = [
    {
      name: "Spaghetti with Meat Sauce",
      ingredients: [
        "spaghetti",
        "ground beef",
        "onion",
        "garlic",
      ]
    },
    {
      name: "Chicken Stir Fry",
      ingredients: [
        "boneless chicken breasts",
        "soy sauce",
        "cornstarch",
        "sugar",
        "vegetable oil",
        "broccoli",
        "carrots",
      ]
    },
    {
      name: "Chocolate Chip Cookies",
      ingredients: [
        "butter",
        "white sugar",
      ]
    }
];

console.log(longestRecipe(recipes));