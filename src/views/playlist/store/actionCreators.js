import * as actionTypes from "./actionTypes.js";
import {
  getCatListCategoryRequest,
  getHotCommendRequest,
  getPlayListDetailRequest,
} from "@/api/request";

export const changeCatListCategoryRequest = (data) => ({
  type: actionTypes.CHANGE_CATLIST_CATEGORY,
  payload: data,
});
export const changeHotCommendRequest = (data) => ({
  type: actionTypes.CHANGE_HOT_COMMEND,
  payload: data,
});
// 歌单详情页
export const changePlayListDetailRequest = (data) => ({
  type: actionTypes.CHANGE_PLAYLIST_DETAIL,
  payload: data,
});
// ---------------------------------------
export const getCatList = () => {
  return (dispatch) => {
    getCatListCategoryRequest()
      .then((data) => {
        // console.log(data);
        dispatch(changeCatListCategoryRequest(data));
      })
      .catch(() => {
        console.log("歌单分类错误");
      });
  };
};
export const getHotCommend = (query, page) => {
  return (dispatch) => {
    getHotCommendRequest(query)
      .then((data) => {
        data.page = page || 1;
        // console.log(data);
        dispatch(changeHotCommendRequest(data));
      })
      .catch(() => {
        console.log("歌单列表错误");
      });
  };
};
export const changeLoading = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CHANGE_LOADING,
      payload: data,
    });
  };
};
// 歌单详情页
export const getPlayListDetail = (id) => {
  return (dispatch) => {
    getPlayListDetailRequest(id)
      .then((data) => {
        // console.log(data);
        dispatch(changePlayListDetailRequest(data.playlist));
      })
      .catch(() => {
        console.log("歌单详情错误");
      });
  };
};

