import "reflect-metadata";
import {createConnection} from "typeorm";
import {Recipe} from "./entity/Recipe";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const recipe = new Recipe();
    recipe.title = "Pasta Carbonara";
    recipe.instructions = "1. Boil pasta. 2. Add tomato sauce. 3. Add cheese. 4. Add bacon. 5. Cook for 20 minutes.";
    recipe.estimated_time = 20;
    recipe.beforehand_prep = true;
    await connection.manager.save(recipe);
    console.log("Saved a new user with id: " + recipe.id);

    console.log("Loading recipes from the database...");
    const recipes = await connection.manager.find(Recipe);
    console.log("Loaded recipes: ", recipes);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
