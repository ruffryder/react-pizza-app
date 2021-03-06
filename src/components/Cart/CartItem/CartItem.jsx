import React from "react";
import "./CartItem.css";
import PropTypes from "prop-types";

export default function CartItem({
  item: { imageUrl, price, quantity, title }
}) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={title} />
      <div className="item-details">
        <span className="item-details__title">{title}</span>
        <span className="item-details__price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};
