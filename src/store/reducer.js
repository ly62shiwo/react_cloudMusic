import { combineReducers } from "redux";
import { reducer as discoverReducer } from "../views/discover/store/index";
import { reducer as toplistReducer } from "../views/toplist/store/index";

export default combineReducers({
  discover: discoverReducer,
  toplist: toplistReducer,
});
