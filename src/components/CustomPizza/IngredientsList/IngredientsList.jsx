import React from "react";
import "./IngredientsList.css";
import { transformObjectIntoArray } from "../CustomPizza.utils";

export default function IngredientsList({ name, ingredients }) {
  let transformedIngredients = transformObjectIntoArray(ingredients);
  return (
    <div>
      <h2>{name}</h2>
      {transformedIngredients.map(ingredient => {
        return <span key={ingredient.id}>{ingredient.name}</span>;
      })}
    </div>
  );
}
