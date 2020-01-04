import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./FoodItem.styles.scss";
import { Button } from "@material-ui/core";
export default function FoodItem(props) {
  return (
    <Card className="item">
      {/* <CardMedia
        className="media"
        image={`http://localhost:4000${props.img}`}
        title={props.name}
      /> */}
      <CardContent>
        <img src={`${props.img}`} className="tile-image" />
      </CardContent>
      <CardContent>
        <h4>{props.name}</h4>
        <div className="ratings">
          <span>{props.ratingsAverage}</span>
          <span>{props.numberOfRatings} ratings</span>
        </div>
        <br />
        <div className="footer">
          <span>Rs.{props.price}</span>
          <Button>+Add</Button>
        </div>
      </CardContent>
    </Card>
  );
}
