import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED
} from "../actionTypes/registerActionTypes";

const initalState = {
  loggedInUser: null,
  error: null
};

function registerReducer(state = initalState, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loggedInUser: action.payload,
        error: null
      };
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
}

export default registerReducer;
