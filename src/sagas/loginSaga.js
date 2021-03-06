import firebase from "react-native-firebase";
import { takeEvery, call, put } from "redux-saga/effects";

import { LOGIN_USER } from "../actionTypes/loginActionTypes";
import { loginUserSuccess, loginUserFailed } from "../actions/loginActions";

const login = async (email, password) => {
  try {
    const response = await firebase
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(email, password);
    return response && response.user;
  } catch (error) {
    return null;
  }
};

function* loginUser(action) {
  const { email, password } = action.payload;

  const user = yield call(login, email, password);

  if (user) {
    const userData = { email: user.email };
    yield put(loginUserSuccess(user));
  } else {
    yield put(loginUserFailed("Email and password don't match."));
  }
}

export const watchLoginUser = takeEvery(LOGIN_USER, loginUser);
