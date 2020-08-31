import * as actionTypes from "./actionTypes";

const defaultState = {
  bannerList: [],
  hotCommendList: [],
  newDiscShelfList: [],
  leaderboardList: [],
  hotSingerList: []
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_BANNER:
      return Object.assign({}, state, { bannerList: payload });

    case actionTypes.CHANGE_HOT_COMMEND:
      return Object.assign({}, state, { hotCommendList: payload });

    case actionTypes.CHANGE_NEW_DISC_SHELF:
      return Object.assign({}, state, { newDiscShelfList: payload });

    case actionTypes.CHANGE_LEADER_BOARD:
      return Object.assign({}, state, { leaderboardList: payload });

    case actionTypes.CHANGE_HOT_SINGER:
      return Object.assign({}, state, { hotSingerList: payload });


    default:
      return state;
  }
};
