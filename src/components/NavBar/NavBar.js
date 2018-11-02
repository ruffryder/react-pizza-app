import React from "react";
import logo from "../../assets/img/logo.svg";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./NavBar.css";
import OrderButton from "../../assets/img/btn_order.png";
import OrderButtonFocus from "../../assets/img/btn_order_focus.png";

const NavBar = ({ handleOrderClick, ...props }) => {
  return (
    <Jumbotron>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid text-center ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="w-15" />
          <div className="Row row mx-auto justify-content-center">
            <div
              className="col-sm-3 col-md-3 px-sm-0 justify-content-end collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
                <li className="nav-item  align-self-center active mt-4 BorderRight">
                  <a className="nav-link mr-1 text-uppercase" href="#Home">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item  align-self-center mt-4">
                  <a className="nav-link ml-1 text-uppercase" href="#Pricing">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 px-sm-0 mx-1 align-self-center">
              <a className="display-md-none logo-link" href="/">
                <img src={logo} className="Logo align-top" alt="pizza logo" />
              </a>
            </div>
            <div
              className="col-sm-3 col-md-3 px-sm-0 collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item  align-self-center mt-4 BorderRight">
                  <a className="nav-link mr-1 text-uppercase" href="#Menu">
                    Menu
                  </a>
                </li>

                <li className="nav-item align-self-center mt-4 ">
                  <a className="nav-link ml-1 text-uppercase" href="#About">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-15">
            <button onClick={handleOrderClick} id="order_btn" className="mt-3">
              <img
                className="full"
                src={OrderButton}
                alt="Order Button Active"
              />
              <img
                className="empty"
                src={OrderButtonFocus}
                alt="Order Button"
              />
            </button>
          </div>
        </div>
      </nav>
      {props.children}
    </Jumbotron>
  );
};

export default NavBar;
