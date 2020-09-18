import { getAllNewDiscRequest, getNewDiscShelfRequest } from "@/api/request";

// actionTypes
export const CHANGE_ALL_NEW_DISC = "album/CHANGE_ALL_NEW_DISC";
export const CHANGE_NEW_DISC_SHELF = "album/CHANGE_NEW_DISC_SHELF";

// actionCreators
export const changeAllNewDiscRequest = (data) => ({
  type: CHANGE_ALL_NEW_DISC,
  payload: data,
});
export const changeNewDiscShelfRequest = (data) => ({
  type: CHANGE_NEW_DISC_SHELF,
  payload: data,
});
// -------------------
export const getAllNewDiscList = (query, page) => {
  return (dispatch) => {
    getAllNewDiscRequest(query, page)
      .then((data) => {
        data.page = page || 1;
        // console.log(data);
        dispatch(changeAllNewDiscRequest(data));
      })
      .catch(() => {
        console.log("全部新碟数据传输错误");
      });
  };
};
export const getNewDiscShelfList = (query) => {
  return (dispatch) => {
    getNewDiscShelfRequest(query)
      .then((data) => {
        dispatch(changeNewDiscShelfRequest(data.monthData));
      })
      .catch(() => {
        console.log("新碟上架数据传输错误");
      });
  };
};

//reducer
const defaultState = {
  newDiscShelfList: [],
  allNewDiscList: [],
  query: {
    page: 1,
    total: 0,
  },
};
const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_ALL_NEW_DISC:
      return Object.assign({}, state, {
        allNewDiscList: payload.albums,
        query: { total: payload.total, page: payload.page },
      });

    case CHANGE_NEW_DISC_SHELF:
      return Object.assign({}, state, { newDiscShelfList: payload });

    default:
      return state;
  }
};
export { reducer };
