import CategoryTypes from "./Category.types";

/*
activeCategory is an object that will store data in format:
{
  name:name of the category
  subCategories:[{
    name:SubCategory Name,
    items:[]
  }]
}
*/

const INITIAL_STATE = {
  allCategories: [],
  activeCategory: undefined
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryTypes.SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload
      };

    case CategoryTypes.SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload
      };
    default:
      return state;
  }
};

export default CategoryReducer;
