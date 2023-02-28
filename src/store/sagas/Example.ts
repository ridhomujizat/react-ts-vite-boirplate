import { call, put, takeLatest } from "redux-saga/effects";
import { uiAction } from "store/slice/Ui";

function* fetchData() {
  try {
    console.log('hello from sagas')
  } catch (err) {
    if (typeof err === "string") {
      const error = err as string;
      yield put(
        uiAction.openToast({
          headMsg: "Error get data",
          message: error,
          severity: "error",
        })
      );
    } else {
      yield put(
        uiAction.openToast({
          headMsg: "Error get data",
          message: "interval server error",
          severity: "error",
        })
      );
    }
  }
}

export default function* customerKurSagas() {
  yield takeLatest(uiAction.openToast.type, fetchData);
}
