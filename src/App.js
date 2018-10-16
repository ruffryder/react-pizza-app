import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import PizzaCatUrl from "./assets/img/1.jpg";
import PastaCatUrl from "./assets/img/pasta.jpg";
import SaladCatUrl from "./assets/img/salads.jpg";
import DessertCatUrl from "./assets/img/desserts.jpg";
import CategoryList from "./components/CategoryList/CategoryList";

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
        title: "Marinara",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 2,
        title: "Margherita",
        price: 1800,
        description: "Some very delicious description"
      },
      {
        _id: 3,
        title: "Romana",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 4,
        title: "Siciliana",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 5,
        title: "Prosciutto e funghi",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 6,
        title: "Capricciosa",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 7,
        title: "Tirolese",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 8,
        title: "Quattro stagioni",
        price: 2200,
        description: "Some very delicious description"
      }
    ],
    showCategories: true
  };

  handleOrderClick = () => {
    this.setState({ showCategories: true });
  };

  handleCloseClick = () => {
    this.setState({ showCategories: false });
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
                handleCloseClick={this.handleCloseClick}
                categories={this.state.categories}
              />
            )}
          </NavBar>

          {/* <Jumbotron /> */}
          <Content dishes={this.state.dishes} />
          {/* <Layout>
          <PizzaBuilder />
        </Layout> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
