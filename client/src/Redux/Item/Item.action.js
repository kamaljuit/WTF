import ItemTypes from "./Item.types";
export const setHomeScreenItems = items => {
  return {
    type: ItemTypes.SET_HOMESCREEN_ITEMS,
    payload: items
  };
};

//Action will bring the home screen data
export const getHomeScreenItems = () => {
  return {
    type: ItemTypes.GET_HOMESCREEN_ITEMS,
    payload: "null"
  };
};
