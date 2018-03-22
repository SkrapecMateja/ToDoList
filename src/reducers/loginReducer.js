import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from "../actionTypes/loginActionTypes";

const initalState = {
  loggedInUser: null,
  error: null
};

function loginReducer(state = initalState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loggedInUser: action.payload,
        error: null
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
}

export default loginReducer;
