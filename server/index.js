const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

//ROUTES//
// ? where do the ingredients and meals are added?
app.post("/addrecipe", async (req, res) => {
    console.log("hi");
  try {
    const { title, ingredients_id, instructions, estimated_time_min, meals_id, beforehand_prep } = req.body;
    const newRecipe = await pool.query("insert into recipes (title, instructions, estimated_time, beforehand_prep) values ($1, $2, $3, $4) returning *", [title, instructions, estimated_time_min, beforehand_prep]);
    res.send(newRecipe);

  } catch (error) {
    console.error(error.message);
  }
});

// TODO this should ask for less info
app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await pool.query("select * from recipes");
    res.send(allRecipes.rows);
  } catch (error) {
      console.error(error.message);
  }
});

app.get("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await pool.query("select * from recipes where recipe_id = $1", [id]);
        res.send(recipe.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

app.put("/updaterecipe/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, ingredients_id, instructions, estimated_time_min, meals_id } = req.body;
        const updateRecipe = await pool.query("update recipes set title = $1, instructions = $2, estimated_time = $3 where recipe_id = $4 returning *", [title, instructions, estimated_time_min, id]);
        res.json("Recipe was updated")
    } catch (error) {
        console.error(error.message);    }
})

app.delete("/deleterecipe/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRecipe = await pool.query("delete from recipes where recipe_id = $1", [id]);
        res.json("Recipe was deleted")
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
