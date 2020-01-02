import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./Item.styles.scss";
import { Button } from "@material-ui/core";
export default function Item(props) {
  return (
    <Card className="item">
      <CardMedia className="media" image="/logo192.png" title="Paella dish" />
      <CardContent>
        <h4>{props.name}</h4>
        <span>{props.ratingsAverage}</span>
        <span>{props.numberOfRatings}</span>
        <span>{props.price}</span>
        <Button>+Add</Button>
      </CardContent>
    </Card>
  );
}
