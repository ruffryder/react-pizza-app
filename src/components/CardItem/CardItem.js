import React from "react";
import "./CardItem.css";

const CardItem = ({ handleCategoryClick, item }) => {
  return (
    <div onClick={() => handleCategoryClick(item)} className="CardItem card">
      <h5 className="card-title">{item.title}</h5>

      <div className="card-body">
        <img src={item.imageUrl} alt="Category Image" />
      </div>
    </div>
  );
};

export default CardItem;
