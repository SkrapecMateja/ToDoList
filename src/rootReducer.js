import { combineReducers } from "redux";

import register from "./reducers/registerReducer";
import userMonitoring from "./reducers/userMonitoringReducer";
import login from "./reducers/loginReducer";

const rootReducer = combineReducers({
  register,
  userMonitoring,
  login
});

export default rootReducer;
