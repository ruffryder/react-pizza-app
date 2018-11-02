import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import MenuList from "../MenuList/MenuList";

const Menu = ({ dishes, categories }) => (
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
        {categories.map(category => {
          return (
            <div
              key={category._id}
              className={`col-sm-12 col-md-6 col-lg-2 mx-lg-3 ${
                category.title
              }-Menu Menu-Item`}
            >
              <MenuList
                title={category.title}
                dishes={dishes.filter(dish => {
                  return dish.category_id === category._id;
                })}
              />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Menu;
