import * as actionTypes from "./actionTypes.js";
import { getDjCategoryRequest, getDjProgramRecommendRequest, getDjProgramTopRequest } from "@/api/request";

export const changeDjCategoryRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_CATEGORY,
  payload: data,
});

export const changeDjRecommendRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_RECOMMEND,
  payload: data,
});

export const getDjCategoryList = () => {
  return (dispatch) => {
    getDjCategoryRequest()
      .then((data) => {
        console.log(data);
        dispatch(changeDjCategoryRequest(data.categories));
      })
      .catch(() => {
        console.log("电台分类数据传输错误");
      });
  };
};

export const getDjRecommendList = () => {
  return (dispatch) => {
    getDjProgramRecommendRequest()
      .then((data) => {
        // console.log(data);
        dispatch(changeDjRecommendRequest(data.programs));
      })
      .catch(() => {
        console.log("推荐节目数据传输错误");
      });
  };
};
