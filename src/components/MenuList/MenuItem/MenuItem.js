import React from "react";
import "./MenuItem.css";
import Auxiliary from "../../../hoc/Auxiliary";

const MenuItem = ({ large, dish }) => {
  if (large) {
    return (
      <div className="LargeMenuItem">
        <li className="list-unstyled ItemTitle">{dish.title}</li>
        <span className="ml-4">{dish.price}</span>
        <span className="ml-4">{dish.description}</span>
        <hr className="" />
      </div>
    );
  } else {
    return (
      <Auxiliary>
        <li className="list-unstyled">{dish.title}</li>
        <hr className="text-center w-75" />
      </Auxiliary>
    );
  }
};
export default MenuItem;
