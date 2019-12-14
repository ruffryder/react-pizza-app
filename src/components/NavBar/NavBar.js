import React from "react";
import logo from "../../assets/img/logo.svg";
import Jumbotron from "../UI/Jumbotron/Jumbotron";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/CartSelectors";
import PropTypes from "prop-types";

const NavBar = ({ handleCloseClick, handleOrderClick, hidden, ...props }) => {
  let classes = "";
  if (props.jumboBackground && props.jumboBackground !== "") {
    classes = props.jumboBackground.substring(1);
  }

  return (
    <Jumbotron classes={classes}>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid navbar-container text-center ">
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

          <div className="Row row mx-auto justify-content-center">
            <div
              className="col-md-4 col-sm-12 px-sm-0 justify-content-end collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
                <li className="nav-item align-self-center mt-4 BorderRight">
                  <NavLink
                    onClick={handleCloseClick}
                    exact
                    activeClassName="active"
                    to="/"
                    className="nav-link mr-md-3 mr-sm-0 text-uppercase"
                  >
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li className="nav-item align-self-center mt-4 BorderRight">
                  <NavLink
                    onClick={handleCloseClick}
                    activeClassName="active"
                    to="/catering"
                    className="nav-link mx-md-3 mx-sm-0 text-uppercase"
                  >
                    Catering
                  </NavLink>
                </li>
                <li className="nav-item align-self-center mt-4">
                  <a
                    onClick={handleOrderClick}
                    className="nav-link ml-md-3 ml-sm-0 text-uppercase"
                  >
                    Order Online
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-2 col-sm-3 px-sm-0 mx-1 align-self-center">
              <NavLink
                to="/"
                className="display-md-none logo-link"
                onClick={handleCloseClick}
              >
                <img src={logo} className="Logo align-top" alt="pizza logo" />
              </NavLink>
            </div>
            <div
              className="col-md-4 col-sm-12 px-sm-0 collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item  align-self-center mt-4 BorderRight">
                  <NavLink
                    onClick={handleCloseClick}
                    to="/menu"
                    activeClassName="active"
                    className="nav-link mr-md-3 mr-sm-0 text-uppercase"
                  >
                    Menu
                  </NavLink>
                </li>

                <li className="nav-item align-self-center mt-4 BorderRight">
                  <NavLink
                    onClick={handleCloseClick}
                    to="/about"
                    activeClassName="active"
                    className="nav-link mx-md-3 mx-sm-0 text-uppercase"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item align-self-center mt-4 ">
                  <NavLink
                    onClick={handleCloseClick}
                    to="/contact"
                    activeClassName="active"
                    className="nav-link ml-md-3 ml-sm-0 text-uppercase"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cart-icon-container">
          <CartIcon />
        </div>
      </nav>
      {hidden ? null : <CartDropdown />}
      {props.children}
    </Jumbotron>
  );
};

NavBar.propTypes = {
  hidden: PropTypes.bool.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  handleOrderClick: PropTypes.func.isRequired,
  jumboBackground: PropTypes.string
};

const mapStateToProps = state => ({
  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(NavBar);
