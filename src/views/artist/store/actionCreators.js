import * as actionTypes from "./actionTypes.js";
import { getSingerCategoryRequest, getHotSingerRequest } from "@/api/request";

export const changeSingerCategoryList = (data) => ({
  type: actionTypes.CHANGE_SINGER_CATEGORY,
  payload: data,
});

export const changeHotSingerList = (data) => ({
  type: actionTypes.CHANGE_HOT_SINGER,
  payload: data,
});


// < ------------------------------------------------ >
export const getSingerCategoryList = (query) => {
  return (dispatch) => {
    getSingerCategoryRequest(query)
      .then((data) => {
        console.log(data);
        dispatch(changeSingerCategoryList(data.artists));
      })
      .catch(() => {
        console.log("歌手分类数据传输错误");
      });
  };
};

export const getHotSingerList = (count, num) => {
  return (dispatch) => {
    getHotSingerRequest(count, num)
      .then((data) => {
        // console.log(data);
        dispatch(changeHotSingerList(data.artists));
      })
      .catch(() => {
        console.log("热门歌手数据传输错误");
      });
  };
};
