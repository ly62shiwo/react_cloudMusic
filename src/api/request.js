import { axiosInstance } from "./index.js";
// 首页轮播图
export const getBannerRequest = () => {
  return axiosInstance.get("/banner?type=0");
};
// 首页热门推荐
export const getHotCommendRequest = () => {
  return axiosInstance.get("/top/playlist?limit=8&order=hot");
};

