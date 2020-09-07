import * as actionTypes from "./actionTypes.js";
import {getCatListCategoryRequest} from "@/api/request";

export const changeCatListCategoryRequest = (data) => ({
    type: actionTypes.CHANGE_CATLIST_CATEGORY,
    payload: data,
  });



// ---------------------------------------
export const getCatList = () => {
    return (dispatch) => {
        getCatListCategoryRequest()
        .then((data) => {
          console.log(data);
          dispatch(changeCatListCategoryRequest(data));
        })
        .catch(() => {
          console.log("歌单分类传输错误");
        });
    };
  };
  