import OrderTypes from "./Order.types";

export const addOrderToPlate = item => {
  return {
    type: OrderTypes.ADD_ORDER,
    payload: item
  };
};

export const removeOrderFromPlate = item => {
  return {
    type: OrderTypes.REMOVE_ORDER,
    payload: item
  };
};
