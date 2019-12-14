import React from "react";
import "./CartIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/actions/CartActions";
import { selectCartItemsCount } from "../../../redux/CartSelectors";
import PropTypes from "prop-types";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      {" "}
      <FontAwesomeIcon
        className="ml-2 pt-2"
        icon={faShoppingBasket}
        size="3x"
      />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
