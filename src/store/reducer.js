import { combineReducers } from "redux";
import { reducer as discoverReducer } from "../views/discover/store/index";
import { reducer as toplistReducer } from "../views/toplist/store/index";
import { reducer as playListReducer } from "../views/playlist/store/index";
import { reducer as djradioReducer } from "../views/djradio/store/index";
import { reducer as artistReducer } from "../views/artist/store/index";
import { reducer as albumReducer } from "../views/album/store/index";

export default combineReducers({
  discover: discoverReducer,
  toplist: toplistReducer,
  playlist: playListReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  // artistDetails: artistReducer,
  album: albumReducer,
});
