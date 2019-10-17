import React, { Component } from "react";
import "./CustomPizza.css";
import { DataTypes } from "../../redux/actions/Types";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/ActionCreators";
import IngredientsInputList from "./IngredientsList/IngredientsInputList";
import { transformObjectIntoArray } from "./CustomPizza.utils";

class CustomPizza extends Component {
  state = {
    customPizza: {
      doughs: {},
      meats: [],
      sauces: [],
      cheeses: [],
      other: []
    },
    basePrice: 2
  };

  componentDidMount() {
    this.props.setIngredients();
  }

  handleCustomPizzaSubmit = e => {
    e.preventDefault();

    console.log("We did it for now");
  };

  handleInputChange = (ingredientId, ingredientType, ingredientTitle, e) => {
    this.addIngredient(ingredientId, ingredientType, ingredientTitle);
  };

  addIngredient = (ingredientId, ingredientType, ingredientTitle) => {
    const { customPizza } = this.state;
    const { ingredients } = this.props;
    switch (ingredientType) {
      case "doughs":
        this.setState({
          customPizza: {
            ...customPizza,
            doughs: {
              ...ingredients[ingredientType].items[ingredientTitle]
            }
          }
        });
        break;
      case "cheeses":
        const newCheesesValue = this.checkIngredient(
          [...customPizza.cheeses],
          ingredients[ingredientType].items[ingredientTitle]
        );
        this.setState({
          customPizza: {
            ...customPizza,
            cheeses: newCheesesValue
          }
        });
    }
  };

  checkIngredient = (ingredients, ingredientToCheck) => {
    console.log(ingredients, ingredientToCheck);
    if (
      ingredients.find(ingredient => ingredientToCheck.id === ingredient.id)
    ) {
      return ingredients.filter(
        ingredient => ingredient.id !== ingredientToCheck.id
      );
    } else {
      return ingredients.concat(ingredientToCheck);
    }
  };

  render() {
    if (!this.props.ingredients) {
      return <div>Loading...</div>;
    }
    const transformedIngredients = transformObjectIntoArray(
      this.props.ingredients
    );
    return (
      <div className="container-fluid">
        <form
          className="row justify-content-between"
          onSubmit={this.handleCustomPizzaSubmit}
        >
          {transformedIngredients.map(ingredientsType => {
            return (
              <div key={ingredientsType.id} className="col-md-4 col-lg">
                <IngredientsInputList
                  name={ingredientsType.name}
                  ingredients={ingredientsType.items}
                  inputType={ingredientsType.inputType}
                  handleInputChange={this.handleInputChange}
                />
              </div>
            );
          })}
          <div className="row col-12 mt-6">
            <div className="col-6 d-none d-md-block"></div>
            <div className="col-12 text-center col-md-6">
              <button
                type="submit"
                className="btn btn-lg btn-general-inverted mr-5"
              >
                Add to Order
              </button>
              <span className="h1">
                Price: $ {this.state.basePrice.toFixed(2)}{" "}
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.data.ingredients
});

const mapDispatchToProps = dispatch => ({
  setIngredients: () => dispatch(loadData(DataTypes.INGREDIENTS))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomPizza);
