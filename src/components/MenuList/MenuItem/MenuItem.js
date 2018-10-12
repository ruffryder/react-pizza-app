import React from "react";
import "./MenuItem.css";
import Auxiliary from "../../../hoc/Auxiliary";

const MenuItem = ({ dish }) => (
  <Auxiliary>
    <li className="list-unstyled">{dish.title}</li>
    <hr className="text-center w-75" />
  </Auxiliary>
);
export default MenuItem;
