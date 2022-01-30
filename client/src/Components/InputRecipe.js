import React, { Fragment, useState } from "react";

const InputRecipe = () => {
    const [recipe, setRecipe] = useState("gugu")
  return (
    <Fragment>
      <h1 className="text-center mt-5">Recipes</h1>
      <form className="d-flex mt-5">
        <input type="text" className="form-control" value={recipe} onChange={r => setRecipe(r.target.value)} />
        <button type="submit" className="btn btn-success">
          Add Recipe
        </button>
      </form>
    </Fragment>
  );
};

export default InputRecipe;
