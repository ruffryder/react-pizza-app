import React from "react";
import logo from "../../assets/img/logo.svg";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./NavBar.css";
import OrderButton from "../../assets/img/btn_order.png";
import OrderButtonFocus from "../../assets/img/btn_order_focus.png";
import { NavLink } from "react-router-dom";

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
                  <NavLink to="/" className="nav-link mr-3 text-uppercase">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li className="nav-item  align-self-center mt-4">
                  <a className="nav-link ml-3 text-uppercase" href="#Pricing">
                    Catering
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 px-sm-0 mx-1 align-self-center">
              <NavLink to="/" className="display-md-none logo-link">
                <img src={logo} className="Logo align-top" alt="pizza logo" />
              </NavLink>
            </div>
            <div
              className="col-sm-3 col-md-3 px-sm-0 collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item  align-self-center mt-4 BorderRight">
                  <NavLink to="/menu" className="nav-link mr-3 text-uppercase">
                    Menu
                  </NavLink>
                </li>

                <li className="nav-item align-self-center mt-4 ">
                  <NavLink to="/about" className="nav-link ml-3 text-uppercase">
                    About
                  </NavLink>
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
