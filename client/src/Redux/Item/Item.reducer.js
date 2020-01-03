import ItemTypes from "./Item.types";
/*
homeScreenItems is an object with properties "todaySpecial","chefSpecial","previousOrders" 
*/
const INITIAL_STATE = {
  homeScreenItems: {
    todaySpecial: [],
    chefSpecial: [],
    previousOrders: []
  }
};

function ItemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ItemTypes.SET_HOMESCREEN_ITEMS:
      return {
        ...state,
        homeScreenItems: action.payload
      };
    default:
      return state;
  }
}

export default ItemReducer;
