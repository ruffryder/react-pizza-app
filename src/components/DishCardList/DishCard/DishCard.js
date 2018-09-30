import React from "react";
import "./DishCard.css";

const DishCard = ({ dish }) => {
  return (
    <div className="DishCard card">
      <h5 className="card-header">
        <img scr="img" alt="korichka :D" />
      </h5>
      <div className="card-body">
        <h5 className="card-title">{dish.title}</h5>
        <p className="card-text">{dish.description}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default DishCard;
