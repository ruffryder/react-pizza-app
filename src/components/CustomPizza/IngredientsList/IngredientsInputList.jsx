import React from "react";
import "./IngredientsList.css";
import { transformObjectIntoArray } from "../CustomPizza.utils";
import IngredientInputItem from "./IngredientItem/IngredientItem";
import PropTypes from "prop-types";

export default function IngredientsList({
  name,
  ingredients,
  inputType,
  handleInputChange
}) {
  let transformedIngredients = transformObjectIntoArray(ingredients);

  return (
    <React.Fragment>
      <h2 className="text-center ingredient-title">{name}</h2>

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

IngredientsList.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.object,
  inputType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
