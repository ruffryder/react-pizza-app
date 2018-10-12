import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import MenuList from "../MenuList/MenuList";

const Menu = ({ dishes }) => (
  <section id="Menu">
    <Header title="Menu">
      <FontAwesomeIcon
        color="#e5bd0a"
        className="display-3 ml-4 pb-2"
        icon={faCalendarMinus}
      />
    </Header>
    <div className="container-fluid px-5 py-5">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Pizza-Menu Menu-Item">
          <MenuList title="Pizza" dishes={dishes} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Pasta-Menu Menu-Item">
          <h3 className="text-center mt-4">Pasta</h3>
          <div className="container mt-4">
            <div className="row text-left">
              <ul className="col-10 offset-md-1">
                <li className="list-unstyled">Four Cheese Pasta</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Pasta Carbonara</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Gnocchi with Tomato Sauce</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Pasta Con Pomodoro E Basilico</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Home-Style Baked Pasta</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-2 mx-lg-3 Salad-Menu Menu-Item">
          <h3 className="text-center mt-4">Salads</h3>
          <div className="container mt-4">
            <div className="row text-left">
              <ul className="col-10 offset-md-1">
                <li className="list-unstyled">
                  Antipasto Salad with Bocconcini and Green-Olive Tapenade
                </li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Chopped Italian Salad</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Summer Farro Salad</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">
                  Warm Castelfranco with Vincotto and Blu di Bufala
                </li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">
                  Anchovy and Roasted-Pepper Salad with Goat Cheese
                </li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">Garlicky Caesar Salad</li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">
                  Fennel and Red-Onion Salad with Parmesan
                </li>
                <hr className="text-center w-75" />
                <li className="list-unstyled">
                  Shaved Raw Asparagus with Parmesan Dressing
                </li>
              </ul>
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
