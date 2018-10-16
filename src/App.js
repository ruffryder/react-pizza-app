import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import PizzaCatUrl from "./assets/img/1.jpg";
import PastaCatUrl from "./assets/img/pasta.jpg";
import SaladCatUrl from "./assets/img/salads.jpg";
import DessertCatUrl from "./assets/img/desserts.jpg";
import CategoryList from "./components/CategoryList/CategoryList";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import bgImage from "./assets/img/1.jpg";
import bgImage2 from "./assets/img/2.jpg";
import bgImage3 from "./assets/img/3.jpg";
import MenuList from "./components/MenuList/MenuList";

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
      }
    ],
    showCategories: true,
    showMenuList: true,
    selectedCategory: { _id: 1, title: "Pizza", imageUrl: PizzaCatUrl }
  };

  handleOrderClick = () => {
    this.setState({ showCategories: true });
  };

  handleCloseClick = () => {
    this.setState({
      showCategories: false,
      showMenuList: false,
      selectedCategory: null
    });
  };

  handleCategoryClick = category => {
    this.setState({ showMenuList: true, selectedCategory: category });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar
            handleOrderClick={this.handleOrderClick}
            dishes={this.state.dishes}
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
                dishes={this.state.dishes}
                theme="Basic"
              />
            )}
          </NavBar>

          <Header
            title="We love food"
            subtitle=" We pride ourselves on producing great pizzas, pastas, salads. Quality
        ingredients is where it all starts. We then take those ingredients and
        put them together in just that perfect way to create some great tasting
        food"
          />
          <img src={bgImage} className="img-fluid w-100" alt="kneading dough" />
          <Header
            title="You can choose."
            subtitle="Our pizza is made with hand-tossed dough & real milk cheese. Choose between regular or thin crust. Create your own pizza."
          />
          <img
            src={bgImage2}
            className="img-fluid w-100"
            alt="delicious pizza"
          />
          <Menu dishes={this.state.dishes} />
          <Header title="We deliver. 24/7." />
          <img src={bgImage3} className="img-fluid w-100" alt="slicing pizza" />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
