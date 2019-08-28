import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CategoryList from "./components/CategoryList/CategoryList";
import MenuList from "./components/Menu/MenuList/MenuList";
import Modal from "./components/UI/Modal/Modal";
import MenuItemDetails from "./components/Menu/MenuItemDetails/MenuItemDetails";
import { configureAnchors } from "react-scrollable-anchor";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Catering from "./components/Catering/Catering";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { withRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import { loadData } from "./redux/actions/ActionCreators";
import { DataTypes } from "./redux/actions/Types";
import Backdrop from "./components/Backdrop/Backdrop";

import { connect } from "react-redux";

configureAnchors({
  offset: 0,
  scrollDuration: 1200,
  keepLastAnchorHash: false
});

class App extends Component {
  state = {
    showCategories: false,
    showMenuList: false,
    selectedCategory: null,
    showItemDetails: false,
    selectedItem: null,
    jumboBackground: ""
  };

  handleOrderClick = () => {
    this.setState(prevState => {
      return { showCategories: !prevState.showCategories, showMenuList: false };
    });
  };

  handleCloseClick = () => {
    this.setState({
      showCategories: false,
      showMenuList: false,
      selectedCategory: null
    });
  };

  handleCategoryClick = category => {
    this.setState({
      showMenuList: true,
      showCategories: false,
      selectedCategory: category
    });
  };

  handleMenuItemClick = dish => {
    this.setState({
      showItemDetails: true,
      selectedItem: dish
    });
  };

  handleBackdropClick = () => {
    this.setState({
      showItemDetails: false,
      selectedItem: null
    });
  };

  handleMenuListBackClick = () => {
    this.setState({
      showMenuList: false,
      showCategories: true,
      selectedCategory: null
    });
  };

  componentDidMount() {
    this.props.setCategories();
    this.props.setDishes();
  }

  render() {
    return (
      <div className="App">
        <NavBar
          jumboBackground={this.props.location.pathname}
          handleOrderClick={this.handleOrderClick}
          handleCloseClick={this.handleCloseClick}
        >
          {this.state.showCategories && (
            <CategoryList
              handleCategoryClick={this.handleCategoryClick}
              handleCloseClick={this.handleCloseClick}
            />
          )}
          {this.state.showMenuList && (
            <MenuList
              large={true}
              title={this.state.selectedCategory.title}
              category_id={this.state.selectedCategory._id}
              theme="basic"
              handleMenuItemClick={this.handleMenuItemClick}
              handleMenuListBackClick={this.handleMenuListBackClick}
              handleBackdropClick={this.handleBackdropClick}
              showItemDetails={this.state.showItemDetails}
            />
          )}
        </NavBar>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" component={About} />
          <Route
            path="/menu"
            render={() => (
              <Menu
                handleMenuItemClick={this.handleMenuItemClick}
                handleBackdropClick={this.handleBackdropClick}
                showItemDetails={this.state.showItemDetails}
              />
            )}
          />
          <Route path="/catering" component={Catering} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        {this.state.selectedItem && this.state.showItemDetails && (
          <React.Fragment>
            <Backdrop
              show={this.state.showItemDetails}
              clicked={this.handleBackdropClick}
            />
            <Modal>
              <MenuItemDetails item={this.state.selectedItem} />
            </Modal>
          </React.Fragment>
        )}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCategories: () => dispatch(loadData(DataTypes.CATEGORIES)),
  setDishes: () => dispatch(loadData(DataTypes.DISHES))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
