import React from "react";
import CardItem from "../CardItem/CardItem";
import "./CategoryList.css";

const CategoryList = ({ categories }) => {
  return (
    <div className="container-fluid">
      {" "}
      <div className="row justify-content-around">
        {categories.map(item => {
          return (
            <div key={item._id} className="col-lg-3 col-md-4 col-sm-6">
              <CardItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
