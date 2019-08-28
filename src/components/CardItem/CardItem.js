import React from "react";
import "./CardItem.css";

const CardItem = ({ handleClick, item }) => {
  return (
    <div
      onClick={() => handleClick(item)}
      className="card-item card"
      tabIndex="0"
    >
      <h2 className="card-title pt-3 mb-0">
        <span className="span-title">{item.title}</span>
      </h2>

      <div className="card-body">
        <img className="card-image" src={item.imageUrl} alt={item.title} />
      </div>
    </div>
  );
};

export default CardItem;
