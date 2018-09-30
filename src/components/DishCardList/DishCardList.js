import React from "react";
import DishCard from "./DishCard/DishCard";
import "./DishCardList.css";

const DishCardList = ({ dishesData }) => {
  return (
    <div className="container-fluid">
      {" "}
      <div className="DishCardList row justify-content-around">
        {dishesData.map(item => {
          return (
            <div key={item._id} className="col-lg-4">
              <DishCard dish={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DishCardList;
