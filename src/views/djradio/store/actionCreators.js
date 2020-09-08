import * as actionTypes from "./actionTypes.js";
import { getDjCategoryRequest } from "@/api/request";

export const changeDjCategoryRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_CATEGORY,
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
