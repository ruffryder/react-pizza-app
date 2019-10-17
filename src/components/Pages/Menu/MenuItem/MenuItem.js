import React from "react";
import "./MenuItem.css";
import Auxiliary from "../../../../hoc/Auxiliary";
import { connect } from "react-redux";
import { addItem } from "../../../../redux/actions/CartActions";
import { selectItem } from "../../../../redux/actions/ItemActions";

const MenuItem = ({ selectItem, large, dish, addItem }) => {
  if (large) {
    return (
      <Auxiliary>
        <div className="col-12 large-menu-item list-unstyled">
          <div className="container menu-item-container">
            <div className="row ">
              <span
                onClick={() => {
                  selectItem(dish);
                }}
                className="pointer col-3"
              >
                {dish.title}
              </span>
              <span className="col-4 pl-4">{dish.description}</span>
              <span className="col-1 pl-4">{dish.price}</span>
              <div className="col-4">
                <div className="container">
                  <div className="row">
                    <div className="p-0 col-5">
                      <button
                        className="btn btn-add"
                        onClick={() => addItem(dish)}
                      >
                        Add
                      </button>
                    </div>
                    <div className="p-0 col-5">
                      <button className="btn btn-remove">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="" />
          </div>
        </div>
      </Auxiliary>
    );
  } else {
    return (
      <Auxiliary>
        <li
          className="list-unstyled box menu-item"
          onClick={() => selectItem(dish)}
        >
          {dish.title}
        </li>
        <hr className="text-center w-75" />
      </Auxiliary>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  selectItem: item => dispatch(selectItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
