import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import "./SubCategory.styles.scss";
const SubCategoryContainer = props => {
  return (
    <Container>
      <div className="sub-category-container-header">
        <h3 className="sub-category-container-heading">{props.heading}</h3>
        <span className="sub-category-container-link">
          <Link to={`/category/${props.id}`}>See All</Link>
        </span>
      </div>
    </Container>
  );
};

export default SubCategoryContainer;
