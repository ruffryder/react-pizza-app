import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import Header from "../Heading/Heading";
import MenuList from "./MenuList/MenuList";
import Backdrop from "../Backdrop/Backdrop";
import { connect } from "react-redux";

const Menu = ({
  showItemDetails,
  handleBackdropClick,
  handleMenuItemClick,
  categories
}) => {
  return (
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
                className={`col-sm-12 col-md-6 menu-col-lg ${category.title}-Menu Menu-Item`}
              >
                <MenuList
                  handleMenuItemClick={handleMenuItemClick}
                  title={category.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.data.categories
});

export default connect(mapStateToProps)(Menu);
