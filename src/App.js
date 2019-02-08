import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PizzaCatUrl from "./assets/img/pizza-cat-img.jpg";
import PastaCatUrl from "./assets/img/pasta.jpg";
import SaladCatUrl from "./assets/img/salads.jpg";
import DessertCatUrl from "./assets/img/desserts.jpg";
import CategoryList from "./components/CategoryList/CategoryList";
import MenuList from "./components/MenuList/MenuList";
import Main from "./components/Main/Main";

import { configureAnchors } from "react-scrollable-anchor";

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
    dishes: [
      {
        _id: 1,
        category_id: 1,
        title: "Marinara",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 2,
        category_id: 1,
        title: "Margherita",
        price: 1800,
        description: "Some very delicious description"
      },
      {
        _id: 3,
        category_id: 1,
        title: "Romana",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 4,
        category_id: 1,
        title: "Siciliana",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 5,
        category_id: 1,
        title: "Prosciutto e funghi",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 6,
        category_id: 1,
        title: "Capricciosa",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 7,
        category_id: 1,
        title: "Tirolese",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 8,
        category_id: 1,
        title: "Quattro stagioni",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 9,
        category_id: 2,
        title: "Four Cheese Pasta",
        price: 2100,
        description:
          "Some very delicious description Some very delicious description"
      },
      {
        _id: 10,
        category_id: 2,
        title: "Pasta Carbonara",
        price: 1900,
        description: "Some very delicious description"
      },
      {
        _id: 11,
        category_id: 2,
        title: "Gnocchi with Tomato Sauce",
        price: 2100,
        description: "Some very delicious description"
      },
      {
        _id: 12,
        category_id: 2,
        title: "Pasta Con Pomodoro E Basilico",
        price: 2500,
        description: "Some very delicious description"
      },
      {
        _id: 13,
        category_id: 2,
        title: "Home-Style Baked Pasta",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 14,
        category_id: 3,
        title: "Antipasto Salad with Bocconcini and Green-Olive Tapenade",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 15,
        category_id: 3,
        title: "Chopped Italian Salad",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 16,
        category_id: 3,
        title: "Summer Farro Salad",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 17,
        category_id: 3,
        title: "  Warm Castelfranco with Vincotto and Blu di Bufala",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 18,
        category_id: 3,
        title: "Anchovy and Roasted-Pepper Salad with Goat Cheese",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 19,
        category_id: 3,
        title: "Garlicky Caesar Salad",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 20,
        category_id: 3,
        title: " Fennel and Red-Onion Salad with Parmesan",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 21,
        category_id: 3,
        title: "   Shaved Raw Asparagus with Parmesan Dressing",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 22,
        category_id: 4,
        title: "Gelato",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 23,
        category_id: 4,
        title: "Tiramisu",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 24,
        category_id: 4,
        title: "Panna Cotta",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 25,
        category_id: 4,
        title: "Baba au Rhum or Rum Baba ",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 26,
        category_id: 4,
        title: "Sicilian Cassata",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 27,
        category_id: 4,
        title: "Cannoli",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 28,
        category_id: 4,
        title: "Semi-Freddo",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 29,
        category_id: 4,
        title: "Torta Caprese",
        price: 2000,
        description: "Some very delicious description"
      }
    ],
    showCategories: false,
    showMenuList: false,
    selectedCategory: null,
    showItemDetails: false,
    selectedItem: null
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
        <NavBar handleOrderClick={this.handleOrderClick}>
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
              handleMenuListBackClick={this.handleMenuListBackClick}
            />
          )}
        </NavBar>
        <Main
          showItemDetails={this.state.showItemDetails}
          handleBackdropClick={this.handleBackdropClick}
          handleMenuItemClick={this.handleMenuItemClick}
          dishes={this.state.dishes}
          categories={this.state.categories}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
