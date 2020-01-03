//This is the rootSaga where we can additional sagas as project complexity increases

import { all, call } from "redux-saga/effects";
import ItemSaga from "./Item/Item.sagas";
import CategorySaga from "./Category/Category.sagas";
function* rootSaga() {
  yield all([call(ItemSaga), call(CategorySaga)]);
}

export default rootSaga;
