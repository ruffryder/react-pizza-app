import React from "react";
import "./MenuItemDetails.css";
import { connect } from "react-redux";
import { addItem } from "../../../../redux/actions/CartActions";
import PropTypes from "prop-types";

const MenuItemDetails = ({ item, addItem }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6">
          <img
            className="img-fluid w-100 w-sm-75"
            src={item.imageUrl}
            alt={item.title}
          />
        </div>
        <div className="row col-12 col-sm-6">
          <h2 className="col-12 text-center">{item.title}</h2>
          <p className="col-12">{item.description}</p>
          <button
            className="btn btn-warning btn-order col-6 align-self-end ml-auto"
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
  item: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(MenuItemDetails);
