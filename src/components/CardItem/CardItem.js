import React from "react";
import "./CardItem.css";

const CardItem = ({ item }) => {
  return (
    <div className="CardItem card">
      <h5 className="card-title text-center">{item.title}</h5>

      <div className="card-body">
        <img src={item.imageUrl} alt="Category Image" />
      </div>
    </div>
  );
};

export default CardItem;
