import React from "react";
import Aux from "../../hoc/Auxiliary";

const Header = props => {
  return (
    <div className="container-fluid">
      <h1 className="position-relative display-1 pt-5 px-5 text-center">
        {props.title}
        {props.children}
      </h1>
      {props.subtitle ? (
        <Aux>
          <hr className="w-50 text-center" />
          <h3 className="Subheading p-5 text-center w-75 mx-auto">
            {props.subtitle}
          </h3>
        </Aux>
      ) : null}
    </div>
  );
};

export default Header;
