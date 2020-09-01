import { axiosInstance } from "./index.js";
// 首页轮播图
export const getBannerRequest = () => {
  return axiosInstance.get("/banner?type=0");
};
// 热门推荐
export const getHotCommendRequest = (data) => {
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
export const getHotSingerRequest = (num) => {
  return axiosInstance.get(`/top/artists?&limit=${num}`);
};
// 热门主播榜
export const getHotAnchorRequest = (num) => {
  return axiosInstance.get(`/dj/toplist/popular?limit=${num}`);
};
