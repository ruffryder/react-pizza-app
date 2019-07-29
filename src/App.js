import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PizzaCatUrl from "./assets/img/pizza-cat-img.jpg";
import PastaCatUrl from "./assets/img/pasta.jpg";
import SaladCatUrl from "./assets/img/salads.jpg";
import DessertCatUrl from "./assets/img/desserts.jpg";
import CategoryList from "./components/CategoryList/CategoryList";
import MenuList from "./components/Menu/MenuList/MenuList";
import Modal from "./components/UI/Modal/Modal";
import MenuItemDetails from "./components/Menu/MenuItemDetails/MenuItemDetails";
import { dishes } from "./dishesData";
import { configureAnchors } from "react-scrollable-anchor";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Catering from "./components/Catering/Catering";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { withRouter } from "react-router-dom";

configureAnchors({
  offset: 0,
  scrollDuration: 1200,
  keepLastAnchorHash: false
});

class App extends Component {
  state = {
    categories: [
      { _id: 1, title: "Pizza", imageUrl: PizzaCatUrl },
      { _id: 2, title: "Pasta", imageUrl: PastaCatUrl },
      { _id: 3, title: "Salads", imageUrl: SaladCatUrl },
      { _id: 4, title: "Desserts", imageUrl: DessertCatUrl }
    ],
    dishes: dishes,
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
              categories={this.state.categories}
            />
          )}
          {this.state.showMenuList && (
            <MenuList
              large={true}
              title={this.state.selectedCategory.title}
              category_id={this.state.selectedCategory._id}
              dishes={this.state.dishes}
              theme="basic"
              handleMenuItemClick={this.handleMenuItemClick}
              handleMenuListBackClick={this.handleMenuListBackClick}
              handleBackdropClick={this.handleBackdropClick}
              showItemDetails={this.state.showItemDetails}
            />
          )}
        </NavBar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home categories={this.state.categories} />}
          />
          <Route path="/about" component={About} />
          <Route
            path="/menu"
            render={() => (
              <Menu
                dishes={this.state.dishes}
                categories={this.state.categories}
                handleMenuItemClick={this.handleMenuItemClick}
                handleBackdropClick={this.handleBackdropClick}
                showItemDetails={this.state.showItemDetails}
              />
            )}
          />
          <Route path="/catering" component={Catering} />
          <Route component={PageNotFound} />
        </Switch>
        {this.state.selectedItem && this.state.showItemDetails && (
          <Modal>
            <MenuItemDetails item={this.state.selectedItem} />
          </Modal>
        )}
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
