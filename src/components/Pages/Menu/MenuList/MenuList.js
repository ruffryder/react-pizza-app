import React from "react";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../../redux/CartSelectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Aux from "../../../../hoc/Auxiliary";
import MenuItem from "../MenuItem/MenuItem";
import PropTypes from "prop-types";
import "./MenuList.css";

const MenuList = ({
  handleMenuListBackClick,
  large,
  title,
  cartItems,
  cartTotal,
  dishes,
  category_id,
  theme,
}) => {
  if (large)
    return (
      <div className={theme}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-1 text-left">
              <button
                className="btn btn-lg  pr-4 p-0 pt-4 close-button"
                onClick={handleMenuListBackClick}
              >
                <FontAwesomeIcon
                  color="#4B3114 "
                  className="ml-2 pt-2"
                  icon={faShare}
                  size="4x"
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
              .filter((dish) => {
                return dish.category_id === category_id;
              })
              .map((dish) => {
                dish.quantity = 0;
                cartItems.map((cartItem) => {
                  if (cartItem.id === dish.id) {
                    dish.quantity = cartItem.quantity;
                  }
                });
                return <MenuItem large={large} key={dish.id} dish={dish} />;
              })}
            <div className="col-8 p-4">
              <p className="text-right total-price">
                Total price: ${Number(cartTotal).toFixed(2)}
              </p>
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
              {dishes
                .filter((dish) => {
                  return dish.category_id === category_id;
                })
                .map((dish) => {
                  return <MenuItem key={dish.id} dish={dish} />;
                })}
            </ul>
          </div>
        </div>
      </Aux>
    );
  }
};

MenuList.propTypes = {
  handleMenuListBackClick: PropTypes.func,
  large: PropTypes.bool,
  title: PropTypes.string.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartTotal: PropTypes.number.isRequired,
  dishes: PropTypes.arrayOf(PropTypes.object).isRequired,
  category_id: PropTypes.number.isRequired,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => ({
  dishes: state.data.dishes,
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(MenuList);
