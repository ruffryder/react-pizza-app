import React from "react";
import "./IngredientItem.css";
import PropTypes from "prop-types";

function IngredientInputItem({
  ingredientName,
  ingredient,
  ingredientType,
  inputType,
  handleInputChange
}) {
  return (
    <div className="form-check py-3 ingredient-input-item d-flex d-md-block align-items-center justify-content-center ">
      <input
        type={inputType}
        name={ingredientName}
        id={ingredient.name}
        value={ingredient.name}
        onChange={e => handleInputChange(ingredientType, ingredient.title, e)}
      />
      <label className="form-check-label pl-3" htmlFor={ingredient.name}>
        {`${ingredient.name} (+$${Number(ingredient.price).toFixed(2)})`}
      </label>
    </div>
  );
}

IngredientInputItem.propTypes = {
  ingredientName: PropTypes.string.isRequired,
  ingredient: PropTypes.object.isRequired,
  ingredientType: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default IngredientInputItem;
