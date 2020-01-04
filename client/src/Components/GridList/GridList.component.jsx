import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import FoodItem from "../FoodItem/FoodItem.component";
import MenuItem from "../MenuItem/MenuItem.component";
import "./GridList.styles.scss";
export default function SingleLineGridList(props) {
  return (
    <div className="grid-list-root">
      <GridList className="list">
        {props.items.map(item => (
          <GridListTile
            key={item._id}
            className="tile"
            style={{ height: "unset", width: "max-content" }}
          >
            {props.type === "FoodItem" ? (
              <FoodItem {...item} />
            ) : (
              <MenuItem {...item} />
            )}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
