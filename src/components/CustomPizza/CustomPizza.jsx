import React, { Component } from "react";
import "./CustomPizza.css";
import { DataTypes } from "../../redux/actions/Types";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/ActionCreators";
import IngredientList from "./IngredientsList/IngredientsList";
import { transformObjectIntoArray } from "./CustomPizza.utils";

class CustomPizza extends Component {
  componentDidMount() {
    this.props.setIngredients();
  }

  render() {
    if (!this.props.ingredients) {
      return <div>Loading...</div>;
    }
    const transformedIngredients = transformObjectIntoArray(
      this.props.ingredients
    );
    return (
      <div className="container-fluid">
        <div className="row justify-content-between text-center">
          {transformedIngredients.map(ingredientsType => {
            return (
              <div key={ingredientsType.id} className="col">
                <IngredientList
                  name={ingredientsType.name}
                  ingredients={ingredientsType.items}
                />
              </div>
            );
          })}
        </div>
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
