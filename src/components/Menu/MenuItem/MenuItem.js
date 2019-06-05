import React from "react";
import "./MenuItem.css";
import Auxiliary from "../../../hoc/Auxiliary";

const MenuItem = ({ handleMenuItemClick, large, dish }) => {
  if (large) {
    return (
      <Auxiliary>
        <div className="col-12 large-menu-item list-unstyled">
          <div className="container menu-item-container">
            <div className="row ">
              <span className="col-3">{dish.title}</span>
              <span className="col-4 pl-4">{dish.description}</span>
              <span className="col-1 pl-4">{dish.price}</span>
              <div className="col-4">
                <div className="container">
                  <div className="row">
                    <div className="p-0 col-5">
                      <button className="btn btn-add">Add</button>
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
          onClick={() => handleMenuItemClick(dish)}
        >
          {dish.title}
        </li>
        <hr className="text-center w-75" />
      </Auxiliary>
    );
  }
};
export default MenuItem;
