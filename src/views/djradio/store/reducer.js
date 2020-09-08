import * as actionTypes from "./actionTypes";

const defaultState = {
  djCategoryList: []
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_DJ_CATEGORY:
      return Object.assign({}, state, { djCategoryList: payload });

    default:
      return state;
  }
};
