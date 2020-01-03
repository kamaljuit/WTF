import CategoryTypes from "./Category.types";

export const setAllCategories = allCategories => {
  return {
    type: CategoryTypes.SET_ALL_CATEGORIES,
    payload: allCategories
  };
};

export const setActiveCategory = data => {
  return {
    type: CategoryTypes.SET_ACTIVE_CATEGORY,
    payload: data
  };
};

export const getActiveCategory = category => {
  return {
    type: CategoryTypes.GET_ACTIVE_CATEGORY,
    payload: category
  };
};
