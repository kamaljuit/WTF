import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getActiveCategory } from "../../Redux/Category/Category.action";
import "./SubCategory.styles.scss";
const SubCategoryContainer = props => {
  return (
    <Container>
      <div className="sub-category-container-header">
        <h3 className="sub-category-container-heading">{props.heading}</h3>
        <span className="sub-category-container-link">
          <Link
            to={`/category/${props.category}`}
            onClick={() => {
              console.log("Hello");
              props.dispatch(getActiveCategory(props.category));
            }}
          >
            See All
          </Link>
        </span>
      </div>
      {props.children}
    </Container>
  );
};

export default connect()(SubCategoryContainer);
