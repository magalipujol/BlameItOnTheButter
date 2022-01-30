import React, { Fragment } from "react";
import "./App.css";

// Components
import InputRecipe from "./Components/InputRecipe";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputRecipe></InputRecipe>
      </div>
    </Fragment>
  );
}

export default App;
