import React, { Component } from "react";
import "./CustomPizza.css";
import { connect } from "react-redux";
import { fetchIngredientsStartAsync } from "../../redux/actions/ActionCreators";
import { addItem } from "../../redux/actions/CartActions";
import IngredientsInputList from "./IngredientsList/IngredientsInputList";
import { transformObjectIntoArray } from "./CustomPizza.utils";
import uuid from "uuid/v4";
import customPizza from "../../assets/img/custom.png";
import PropTypes from "prop-types";
import Spinner from "../../components/Spinner/Spinner";

class CustomPizza extends Component {
  unsubscribeFromSnapshot = null;
  state = {
    customPizza: {
      doughs: {},
      meats: [],
      sauces: [],
      cheeses: [],
      other: [],
    },
    basePrice: 2,
    price: 2,
    errors: {},
  };

  componentDidMount() {
    this.props.fetchIngredientsStartAsync();
  }

  handleCustomPizzaSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // Check if at least one dough type is selected
    if (Object.keys(this.state.customPizza.doughs).length === 0) {
      errors["dough"] = "Please, select a type of dough";
      this.setState({ errors });
    } else {
      this.setState({ errors: {} });
    }
    if (Object.keys(this.state.errors).length !== 0) {
      return;
    } else {
      const item = {
        id: uuid(),
        category_id: 0,
        title: "Custom-made Pizza",
        price: Number(this.state.price).toFixed(2),
        description: "Custom-made Pizza",
        imageUrl: customPizza,
        ingredients: [this.state.customPizza],
      };
      this.props.addItem(item);
    }
  };

  handleInputChange = (ingredientType, ingredientTitle, e) => {
    this.addIngredient(ingredientType, ingredientTitle);
  };

  addIngredient = (ingredientType, ingredientTitle) => {
    const { customPizza } = this.state;
    const { ingredients } = this.props;
    switch (ingredientType) {
      case "doughs":
        this.setState(
          {
            customPizza: {
              ...customPizza,
              doughs: {
                ...ingredients[ingredientType].items[ingredientTitle],
              },
            },
          },
          () => this.updatePrice()
        );
        break;
      case "cheeses":
        const newCheesesValue = this.checkIngredient(
          [...customPizza.cheeses],
          ingredients[ingredientType].items[ingredientTitle]
        );
        this.setState(
          {
            customPizza: {
              ...customPizza,
              cheeses: newCheesesValue,
            },
          },
          () => this.updatePrice()
        );
        break;
      case "meats":
        const newMeatsValue = this.checkIngredient(
          [...customPizza.meats],
          ingredients[ingredientType].items[ingredientTitle]
        );
        this.setState(
          {
            customPizza: {
              ...customPizza,
              meats: newMeatsValue,
            },
          },
          () => this.updatePrice()
        );
        break;
      case "sauces":
        const newSaucesValue = this.checkIngredient(
          [...customPizza.sauces],
          ingredients[ingredientType].items[ingredientTitle]
        );
        this.setState(
          {
            customPizza: {
              ...customPizza,
              sauces: newSaucesValue,
            },
          },
          () => this.updatePrice()
        );
        break;
      case "other":
        const newOtherValue = this.checkIngredient(
          [...customPizza.other],
          ingredients[ingredientType].items[ingredientTitle]
        );
        this.setState(
          {
            customPizza: {
              ...customPizza,
              other: newOtherValue,
            },
          },
          () => this.updatePrice()
        );
        break;
      default:
        return;
    }
  };

  // After adding or removing an ingredient, we always update the new price of the item
  updatePrice = () => {
    let newPrice = this.state.basePrice;
    let { customPizza } = this.state;
    // check if we have a dough selected
    if (customPizza.doughs.price) {
      newPrice += customPizza.doughs.price;
    }
    // Loop through all the ingredients type and add every item's price to the newPrice
    for (let i = 0; i < customPizza.cheeses.length; i++) {
      newPrice += customPizza.cheeses[i].price;
    }
    for (let i = 0; i < customPizza.sauces.length; i++) {
      newPrice += customPizza.sauces[i].price;
    }
    for (let i = 0; i < customPizza.meats.length; i++) {
      newPrice += customPizza.meats[i].price;
    }
    for (let i = 0; i < customPizza.other.length; i++) {
      newPrice += customPizza.other[i].price;
    }

    this.setState({
      price: newPrice,
    });
  };

  // Check if we have the ingredient and if we do -> remove it from the array of ingredients; otherwise -> add it to the array
  checkIngredient = (ingredients, ingredientToCheck) => {
    if (
      ingredients.find((ingredient) => ingredientToCheck.id === ingredient.id)
    ) {
      return ingredients.filter(
        (ingredient) => ingredient.id !== ingredientToCheck.id
      );
    } else {
      return ingredients.concat(ingredientToCheck);
    }
  };

  shiftArrayDoughIndexToStart = (arrayIngredients) => {
    for (let i = 0; i < arrayIngredients.length; i++) {
      if (arrayIngredients[i].inputType === "radio") {
        let temp = arrayIngredients[0];
        arrayIngredients[0] = arrayIngredients[i];
        arrayIngredients[i] = temp;
      }
    }
    return arrayIngredients;
  };

  render() {
    if (!this.props.ingredients) {
      return <Spinner />;
    }
    let transformedIngredients = transformObjectIntoArray(
      this.props.ingredients
    );
    // Find the dough array index and put it first in the array of ingredients
    transformedIngredients = this.shiftArrayDoughIndexToStart(
      transformedIngredients
    );
    return (
      <div className="container-fluid">
        <form className="row" onSubmit={this.handleCustomPizzaSubmit}>
          {transformedIngredients.map((ingredientsType) => {
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
            <div className="row align-items-baseline mx-auto col-12 text-center col-md-6">
              <button
                type="submit"
                className="col-8 mx-auto col-sm-6 col-lg-4 btn btn-lg btn-general-inverted align-self-center"
              >
                Add to Order
              </button>
              <span className="col-12 col-sm-6 col-lg-4 h1 mt-sm-0 mt-5 align-self-center">
                Price: $ {this.state.price.toFixed(2)}{" "}
              </span>
            </div>
          </div>
          <div className="row col-12">
            {this.state.errors.dough && (
              <div className="alert alert-danger col-12 col-md-3 col-lg-2 mt-3 offset-md-6">
                {this.state.errors.dough}
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}

CustomPizza.propTypes = {
  addItem: PropTypes.func.isRequired,
  ingredients: PropTypes.object,
};

const mapStateToProps = (state) => ({
  ingredients: state.data.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  fetchIngredientsStartAsync: () => dispatch(fetchIngredientsStartAsync()),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomPizza);
