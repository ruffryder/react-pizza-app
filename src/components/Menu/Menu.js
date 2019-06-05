import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import MenuList from "./MenuList/MenuList";
import ScrollableAnchor from "react-scrollable-anchor";
import Backdrop from "../Backdrop/Backdrop";

const Menu = ({
  showItemDetails,
  handleBackdropClick,
  handleMenuItemClick,
  dishes,
  categories
}) => (
  <ScrollableAnchor id={"Menu"}>
    <section>
      <Backdrop show={showItemDetails} clicked={handleBackdropClick} />
      <Header title="Menu">
        <FontAwesomeIcon
          color="#e5bd0a"
          className="display-2 ml-4 pb-2"
          icon={faCalendarMinus}
        />
      </Header>
      <div className="container-fluid px-5 py-5">
        <div className="row justify-content-around">
          {categories.map(category => {
            return (
              <div
                key={category._id}
                className={`col-sm-12 col-md-6 menu-col-lg ${
                  category.title
                }-Menu Menu-Item`}
              >
                <MenuList
                  handleMenuItemClick={handleMenuItemClick}
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
  </ScrollableAnchor>
);

export default Menu;
