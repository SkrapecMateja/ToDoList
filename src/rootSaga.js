import { all } from "redux-saga/effects";
import { watchRegisterUser } from "./sagas/registerSaga";
import { watchLoginUser } from "./sagas/loginSaga";

export default function* rootSaga() {
  yield all([watchRegisterUser, watchLoginUser]);
}
