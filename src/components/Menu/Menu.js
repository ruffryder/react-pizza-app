import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";

const Menu = () => (
  <section id="Menu">
    <h1 className="Heading display-2 text-center">
      {" "}
      Menu
      <FontAwesomeIcon
        color="#e5bd0a"
        className="display-3 ml-4 pb-2"
        icon={faCalendarMinus}
      />
    </h1>
    <div className="container-fluid px-5 py-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Pizza-Menu Menu-Item">
          <h3 className="text-center mt-4">Pizza</h3>
          <div className="container mt-4">
            <div className="row text-left">
              <div className="col-10 offset-md-1">
                <p>Marinara</p>
                <hr className="text-center w-75" />
                <p>Margherita</p>
                <hr className="text-center w-75" />
                <p>Romana</p>
                <hr className="text-center w-75" />
                <p>Siciliana</p>
                <hr className="text-center w-75" />
                <p>Prosciutto e funghi</p>
                <hr className="text-center w-75" />
                <p>Capricciosa</p>
                <hr className="text-center w-75" />
                <p>Tirolese</p>
                <hr className="text-center w-75" />
                <p>Quattro stagioni</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Pasta-Menu Menu-Item">
          <h3 className="text-center mt-4">Pasta</h3>
          <div className="container mt-4">
            <div className="row text-left">
              <div className="col-10 offset-md-1">
                <p>Four Cheese Pasta</p>
                <hr className="text-center w-75" />
                <p>Pasta Carbonara</p>
                <hr className="text-center w-75" />
                <p>Gnocchi with Tomato Sauce</p>
                <hr className="text-center w-75" />
                <p>Pasta Con Pomodoro E Basilico</p>
                <hr className="text-center w-75" />
                <p>Home-Style Baked Pasta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Salad-Menu Menu-Item">
          <h3 className="text-center mt-4">Salads</h3>
          <div className="container mt-4">
            <div className="row text-left">
              <div className="col-10 offset-md-1">
                <p>Antipasto Salad with Bocconcini and Green-Olive Tapenade</p>
                <hr className="text-center w-75" />
                <p>Chopped Italian Salad</p>
                <hr className="text-center w-75" />
                <p>Summer Farro Salad</p>
                <hr className="text-center w-75" />
                <p>Warm Castelfranco with Vincotto and Blu di Bufala</p>
                <hr className="text-center w-75" />
                <p>Anchovy and Roasted-Pepper Salad with Goat Cheese</p>
                <hr className="text-center w-75" />
                <p>Garlicky Caesar Salad</p>
                <hr className="text-center w-75" />
                <p>Fennel and Red-Onion Salad with Parmesan</p>
                <hr className="text-center w-75" />
                <p>Shaved Raw Asparagus with Parmesan Dressing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Dessert-Menu Menu-Item">
          <h3 className="text-center mt-4">Desserts</h3>
          <div className="container mt-4">
            <div className="row text-left">
              <div className="col-10 offset-md-1">
                <p>Gelato</p>
                <hr className="text-center w-75" />
                <p>Tiramisu</p>
                <hr className="text-center w-75" />
                <p>Panna Cotta</p>
                <hr className="text-center w-75" />
                <p>Baba au Rhum or Rum Baba </p>
                <hr className="text-center w-75" />
                <p>Sicilian Cassata</p>
                <hr className="text-center w-75" />
                <p>Cannoli</p>
                <hr className="text-center w-75" />
                <p>Semi-Freddo</p>
                <hr className="text-center w-75" />
                <p>Torta Caprese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
