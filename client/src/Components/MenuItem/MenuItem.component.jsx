import React from "react";
import "./MenuItem.styles.scss";
const MenuItem = props => {
  return (
    <div className="menu-item">
      <span className="heading">{props.name}</span>
    </div>
  );
};

export default MenuItem;
