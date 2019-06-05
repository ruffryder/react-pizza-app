import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Catering from "../Catering/Catering";
import PageNotFound from "../PageNotFound/PageNotFound";

const Main = props => {
  let properties = props;
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home {...properties} categories={properties.categories} />
          )}
        />
        <Route path="/about" component={About} />
        <Route
          path="/menu"
          render={() => (
            <Menu
              dishes={props.dishes}
              categories={props.categories}
              handleMenuItemClick={props.handleMenuItemClick}
              handleBackdropClick={props.handleBackdropClick}
              showItemDetails={props.showItemDetails}
            />
          )}
        />
        <Route path="/catering" component={Catering} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  );
};

export default Main;
