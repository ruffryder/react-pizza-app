import React from "react";
import "./MenuList.css";
import MenuItem from "../MenuItem/MenuItem";
import Aux from "../../../hoc/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const MenuList = ({
  showItemDetails,
  handleBackdropClick,
  handleMenuItemClick,
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
            <div className="col-1 text-left">
              <button
                className="btn btn-lg  pr-4 p-0 close-button"
                onClick={handleMenuListBackClick}
              >
                <FontAwesomeIcon
                  color="#4B3114 "
                  className="ml-2 pt-2"
                  icon={faShare}
                  size="5x"
                  transform="rotate-180"
                />
              </button>
            </div>
            <div className="col-8 text-center">
              <h1 className="text-center mt-4 category_title">{title}</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4 pb-4">
          <div className="row">
            {dishes
              .filter(dish => {
                return dish.category_id === category_id;
              })
              .map(dish => {
                return (
                  <MenuItem
                    showItemDetails={showItemDetails}
                    handleBackdropClick={handleBackdropClick}
                    handleMenuItemClick={handleMenuItemClick}
                    large={large}
                    key={dish._id}
                    dish={dish}
                  />
                );
              })}
            <div className="col-8 p-4">
              <p className="text-right total-price">Total price:</p>
            </div>
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
                return (
                  <MenuItem
                    handleMenuItemClick={handleMenuItemClick}
                    key={dish._id}
                    dish={dish}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </Aux>
    );
  }
};

const mapStateToProps = state => ({
  dishes: state.data.dishes
});

export default connect(mapStateToProps)(MenuList);
