import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";

const VerticalNav = () => {
  let currentPath = window.location.origin;

  return (
    <nav className="navbar-expand-sm">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon color="#fe4323" icon={faBars} size="lg" />
          </span>
        </button>
        <div className="row">
          <div
            id="navbarCollapse"
            className="navbar-collapse collapse col-lg-6 col-sm-4"
          >
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="btn btn-primary active">Order Now</button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 text-center-sm">
            <a className="navbar-brand" href="#">
              <img
                src={`${currentPath}/img/pizza.png`}
                width="160"
                height="160"
                className="d-inline-block align-top"
                alt="pizza logo"
              />
            </a>
          </div>
          <div className="col-lg-2 col-sm-4 d-flex flex-column py-4 text-right-sm">
            <a className="pl-md-5 pl-lg-2 ml-md-5 ml-lg-2" href="#">
              0889178762
            </a>
            <a className="pl-md-5 pl-lg-2 ml-md-5 ml-lg-2" href="#">
              <span>
                <img
                  width="20"
                  height="20"
                  src={`${currentPath}/img/bg_flag.png`}
                  alt="language icon"
                />
                BG
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VerticalNav;
