import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => {
  let classes = "jumbotron ";
  if (props.classes) {
    classes += props.classes;
  }
  return <div className={classes}>{props.children}</div>;
};

export default Jumbotron;
