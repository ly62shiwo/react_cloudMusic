import * as actionTypes from './actionTypes.js';
import { getBannerRequest, getHotCommendRequest, getNewDiscShelfRequest } from '@/api/request';

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


