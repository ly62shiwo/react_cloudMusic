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