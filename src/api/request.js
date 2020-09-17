import { axiosInstance } from "./index.js";
// 首页轮播图
export const getBannerRequest = () => {
  return axiosInstance.get("/banner?type=0");
};
// 热门推荐
export const getHotCommendRequest = (data) => {
  // `offset=${(page - 1) * 35}&limit=35&cat=${ }`
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
// 电台推荐节目
export const getDjProgramRecommendRequest = () => {
  return axiosInstance.get(`/program/recommend`);
};
// 电台节目排行榜
export const getDjProgramTopRequest = () => {
  return axiosInstance.get(`/dj/program/toplist`);
};
// 电台类别热门
// let data = `offset=${(page - 1) * 24}&limit=24&cateId=${}`;
export const getDjHotRadioRequest = (data) => {
  return axiosInstance.get(`/dj/radio/hot?${data}`);
};

// 热门歌手
export const getHotSingerRequest = (count, num) => {
  return axiosInstance.get(`/top/artists?offset=${count}&limit=${num}`);
};
// 歌手分类列表  type=1&area=96&initial=b
export const getSingerCategoryRequest = (data) => {
  return axiosInstance.get(`/artist/list?${data}`);
};
