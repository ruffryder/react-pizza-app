import React from "react";
import "./MenuList.css";
import MenuItem from "./MenuItem/MenuItem";

const MenuList = ({ large, title, dishes, theme }) => {
  if (large)
    return (
      <div className={theme}>
        <h3 className="text-center mt-4 display-4">{title}</h3>
        <div className="container mt-4">
          <div className="row">
            <ul className="col-10 offset-md-1">
              {dishes.map(dish => {
                return <MenuItem large={large} key={dish._id} dish={dish} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className={theme}>
        <h3 className="text-center mt-4">{title}</h3>
        <div className="container mt-4">
          <div className="row text-left">
            <ul className="col-10 offset-md-1">
              {dishes.map(dish => {
                return <MenuItem key={dish._id} dish={dish} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default MenuList;
