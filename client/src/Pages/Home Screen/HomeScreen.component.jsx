import React from "react";
import SubCategoryContainer from "../../Components/SubCategoryContainer/SubCategoryContainer.component";
import GridList from "../../Components/GridList/GridList.component";

/*

A single GridList will only display 10 items in the grid to reduce the boot time of the app
and to prevent unnecessary state in redux store.

*/
class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <SubCategoryContainer heading="Today's Special" id="special">
          {/* //GridList */}
          <GridList />
        </SubCategoryContainer>
        <SubCategoryContainer heading="Courses" id="courses">
          <GridList />

          {/* CoursesList */}
        </SubCategoryContainer>
        <SubCategoryContainer heading="Chef's Special" id="chef">
          <GridList />

          {/* //GridList */}
        </SubCategoryContainer>
        <SubCategoryContainer heading="Previous Orders" id="previous">
          <GridList />

          {/* //GridList */}
        </SubCategoryContainer>
      </div>
    );
  }
}
export default HomeScreen;
