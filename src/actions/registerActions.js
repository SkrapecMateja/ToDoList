import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED
} from "../actionTypes/registerActionTypes";

export const registerUser = (email, password) => ({
  type: REGISTER_USER,
  payload: { email, password }
});

export const registerUserSuccess = user => ({
  type: REGISTER_USER_SUCCESS,
  payload: user
});

export const registerUserFailed = error => ({
  type: REGISTER_USER_FAILED,
  payload: error
});
