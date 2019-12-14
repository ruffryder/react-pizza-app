import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Heading/Heading";
import MenuList from "./MenuList/MenuList";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { connect } from "react-redux";
import { deselectItem } from "../../../redux/actions/ItemActions";

const Menu = ({ categories, showItemDetails, deselectItem }) => {
  return (
    <section>
      <Backdrop show={showItemDetails} clicked={() => deselectItem()} />
      <Header title="Menu" id="menu-title">
        <FontAwesomeIcon
          color="#e5bd0a"
          className="display-2 ml-4 pb-2"
          icon={faCalendarMinus}
        />
      </Header>
      <div className="container-fluid px-5 py-5">
        <div className="row justify-content-around">
          {categories &&
            categories.map(category => {
              return (
                <div
                  key={category.id}
                  className={`col-sm-12 menu-col ${category.title}-Menu Menu-Item`}
                >
                  <MenuList title={category.title} category_id={category.id} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  categories: state.data.categories,
  showItemDetails: state.item.showItemDetails
});

const mapDispatchToProps = dispatch => ({
  deselectItem: () => dispatch(deselectItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
