import * as actionTypes from "./actionTypes";

const defaultState = {
  singerCategoryList: [],
  hotSingerList:[]
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_SINGER_CATEGORY:
      return Object.assign({}, state, { singerCategoryList: payload });

    case actionTypes.CHANGE_HOT_SINGER:
      return Object.assign({}, state, { hotSingerList: payload });

    default:
      return state;
  }
};
