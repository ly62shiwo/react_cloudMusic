import * as actionTypes from "./actionTypes";

const defaultState = {
  catList: [],
  category: [],
  hotCommendList: [],
  query: {
    page: 1,
    total: 0
  },
  loading: false,
  playListDetail: {
    creator:{},
    tracks:{},
    tags:[]
  },

};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_CATLIST_CATEGORY:
      return Object.assign({}, state, { catList: payload.sub, category: payload.categories });
    case actionTypes.CHANGE_HOT_COMMEND:
        return Object.assign({}, state, { loading: false,  hotCommendList: payload.playlists, query: { total: payload.total , page: payload.page} });
    case actionTypes.CHANGE_LOADING:
      return Object.assign({}, state, {loading: payload})

    case actionTypes.CHANGE_PLAYLIST_DETAIL:
      return Object.assign({},state ,{playListDetail: payload})

    default:
      return state;
  }
};
