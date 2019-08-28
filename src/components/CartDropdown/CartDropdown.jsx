import React from "react";
import "./CartDropdown.css";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/CartSelectors";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => {
          return <CartItem key={cartItem._id} item={cartItem} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
