import { combineReducers } from "redux";
import { reducer as discoverReducer } from "../views/discover/store/index";
import { reducer as toplistReducer } from "../views/toplist/store/index";
import { reducer as playListReducer } from '../views/playlist/store/index';

export default combineReducers({
  discover: discoverReducer,
  toplist: toplistReducer,
  playlist: playListReducer,
});
