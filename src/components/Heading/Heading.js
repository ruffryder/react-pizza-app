import React from "react";
import Aux from "../../hoc/Auxiliary";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <div className="container-fluid">
      <h1
        id={props.id ? `${props.id}` : ""}
        className={`position-relative display-1 pt-5 px-5 text-center ${
          props.className ? props.className : ""
        }`}
      >
        {props.title}
        {props.children}
      </h1>
      {props.subtitle ? (
        <Aux>
          <hr className="w-50 text-center" />
          <h3 className="Subheading py-5 px-0 px-sm-3 px-md-5 text-center w-75 mx-auto">
            {props.subtitle}
          </h3>
        </Aux>
      ) : null}
    </div>
  );
};

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
