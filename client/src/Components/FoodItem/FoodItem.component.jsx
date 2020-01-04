import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./FoodItem.styles.scss";
import { Button } from "@material-ui/core";
import {
  addOrderToPlate,
  removeOrderFromPlate
} from "../../Redux/Order/Order.action";
function FoodItem(props) {
  let quantity = undefined;
  props.plate.forEach(order => {
    if (order.item._id == props.item._id) {
      quantity = order.quantity;
    }
  });
  // console.log(props.plate, "Debug");
  return (
    <Card className="item">
      {/* <CardMedia
        className="media"
        image={`http://localhost:4000${props.img}`}
        title={props.name}
      /> */}
      <CardContent>
        <img src={`${props.item.img}`} className="tile-image" />
      </CardContent>
      <CardContent>
        <h4>{props.item.name}</h4>
        <div className="ratings">
          <span>{props.item.ratingsAverage}</span>
          <span>{props.item.numberOfRatings} ratings</span>
        </div>
        <br />
        <div className="footer">
          <div>
            <span>Rs.{props.item.price}</span>
          </div>
          <div className="section">
            <Button
              onClick={() => {
                props.dispatch(addOrderToPlate(props.item));
              }}
              style={{
                backgroundColor: "red",
                minWidth: "25px",
                color: "aliceblue",
                fontWeight: "900"
              }}
            >
              +
            </Button>
            <div className="quantity">
              {quantity}
            </div>
            <Button
              onClick={() => {
                props.dispatch(removeOrderFromPlate(props.item));
              }}
              style={{
                backgroundColor: "red",
                minWidth: "25px",
                color: "aliceblue",
                fontWeight: "900"
              }}
            >
              -
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    plate: state.Order.plate
  };
};

export default connect(mapStateToProps)(FoodItem);
