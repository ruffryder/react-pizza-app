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
import Checkout from "./components/Checkout/Checkout";
import CustomPizza from "./components/CustomPizza/CustomPizza";

import { connect } from "react-redux";
import { deselectItem } from "./redux/actions/ItemActions";

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
              handleMenuListBackClick={this.handleMenuListBackClick}
            />
          )}
        </NavBar>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" component={About} />
          <Route path="/menu" render={() => <Menu />} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/make-pizza" component={CustomPizza} />
          <Route path="/catering" component={Catering} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        {this.props.selectedItem && this.props.showItemDetails && (
          <React.Fragment>
            <Backdrop
              show={this.props.showItemDetails}
              clicked={() => this.props.deselectItem()}
            />
            <Modal>
              <MenuItemDetails item={this.props.selectedItem} />
            </Modal>
          </React.Fragment>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem,
  showItemDetails: state.item.showItemDetails
});

const mapDispatchToProps = dispatch => ({
  setCategories: () => dispatch(loadData(DataTypes.CATEGORIES)),
  setDishes: () => dispatch(loadData(DataTypes.DISHES)),
  deselectItem: () => dispatch(deselectItem())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
