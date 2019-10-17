import React, { Component } from "react";
import CardItem from "../CardItem/CardItem";
import "./CategoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class CategoryList extends Component {
  displayCategories = () => {
    if (!this.props.categories || this.props.categories.length === 0) {
      return <p>No categories to show</p>;
    } else {
      return this.props.categories.map(item => {
        return (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 text-center">
            <CardItem
              handleClick={this.props.handleCategoryClick}
              item={item}
            />
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div className="container-fluid CategoryList">
        {" "}
        <div className="row justify-content-around pb-4">
          <div className="col-1 pr-4 pl-0 text-left">
            <button
              onClick={this.props.handleCloseClick}
              className="btn btn-lg p-0 close-button"
              type="button"
            >
              <FontAwesomeIcon
                color="#4B3114 "
                className="ml-2 pt-2"
                icon={faTimes}
                size="4x"
              />
            </button>
          </div>
          <div className="col-11">
            <div className="container-fluid">
              <div className="row justify-content-around">
                {this.displayCategories()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.data.categories
});

export default connect(mapStateToProps)(CategoryList);
