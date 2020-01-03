import React from "react";
import { connect } from "react-redux";
import SubCategoryContainer from "../../Components/SubCategoryContainer/SubCategoryContainer.component";
import GridList from "../../Components/GridList/GridList.component";
import { getHomeScreenItems } from "../../Redux/Item/Item.action";
/*

A single GridList will only display 10 items in the grid to reduce the boot time of the app
and to prevent unnecessary state in redux store.

*/
class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getHomeScreenItems());
  }
  render() {
    const display = () => {
      // if (this.props.todaySpecial
      return (
        <div>
          <SubCategoryContainer
            heading="Today's Special"
            category="todaySpecial"
          >
            {this.props.todaySpecial ? (
              <GridList items={this.props.todaySpecial} type="FoodItem" />
            ) : null}
          </SubCategoryContainer>
          <SubCategoryContainer heading="Courses" category="">
            {this.props.allCategories ? (
              <GridList items={this.props.allCategories} type="MenuItem" />
            ) : null}
          </SubCategoryContainer>
          <SubCategoryContainer heading="Chef's Special" category="chefSpecial">
            {this.props.chefSpecial ? (
              <GridList items={this.props.chefSpecial} type="FoodItem" />
            ) : null}
          </SubCategoryContainer>
          <SubCategoryContainer
            heading="Previous Orders"
            category="previousOrders"
          >
            {this.props.previousOrders ? (
              <GridList items={this.props.previousOrders} type="FoodItem" />
            ) : null}
          </SubCategoryContainer>
        </div>
      );
    };

    return <div>{display()}</div>;
  }
}

//Enhancements
//Make an extra state for Orders (previousOrders, cur)

const mapStateToProps = state => {
  return {
    todaySpecial: state.Item.homeScreenItems.todaySpecial,
    chefSpecial: state.Item.homeScreenItems.chefSpecial,
    previousOrders: state.Item.homeScreenItems.previousOrders, //These previous orders are different from the previous orders of the state (These are only displayed on the homescreen)
    allCategories: state.Category.allCategories
  };
};

export default connect(mapStateToProps)(HomeScreen);
