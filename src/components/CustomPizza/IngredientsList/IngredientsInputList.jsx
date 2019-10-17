import React from "react";
import "./IngredientsList.css";
import { transformObjectIntoArray } from "../CustomPizza.utils";
import IngredientInputItem from "./IngredientItem/IngredientItem";

export default function IngredientsList({
  name,
  ingredients,
  ingredientType,
  inputType,
  handleInputChange
}) {
  let transformedIngredients = transformObjectIntoArray(ingredients);

  return (
    <React.Fragment>
      <h2 className="text-center">{name}</h2>

      {transformedIngredients.map(ingredient => {
        return (
          <IngredientInputItem
            key={ingredient.id}
            ingredient={ingredient}
            inputType={inputType}
            ingredientType={name.toLowerCase()}
            ingredientName={name}
            handleInputChange={handleInputChange}
          />
        );
      })}
    </React.Fragment>
  );
}

// <div class="form-check">
//   <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
//     <label class="form-check-label" for="exampleRadios1">
//       Default radio
//   </label>
// </div>
//   <div class="form-check">
//     <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
//       <label class="form-check-label" for="exampleRadios2">
//         Second default radio
//   </label>
// </div>
//     <div class="form-check">
//       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
//         <label class="form-check-label" for="exampleRadios3">
//           Disabled radio
//   </label>
// </div>
