import React from "react";
import CardItem from "../CardItem/CardItem";
import "./CategoryList.css";

const CategoryList = ({
  categories,
  handleCloseClick,
  handleCategoryClick
}) => {
  return (
    <div className="container-fluid CategoryList">
      {" "}
      <div className="row justify-content-around">
        {categories.map(item => {
          return (
            <div
              key={item._id}
              className="col-lg-3 col-md-4 col-sm-6 text-center"
            >
              <CardItem handleCategoryClick={handleCategoryClick} item={item} />
            </div>
          );
        })}
      </div>
      <div className="text-right">
        <button
          onClick={handleCloseClick}
          className="btn btn-danger mt-4 mb-3"
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
