import React from "react";
import PropTypes from "prop-types";
import "./Jumbotron.css";

const Jumbotron = props => {
  let classes = "jumbotron ";
  if (props.classes) {
    classes += props.classes;
  }
  return <div className={classes}>{props.children}</div>;
};

Jumbotron.propTypes = {
  classes: PropTypes.string
};

export default Jumbotron;
