import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import StarIcon from "@material-ui/icons/StarBorder";
import PlateIcon from "@material-ui/icons/DonutLargeTwoTone";
const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: "darkgrey"
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1,
    margin: "0 5vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

function BottomAppBar(props) {
  const classes = useStyles();

  let plateItems = 0;

  props.plate.forEach(order => {
    plateItems += order.quantity;
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        className={classes.appBar}
        style={{ backgroundColor: "darkgrey" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>

          <div
            className={plateItems && plateItems > 0 ? classes.grow : null}
            style={plateItems && plateItems > 0 ? null : { display: "none" }}
          >
            <span
              style={{ fontSize: "1rem", color: "black" }}
            >{`${plateItems} items`}</span>
            <IconButton color="black" style={{ fontSize: "1rem" }}>
              <PlateIcon /> My Plate
            </IconButton>
          </div>
          <IconButton color="inherit">
            <StarIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <AccountBoxIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    plate: state.Order.plate
  };
};

export default connect(mapStateToProps)(BottomAppBar);
