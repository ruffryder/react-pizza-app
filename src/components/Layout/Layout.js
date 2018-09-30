import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";

const layout = props => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className="Layout">{props.children}</main>
  </Aux>
);

export default layout;
