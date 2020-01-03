import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import FoodItem from "../FoodItem/FoodItem.component";
import MenuItem from "../MenuItem/MenuItem.component";
import "./GridList.styles.scss";
export default function SingleLineGridList(props) {
  return (
    <div className="grid-list-root">
      <GridList className="list" cols={2.5}>
        {props.items.map(item => (
          <GridListTile key={item._id}>
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
