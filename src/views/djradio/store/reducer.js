import * as actionTypes from "./actionTypes";

const defaultState = {
  djCategoryList: [],
  djRecommendList: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_DJ_CATEGORY:
      return Object.assign({}, state, { djCategoryList: payload });
    case actionTypes.CHANGE_DJ_RECOMMEND:
      return Object.assign({}, state, {djRecommendList: payload});

    default:
      return state;
  }
};
