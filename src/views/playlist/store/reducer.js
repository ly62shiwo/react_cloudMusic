import * as actionTypes from "./actionTypes";

const defaultState = {
  catList: [],
  category: []
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_CATLIST_CATEGORY:
      console.log(type, payload);
      return Object.assign({}, state, { catList: payload.sub, category: payload.categories });
    default:
      return state;
  }
};
