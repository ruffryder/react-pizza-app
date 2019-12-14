import React, { Component } from "react";
import "./CustomPizza.css";
import { DataTypes } from "../../redux/actions/Types";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/ActionCreators";
import { addItem } from "../../redux/actions/CartActions";
import IngredientsInputList from "./IngredientsList/IngredientsInputList";
import { transformObjectIntoArray } from "./CustomPizza.utils";
import uuid from "uuid/v4";
import customPizza from "../../assets/img/custom.png";

class CustomPizza extends Component {
  state = {
    customPizza: {
      doughs: {},
      meats: [],
      sauces: [],
      cheeses: [],
      other: []
    },
    basePrice: 2,
    price: 2
  };

  componentDidMount() {
    this.props.setIngredients();
  }

  handleCustomPizzaSubmit = e => {
    e.preventDefault();
    const item = {
      id: uuid(),
      category_id: 0,
      title: "Custom-made Pizza",
      price: Number(this.state.price).toFixed(2),
      description: "Custom-made Pizza",
      imageUrl: customPizza,
      ingredients: [this.state.customPizza]
    };
    console.log(item);
    this.props.addItem(item);
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
                ...ingredients[ingredientType].items[ingredientTitle]
              }
            }
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
              cheeses: newCheesesValue
            }
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
              meats: newMeatsValue
            }
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
              sauces: newSaucesValue
            }
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
              other: newOtherValue
            }
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
      price: newPrice
    });
  };

  // Check if we have the ingredient and if we do -> remove it from the array of ingredients; otherwise -> add it to the array
  checkIngredient = (ingredients, ingredientToCheck) => {
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
    // console.log(this.state.customPizza);
    return (
      <div className="container-fluid">
        <form className="row" onSubmit={this.handleCustomPizzaSubmit}>
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
            <div className="row align-items-baseline mx-auto col-12 text-center col-md-6">
              <button
                type="submit"
                className="col-12 col-md-6 col-lg-4 btn btn-lg btn-general-inverted"
              >
                Add to Order
              </button>
              <span className="col-12 col-md-6 col-lg-4 h1">
                Price: $ {this.state.price.toFixed(2)}{" "}
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
  setIngredients: () => dispatch(loadData(DataTypes.INGREDIENTS)),
  addItem: item => dispatch(addItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomPizza);
