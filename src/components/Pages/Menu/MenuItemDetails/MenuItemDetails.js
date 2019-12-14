import React from "react";
import "./MenuItemDetails.css";
import { connect } from "react-redux";
import { addItem } from "../../../../redux/actions/CartActions";
import PropTypes from "prop-types";

const MenuItemDetails = ({ item, addItem }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid w-75"
            src={item.imageUrl}
            alt={item.title}
          />
        </div>
        <div className="col-6">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button
            className="btn btn-warning btn-order"
            onClick={() => addItem(item)}
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

MenuItemDetails.propTypes = {
  addItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(MenuItemDetails);
