import * as actionTypes from "./actionTypes";
// import { fromJS } from "immutable"; // 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = {
  bannerList: [],
  hotCommendList: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_BANNER:
      return Object.assign({}, state, { bannerList: payload });

    case actionTypes.CHANGE_HOT_COMMEND:
      return Object.assign({}, state, { hotCommendList: payload });


    default:
      return state;
  }
};
