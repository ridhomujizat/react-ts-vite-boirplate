import { all } from "redux-saga/effects";
import exampleSagas from "store/sagas/Example";

export default function* rootSaga() {
  yield all([exampleSagas()]);
}
