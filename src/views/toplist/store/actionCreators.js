import * as actionTypes from "./actionTypes.js";
import { getLeaderboardRequest, getPlayListDetailRequest } from "@/api/request";

export const changeLeaderboardRequest = (data) => ({
  type: actionTypes.GET_LEADERBOARD,
  payload: data,
});

export const changePlayLisDetailRequest = (data) => ({
  type: actionTypes.GET_PLAYLIST_DETAIL,
  payload: data,
});


// ------------------------------
export const getLeaderboardList = () => {
  return (dispatch) => {
    getLeaderboardRequest()
      .then((data) => {
        // console.log(data);
        dispatch(changeLeaderboardRequest(data.list));
      })
      .catch(() => {
        console.log("排行榜数据传输错误");
      });
  };
};

export const getPlayLisDetailList = (id) => {
  return (dispatch) => {
    getPlayListDetailRequest(id)
      .then((data) => {
        // console.log(data);
        dispatch(changePlayLisDetailRequest(data));
      })
      .catch(() => {
        console.log("歌曲列表数据传输错误");
      });
  };
};

export const changeTopLoading = (data) => {
  return (dispatch) => {
    console.log('true');
    dispatch({
      type: actionTypes.CHANGE_TOP_LOADING,
      payload: data,
    });
  };
};
