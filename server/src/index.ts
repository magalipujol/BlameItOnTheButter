import "reflect-metadata";
import { createConnection } from "typeorm";
import { Recipe } from "./entity/Recipe";
import { Ingredient } from "./entity/Ingredient";
import express = require("express");

const app = express();
app.use(express.json());


app.post("/addrecipe", async (req, res) => {
  try {
    const connection = await createConnection();
    const recipe = new Recipe();
    recipe.title = req.body.title;
    recipe.instructions = req.body.instructions;
    recipe.estimated_time = req.body.estimated_time;
    recipe.beforehand_prep = req.body.beforehand_prep;

    recipe.ingredients = req.body.ingredient_ids.map(
      async (id) => await connection.manager.find(Ingredient, id)
    );
    await connection.manager.save(recipe);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
