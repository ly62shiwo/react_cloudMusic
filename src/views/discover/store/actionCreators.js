import * as actionTypes from './actionTypes.js';
import { getBannerRequest, getHotCommendRequest, getNewDiscShelfRequest, getLeaderboardRequest, getHotSingerRequest } from '@/api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  payload: data
});

export const changeHotCommendList = (data) => ({
  type: actionTypes.CHANGE_HOT_COMMEND ,
  payload: data
});

export const changeNewDiscShelfRequest = (data) => ({
  type: actionTypes.CHANGE_NEW_DISC_SHELF ,
  payload: data
});

export const changeLeaderboardRequest = (data) => ({
  type: actionTypes.CHANGE_LEADER_BOARD ,
  payload: data
});

export const changeHotSingerRequest = (data) => ({
  type: actionTypes.CHANGE_HOT_SINGER ,
  payload: data
});



// < ------------------------------------------------ >
export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest ().then (data => {
      dispatch (changeBannerList (data.banners));
    }).catch (() => {
      console.log ("轮播图数据传输错误");
    }) 
  }
};

export const getHotCommendList = () => {
  return dispatch => {
    let query = 'limit=8&order=hot'
    getHotCommendRequest(query).then(data => {
      dispatch (changeHotCommendList (data.playlists));
    }).catch (() => {
      console.log ("热门推荐数据传输错误");
    }) 
  }
}

export const getNewDiscShelfList = () => {
  return dispatch => {
    getNewDiscShelfRequest().then(data => {
      dispatch (changeNewDiscShelfRequest (data.monthData));
    }).catch (() => {
      console.log ("新碟上架数据传输错误");
    }) 
  }
}

export const getLeaderboardList = () => {
  return dispatch => {
    getLeaderboardRequest().then(data => {
      let list = data.list.splice(0,3)
      dispatch (changeLeaderboardRequest (list));
    }).catch (() => {
      console.log ("排行榜数据传输错误");
    }) 
  }
}

export const getHotSingerList = (num) => {
  return dispatch => {
    getHotSingerRequest(num).then(data => {
      // console.log(data);
      dispatch (changeHotSingerRequest (data.artists));
    }).catch (() => {
      console.log ("热门歌手传输错误");
    }) 
  }
}





