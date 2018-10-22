import React from "react";
import "./MenuList.css";
import MenuItem from "./MenuItem/MenuItem";
import Aux from "../../hoc/Auxiliary";

const MenuList = ({
  handleMenuListBackClick,
  large,
  title,
  dishes,
  category_id,
  theme
}) => {
  if (large)
    return (
      <div className={theme}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2 text-right">
              <button
                className="btn btn-lg btn-danger"
                onClick={handleMenuListBackClick}
              >
                Back
              </button>
            </div>
            <div className="col-8 text-center">
              <h2 className="text-center mt-4 display-4">{title}</h2>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            <ul className="col-10 offset-md-1">
              {dishes
                .filter(dish => {
                  return dish.category_id === category_id;
                })
                .map(dish => {
                  return <MenuItem large={large} key={dish._id} dish={dish} />;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <Aux>
        <h2 className="text-center mt-4 display-3">{title}</h2>
        <div className="container mt-4">
          <div className="row text-left">
            <ul className="col-10 offset-md-1">
              {dishes.map(dish => {
                return <MenuItem key={dish._id} dish={dish} />;
              })}
            </ul>
          </div>
        </div>
      </Aux>
    );
  }
};

export default MenuList;
