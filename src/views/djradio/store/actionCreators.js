import * as actionTypes from "./actionTypes.js";
import {
  getDjCategoryRequest,
  getDjProgramRecommendRequest,
  getDjProgramTopRequest,
  getDjHotRadioRequest,
} from "@/api/request";

export const changeDjCategoryRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_CATEGORY,
  payload: data,
});

export const changeDjRecommendRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_RECOMMEND,
  payload: data,
});

export const changeDjProgramTopRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_PROGRAM_TOP,
  payload: data,
});

export const changeDjHotRadioRequest = (data) => ({
  type: actionTypes.CHANGE_DJ_HOT_RADIO,
  payload: data,
});

// -------------------
export const getDjCategoryList = () => {
  return (dispatch) => {
    getDjCategoryRequest()
      .then((data) => {
        // console.log(data);
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

export const getDjProgramTopList = () => {
  return (dispatch) => {
    getDjProgramTopRequest()
      .then((data) => {
        // console.log(data);
        dispatch(changeDjProgramTopRequest(data));
      })
      .catch(() => {
        console.log("排行榜数据传输错误");
      });
  };
};

export const getDjHotRadioList = (query, page) => {
  return (dispatch) => {
    getDjHotRadioRequest(query)
      .then((data) => {
        data.page = page || 1
        console.log(data);
        dispatch(changeDjHotRadioRequest(data));
      })
      .catch(() => {
        console.log("热门类别数据传输错误");
      });
  };
};
