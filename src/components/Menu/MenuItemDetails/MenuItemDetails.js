import React from "react";
import "./MenuItemDetails.css";

const MenuItemDetails = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid w-75"
            src={props.item.imageUrl}
            alt={props.item.title}
          />
        </div>
        <div className="col-6">
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
          <button className="btn btn-warning btn-order">Add to Order</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
