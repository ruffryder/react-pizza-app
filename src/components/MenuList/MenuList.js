import React from "react";
import "./MenuList.css";
import Auxiliary from "../../hoc/Auxiliary";
import MenuItem from "./MenuItem/MenuItem";

const MenuList = ({ title, dishes }) => (
  <Auxiliary>
    <h3 className="text-center mt-4">{title}</h3>
    <div className="container mt-4">
      <div className="row text-left">
        <ul className="col-10 offset-md-1">
          {dishes.map(dish => {
            return <MenuItem dish={dish} />;
          })}
          {/* <li className="list-unstyled">Marinara</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Margherita</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Romana</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Siciliana</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Prosciutto e funghi</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Capricciosa</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Tirolese</li>
          <hr className="text-center w-75" />
          <li className="list-unstyled">Quattro stagioni</li> */}
        </ul>
      </div>
    </div>
  </Auxiliary>
);
export default MenuList;
