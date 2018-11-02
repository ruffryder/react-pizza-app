import React from "react";
import CardItem from "../CardItem/CardItem";
import "./CategoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CategoryList = ({
  categories,
  handleCloseClick,
  handleCategoryClick
}) => {
  return (
    <div className="container-fluid CategoryList">
      {" "}
      <div className="row justify-content-around pb-4">
        <div className="col-1 pr-4 pl-0 text-left">
          <button
            onClick={handleCloseClick}
            className="btn btn-lg  p-0 close-button"
            type="button"
          >
            <FontAwesomeIcon
              color="#4B3114 "
              className="display-4 ml-2 pt-2"
              icon={faTimes}
            />
          </button>
        </div>
        <div className="col-11">
          <div className="container-fluid">
            <div className="row justify-content-around">
              {categories.map(item => {
                return (
                  <div
                    key={item._id}
                    className="col-lg-3 col-md-4 col-sm-6 text-center"
                  >
                    <CardItem
                      handleCategoryClick={handleCategoryClick}
                      item={item}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
