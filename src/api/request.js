import { axiosInstance } from "./index.js";
// 首页轮播图
export const getBannerRequest = () => {
  return axiosInstance.get("/banner?type=0");
};
// 热门推荐
export const getHotCommendRequest = (data) => {  // ?limit=10&offset=1&order=new/hot&cat:tag--华语，欧美
  return axiosInstance.get(`/top/playlist?${data}`);
};
// 新碟上架
export const getNewDiscShelfRequest = () => {
  return axiosInstance.get(`/top/album?&limit=10`);
};
// 榜单
export const getLeaderboardRequest = () => {
  return axiosInstance.get(`/toplist`);
};
// 热门歌手
export const getHotSingerRequest = (count, num) => {
  return axiosInstance.get(`/top/artists?offset=${count}&limit=${num}`);
};
// 热门主播榜
export const getHotAnchorRequest = (num) => {
  return axiosInstance.get(`/dj/toplist/popular?limit=${num}`);
};
// 歌单详情
export const getPlayListDetailRequest = (id) => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};
// 歌单分类
export const getCatListCategoryRequest = () => {
  return axiosInstance.get(`/playlist/catlist`);
};
// 电台分类
export const getDjCategoryRequest = () => {
  return axiosInstance.get(`/dj/catelist`);
};