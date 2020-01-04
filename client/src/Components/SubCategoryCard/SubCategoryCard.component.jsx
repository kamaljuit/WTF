import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import FoodItem from "../FoodItem/FoodItem.component";
import "./SubCategoryCard.styles.scss";
const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 345
    backgroundColor: "#F4F4F4",
    margin: "2vw 0",
    display: "flex",
    justifyContent: "space-between"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function SubCategoryCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardContent>
          {props.name}
          {/* {props.} */}
          {/* <span>Description: {props.items.length} items</span> */}
          <p>{`Description: ${props.items.length} items`}</p>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.items.map(item => {
            return <FoodItem item={item} />;
          })}
        </CardContent>
      </Collapse>
    </Fragment>
  );
}
