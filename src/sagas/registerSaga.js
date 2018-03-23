import firebase from "react-native-firebase";
import { takeEvery, call, put } from "redux-saga/effects";

import { REGISTER_USER } from "../actionTypes/registerActionTypes";
import {
  registerUserSuccess,
  registerUserFailed
} from "../actions/registerActions";

const register = async (email, password) => {
  try {
    const response = await firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password);
    return response && response.user;
  } catch (error) {
    return null;
  }
};

function* registerUser(action) {
  const { email, password } = action.payload;

  const user = yield call(register, email, password);

  if (user) {
    const userData = { email: user.email };
    yield put(registerUserSuccess(userData));
  } else {
    yield put(registerUserFailed("Registration failed."));
  }
}

export const watchRegisterUser = takeEvery(REGISTER_USER, registerUser);
