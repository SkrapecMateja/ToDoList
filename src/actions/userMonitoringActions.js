import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from "../actionTypes/userMonitoringActionType";

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  payload: user
});
