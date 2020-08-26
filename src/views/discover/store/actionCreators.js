import * as actionTypes from './actionTypes.js';
import { getBannerRequest, getHotCommendRequest } from '@/api/request';

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  payload: data
});

export const changeHotCommendList = (data) => ({
  type: actionTypes.CHANGE_HOT_COMMEND ,
  payload: data
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest ().then (data => {
      console.log(data);
      dispatch (changeBannerList (data.banners));
    }).catch (() => {
      console.log ("轮播图数据传输错误");
    }) 
  }
};

export const getHotCommendList = () => {
  return dispatch => {
    getHotCommendRequest().then(data => {
      console.log(data);
      dispatch (changeHotCommendList (data.banners));
    }).catch (() => {
      console.log ("热门推荐数据传输错误");
    }) 
  }
}

