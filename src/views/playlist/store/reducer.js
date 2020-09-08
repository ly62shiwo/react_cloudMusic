import * as actionTypes from "./actionTypes";

const defaultState = {
  catList: [],
  category: [],
  hotCommendList: [],
  query: {
    page: 1,
    total: 0
  }
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_CATLIST_CATEGORY:
      return Object.assign({}, state, { catList: payload.sub, category: payload.categories });
    case actionTypes.CHANGE_HOT_COMMEND:
        return Object.assign({}, state, { hotCommendList: payload.playlists, query: { total: payload.total , page: payload.page} });





    default:
      return state;
  }
};
