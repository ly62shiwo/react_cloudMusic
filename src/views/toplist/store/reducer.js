import * as actionTypes from "./actionTypes";

const defaultState = {
  leaderBoardList: [],
  playListDetail: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_LEADERBOARD:
      return Object.assign({}, state, { leaderBoardList: payload });
    case actionTypes.GET_PLAYLIST_DETAIL:
      return Object.assign({}, state, { playListDetail: payload.playlist });

    default:
      return state;
  }
};
