import { combineReducers } from "redux";
import { reducer as discoverReducer } from "../views/discover/store/index";

export default combineReducers({
    discover: discoverReducer,
  });
  