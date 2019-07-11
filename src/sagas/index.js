import { all, fork } from "redux-saga/effects";
import { watchDemoSagasAsync } from "./demo.saga";
import watchLoginSagasAsync from "./login.saga";
import watchProductSagasAsync from "./product.saga";

export default function* sagas() {
  yield all([
    fork(watchDemoSagasAsync),
    fork(watchLoginSagasAsync),
    fork(watchProductSagasAsync)
  ]);
}
