import React, { Component } from "react";
import "./App.css";
// import Layout from "./components/Layout/Layout";
// import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";
import NavBar from "./components/NavBar/NavBar";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
// import VerticalNav from "./components/VerticalNav/VerticalNav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
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
    ]
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
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
