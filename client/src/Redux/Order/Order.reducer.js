//plate stores all the orders (yet to be confirmed by the user).

//previousOrders holds the information about all the previous orders
// created by the user (available only when user clicks on "see all")

//activeOders holds the information about the orders which are being processed (can be used to deliver updates to the user)

/*
Format

{
    item:{},
    quantity:Number
}
*/

import OrderTypes from "./Order.types";
const INITIAL_STATE = {
  previousOrders: [],
  activeOrders: [],
  plate: []
};

//Utility method

const addOrderToPlate = (plate, newItem) => {
  let found = false;
  plate.forEach(order => {
    if (order.item._id == newItem._id) {
      found = true;
      order.quantity += 1;
    }
  });
  if (found) return [...plate];
  else {
    const newPlate = [...plate];
    //Dont refactor this code as we cannot spread and push at the same time in JS
    newPlate.push({ item: newItem, quantity: 1 });
    return newPlate;
  }
};

const removeOrderFromPlate = (plate, item) => {
  const modifiedPlate = plate.filter(order => {
    if (order.item._id == item._id) {
      if (order.quantity > 1) {
        order.quantity -= 1;
        return order;
      }
    } else {
      return order;
    }
  });

  return modifiedPlate;
};

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OrderTypes.ADD_ORDER: {
      return {
        ...state,
        plate: addOrderToPlate(state.plate, action.payload)
      };
    }

    case OrderTypes.REMOVE_ORDER: {
      return {
        ...state,
        plate: removeOrderFromPlate(state.plate, action.payload)
      };
    }
    default:
      return state;
  }
}
