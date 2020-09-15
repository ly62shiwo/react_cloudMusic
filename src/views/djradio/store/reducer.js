import * as actionTypes from "./actionTypes";

const defaultState = {
  djCategoryList: [],
  djRecommendList: [],
  djProgramTop: {
    list: [],
    updateTime: "",
  },
  djHotRadio: {
    query: {
      page: 1,
      total: 0,
    },
    hotRadioList: [],
  },
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CHANGE_DJ_CATEGORY:
      return Object.assign({}, state, { djCategoryList: payload });
    case actionTypes.CHANGE_DJ_RECOMMEND:
      return Object.assign({}, state, { djRecommendList: payload });
    case actionTypes.CHANGE_DJ_PROGRAM_TOP:
      return Object.assign({}, state, {
        djProgramTop: { list: payload.toplist, updateTime: payload.updateTime },
      });
    case actionTypes.CHANGE_DJ_HOT_RADIO:
      return Object.assign({}, state, {
        djHotRadio: {
          hotRadioList: payload.djRadios,
          query: { total: payload.count, page: payload.page },
        },
      });

    default:
      return state;
  }
};
