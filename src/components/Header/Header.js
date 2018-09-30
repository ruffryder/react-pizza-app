import React from "react";
import Aux from "../../hoc/Auxiliary";

const Header = ({ title, subtitle }) => {
  return (
    <div className="container-fluid">
      <h1 className="Heading display-1 pt-5 px-5 text-center">{title}</h1>
      {subtitle ? (
        <Aux>
          <hr className="w-50 text-center" />
          <h3 className="Subheading p-5 text-center w-75 mx-auto">
            {subtitle}
          </h3>
        </Aux>
      ) : null}
    </div>
  );
};

export default Header;
