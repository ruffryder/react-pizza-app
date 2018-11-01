import React from "react";
import "./MenuItem.css";
import Auxiliary from "../../../hoc/Auxiliary";

const MenuItem = ({ large, dish }) => {
  if (large) {
    return (
      <Auxiliary>
        <div className="col-12 LargeMenuItem list-unstyled ItemTitle">
          <div className="container">
            <div className="row ">
              <span className="col-3">{dish.title}</span>
              <span className="col-4 pl-4">{dish.description}</span>
              <span className="col-1 pl-4">{dish.price}</span>
              <div className="col-2">
                <button className="btn btn-success responsive-font">Add</button>
              </div>
              <div className="col-2">
                <button className="btn btn-danger responsive-font">
                  Remove
                </button>
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
        <li className="list-unstyled MenuItem">{dish.title}</li>
        <hr className="text-center w-75" />
      </Auxiliary>
    );
  }
};
export default MenuItem;
