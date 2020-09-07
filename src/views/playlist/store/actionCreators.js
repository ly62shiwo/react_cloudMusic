import * as actionTypes from "./actionTypes.js";
import {getCatListCategoryRequest, getHotCommendRequest} from "@/api/request";

export const changeCatListCategoryRequest = (data) => ({
    type: actionTypes.CHANGE_CATLIST_CATEGORY,
    payload: data,
  });

  export const changeHotCommendRequest = (data) => ({
    type: actionTypes.CHANGE_HOT_COMMEND,
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

export const getHotCommend = (query) => {
  return (dispatch) => {
    console.log(query,'query');
    getHotCommendRequest(query)
    .then((data) => {
      console.log(data);
      dispatch(changeHotCommendRequest(data));
    })
    .catch(() => {
      console.log("歌单列表错误");
    })
  }
}
  