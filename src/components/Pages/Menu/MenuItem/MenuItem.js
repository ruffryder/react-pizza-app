import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../../../redux/actions/CartActions";
import { selectItem } from "../../../../redux/actions/ItemActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Auxiliary from "../../../../hoc/Auxiliary";
import "./MenuItem.css";

class MenuItem extends React.Component {
  state = {
    itemQuantity: this.props.dish.quantity
  };

  updateQuantity = () => {
    this.setState(prevState => {
      return { itemQuantity: prevState.itemQuantity };
    });
  };
  render() {
    if (this.props.large) {
      return (
        <Auxiliary>
          <div className="col-12 large-menu-item list-unstyled">
            <div className="container menu-item-container">
              <div className="row ">
                <span
                  onClick={() => {
                    selectItem(this.props.dish);
                  }}
                  className="pointer col-2 col-md-3"
                >
                  {this.props.dish.title}
                </span>
                <span className="col-4 pl-4">
                  {this.props.dish.description}
                </span>
                <span className="col-2 col-md-1 pl-4">
                  ${Number(this.props.dish.price).toFixed(2)}
                </span>
                <div className="col-4">
                  <div className="container">
                    <div className="row justify-content-around">
                      <div className="p-0 col-9 col-sm-3">
                        <button
                          className="btn-add py-3 py-sm-0"
                          onClick={() => {
                            this.props.addItem(this.props.dish);
                            this.updateQuantity();
                          }}
                        >
                          <FontAwesomeIcon
                            className="ml-2 pt-2"
                            icon={faPlus}
                          />
                        </button>
                      </div>
                      <div className="col-12 col-sm-3 text-center">
                        <span>{this.props.dish.quantity}</span>
                      </div>
                      <div className="p-0 col-9 col-sm-3">
                        <button
                          className="btn-remove py-3 py-sm-0"
                          onClick={() => {
                            this.props.removeItem(this.props.dish);
                            this.updateQuantity();
                          }}
                        >
                          {" "}
                          <FontAwesomeIcon
                            className="ml-2 pt-2"
                            icon={faMinus}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="" />
            </div>
          </div>
        </Auxiliary>
      );
    } else {
      return (
        <Auxiliary>
          <li
            className="list-unstyled box menu-item"
            onClick={() => selectItem(this.props.dish)}
          >
            {this.props.dish.title}
          </li>
          <hr className="text-center w-75" />
        </Auxiliary>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  selectItem: item => dispatch(selectItem(item))
});
export default connect(null, mapDispatchToProps)(MenuItem);
