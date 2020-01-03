import { takeEvery, put } from "redux-saga/effects";
import ItemTypes from "./Item.types";
import { setHomeScreenItems } from "./Item.action";
import { setAllCategories } from "../Category/Category.action";
const fetch = window.fetch;
function* getHomeScreenItemsAsync(action) {
  var rawResponse = yield fetch("/api/v1/item/homescreen", {
    method: "GET"
  });
  var response = yield rawResponse.json();
  const items = response.data;
  yield put(setHomeScreenItems(items));
  rawResponse = yield fetch("/api/v1/category", {
    method: "GET"
  });
  response = yield rawResponse.json();
  const allCategories = response.data;
  yield put(setAllCategories(allCategories));
}
function* ItemSaga() {
  yield takeEvery(ItemTypes.GET_HOMESCREEN_ITEMS, getHomeScreenItemsAsync);
}

export default ItemSaga;
