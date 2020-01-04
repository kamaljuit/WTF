import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getActiveCategory } from "../../Redux/Category/Category.action";
import "./MenuItem.styles.scss";
const MenuItem = props => {
  const history = useHistory();
  return (
    <div className="menu-item">
      <span
        className="heading"
        onClick={() => {
          props.dispatch(getActiveCategory(props.name));
          history.push(`/category/${props.name}`);
        }}
      >
        {props.name}
      </span>
    </div>
  );
};

export default connect()(MenuItem);
