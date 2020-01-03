import { takeLatest, put } from "redux-saga/effects";
import CategoryTypes from "./Category.types";
import { setActiveCategory } from "./Category.action";
const fetch = window.fetch;
//Recieves the entire action obj==> Extracting the payload (ie. category name)
function* getActiveCategoryAsync({ payload }) {
  console.log("payload", payload);
  const rawResponse = yield fetch(`/api/v1/item/${payload}`, {
    method: "GET"
  });

  const response = yield rawResponse.json();
  const data = response.data;
  console.log(data);
  yield put(setActiveCategory(data));
}

function* CategorySaga() {
  yield takeLatest(CategoryTypes.GET_ACTIVE_CATEGORY, getActiveCategoryAsync);
}

export default CategorySaga;
