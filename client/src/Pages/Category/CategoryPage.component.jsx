import React from "react";
import { useHistory } from "react-router-dom";
import { Switch } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import SubCategoryCard from "../../Components/SubCategoryCard/SubCategoryCard.component";
//will recieve the id of the category in urlParams
import "./CategoryPage.styles.scss";
const CategoryPage = props => {
  const [state, setState] = React.useState({
    checked: true
  });
  const history = useHistory();
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className="category">
      <div className="header">
        <div
          className="arrow"
          onClick={() => {
            history.push("/");
          }}
        ></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>ONLY VEG</span>
          <Switch
            checked={state.checked}
            onChange={handleChange("checked")}
            value="checked"
            color="default"
          />
        </div>
        <div>
          <div className="search">
            <InputBase placeholder="Search…" />
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        {props.activeCategory
          ? props.allCategories.map(category => {
              return (
                <div>
                  <div
                    className={
                      category.name === props.activeCategory.name
                        ? "subcategory active "
                        : "subcategory"
                    }
                  >
                    {category.name}
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="subCategories-list">
        {props.activeCategory
          ? props.activeCategory.subCategories.map(subCategory => {
              return (
                <SubCategoryCard
                  name={subCategory.name}
                  items={subCategory.items}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  activeCategory: state.Category.activeCategory,
  allCategories: state.Category.allCategories
});

export default connect(mapStateToProps)(CategoryPage);
