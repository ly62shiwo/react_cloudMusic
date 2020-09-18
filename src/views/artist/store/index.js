import { getSingerCategoryRequest, getHotSingerRequest } from "@/api/request";

// actionTypes
export const CHANGE_SINGER_CATEGORY = "artist/SINGER_CATEGORY ";
export const CHANGE_HOT_SINGER = "artist/HOT_SINGER  ";


// actionCreators
export const changeSingerCategoryList = (data) => ({
  type: CHANGE_SINGER_CATEGORY,
  payload: data,
});

export const changeHotSingerList = (data) => ({
  type: CHANGE_HOT_SINGER,
  payload: data,
});
// < ------------------------------------------------ >
export const getSingerCategoryList = (query) => {
  return (dispatch) => {
    getSingerCategoryRequest(query)
      .then((data) => {
        console.log(data);
        dispatch(changeSingerCategoryList(data.artists));
      })
      .catch(() => {
        console.log("歌手分类数据传输错误");
      });
  };
};
export const getHotSingerList = (count, num) => {
  return (dispatch) => {
    getHotSingerRequest(count, num)
      .then((data) => {
        // console.log(data);
        dispatch(changeHotSingerList(data.artists));
      })
      .catch(() => {
        console.log("热门歌手数据传输错误");
      });
  };
};


// reducer
const defaultState = {
  singerCategoryList: [],
  hotSingerList: [],
};

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SINGER_CATEGORY:
      return Object.assign({}, state, { singerCategoryList: payload });

    case CHANGE_HOT_SINGER:
      return Object.assign({}, state, { hotSingerList: payload });

    default:
      return state;
  }
};

export { reducer };
