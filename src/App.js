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
        title: "Pizza Neapolitana",
        price: 2400,
        description: "Some very delicious description"
      },
      {
        _id: 2,
        title: "Pizza Margherita",
        price: 1800,
        description: "Some very delicious description"
      },
      {
        _id: 3,
        title: "Volcano Cake",
        price: 2000,
        description: "Some very delicious description"
      },
      {
        _id: 4,
        title: "Pizza Neapolitana",
        price: 2200,
        description: "Some very delicious description"
      },
      {
        _id: 5,
        title: "Pizza Neapolitana",
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
          <Content dishesData={this.state.dishes} />
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
