import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Catering from "../Catering/Catering";
import PageNotFound from "../PageNotFound/PageNotFound";

const Main = props => {
  let properties = props;
  return <main />;
};

export default Main;

// <Main
//   showItemDetails={this.state.showItemDetails}
//   handleBackdropClick={this.handleBackdropClick}
//   handleMenuItemClick={this.handleMenuItemClick}
//   dishes={this.state.dishes}
//   categories={this.state.categories}
// />
