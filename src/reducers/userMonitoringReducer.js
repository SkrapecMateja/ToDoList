import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from "../actionTypes/userMonitoringActionType";

const initalState = {
  loggedInUser: null
};

function userMonitoringReducer(state = initalState, action) {
  switch (action.type) {
    case USER_LOGGED_IN: {
      return {
        ...state,
        loggedInUser: action.payload
      };
    }
    case USER_LOGGED_OUT: {
      return {
        ...state,
        loggedInUser: null
      };
    }
    default:
      return state;
  }
}

export default userMonitoringReducer;
