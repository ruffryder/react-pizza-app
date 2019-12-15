import React from "react";
import "./CartDropdown.css";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/CartSelectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../../redux/actions/CartActions";
import PropTypes from "prop-types";

function CartDropdown({ cartItems, history, dispatch, handleCloseClick }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty </span>
        )}
      </div>

      <button
        className="btn btn-large btn-general-inverted mx-auto mt-5"
        onClick={() => {
          handleCloseClick();
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        Go to Checkout
      </button>
    </div>
  );
}

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
