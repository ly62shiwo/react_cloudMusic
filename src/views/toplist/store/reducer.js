import * as actionTypes from "./actionTypes";

const defaultState = {
  leaderBoardList: [],
  playListDetail: [],
  loadingTop: false
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_LEADERBOARD:
      return Object.assign({}, state, { leaderBoardList: payload });
    case actionTypes.GET_PLAYLIST_DETAIL:
      return Object.assign({}, state, { playListDetail: payload.playlist , loadingTop: false });
      
    case actionTypes.CHANGE_TOP_LOADING:
      return Object.assign({}, state, { loadingTop: payload });

    default:
      return state;
  }
};
