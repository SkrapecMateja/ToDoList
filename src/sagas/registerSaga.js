import firebase from "react-native-firebase";
import { takeEvery, call, put } from "redux-saga/effects";

import { REGISTER_USER } from "../actionTypes/registerActionTypes";
import {
  registerUserSuccess,
  registerUserFailed
} from "../actions/registerActions";

const register = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    return null;
  }
};

function* registerUser(action) {
  const { email, password } = action.payload;

  const user = yield call(register, email, password);

  if (user) {
    yield put(registerUserSuccess(user));
  } else {
    yield put(registerUserFailed("Registration failed."));
  }
}

export const watchRegisterUser = takeEvery(REGISTER_USER, registerUser);
