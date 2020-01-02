import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Item from "../Item/Item.component";
export default function SingleLineGridList(props) {
  return (
    <div className="grid-list-root">
      <GridList className="list" cols={2.5}>
        {props.items.map(item => (
          <GridListTile key={item._id}>
            <Item {...item} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
