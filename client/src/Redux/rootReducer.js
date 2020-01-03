import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ItemReducer from "./Item/Item.reducer";
import CategoryReducer from "./Category/Category.reducer";
import OrderReducer from "./Order/Order.reducer";
//Enabling persistance of the redux state in local storage

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  Item: ItemReducer,
  Category: CategoryReducer,
  Order: OrderReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
