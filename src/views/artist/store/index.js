import {
  getSingerCategoryRequest,
  getHotSingerRequest,
  getSingerSingleRequest,
  getSingerAlbumRequest,
  getSingerMvRequest,
  getSingerDescribeRequest,
} from "@/api/request";

// actionTypes
export const CHANGE_SINGER_CATEGORY = "artist/SINGER_CATEGORY";
export const CHANGE_HOT_SINGER = "artist/HOT_SINGER";
// -----歌手详情 actionTypes
export const CHANGE_SINGER_SINGLE = "artistDetails/CHANGE_SINGER_SINGLE";
export const CHANGE_SINGER_ALBUM = "artistDetails/CHANGE_SINGER_ALBUM";
export const CHANGE_SINGER_MV = "artistDetails/CHANGE_SINGER_MV";
export const CHANGE_SINGER_DESCRIBE = "artistDetails/CHANGE_SINGER_DESCRIBE ";

// actionCreators
export const changeSingerCategoryList = (data) => ({
  type: CHANGE_SINGER_CATEGORY,
  payload: data,
});
export const changeHotSingerList = (data) => ({
  type: CHANGE_HOT_SINGER,
  payload: data,
});
// -----歌手详情 actionCreators
export const changeSingerSingleList = (data) => ({
  type: CHANGE_SINGER_SINGLE,
  payload: data,
});
export const changeSingerAlbumList = (data) => ({
  type: CHANGE_SINGER_ALBUM,
  payload: data,
});
export const changeSingerMvList = (data) => ({
  type: CHANGE_SINGER_MV,
  payload: data,
});
export const changeSingerDescribe = (data) => ({
  type: CHANGE_SINGER_DESCRIBE,
  payload: data,
});

// < ------------------------------------------------ >
export const getSingerCategoryList = (query) => {
  return (dispatch) => {
    getSingerCategoryRequest(query)
      .then((data) => {
        // console.log(data);
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
// -----歌手详情数据获取
export const getSingerSingleList = (id) => {
  return (dispatch) => {
    getSingerSingleRequest(id)
      .then((data) => {
        // console.log(data);
        dispatch(changeSingerSingleList(data));
      })
      .catch(() => {
        console.log("歌手单曲数据传输错误");
      });
  };
};
export const getSingerAlbumList = (query, page) => {
  return (dispatch) => {
    getSingerAlbumRequest(query, page)
      .then((data) => {
        // console.log(data);
        data.page = page || 1;
        dispatch(changeSingerAlbumList(data));
      })
      .catch(() => {
        console.log("歌手专辑数据传输错误");
      });
  };
};
export const getSingerMvList = (query, page) => {
  return (dispatch) => {
    getSingerMvRequest(query, page)
      .then((data) => {
        // console.log(data);
        data.page = page || 1;
        dispatch(changeSingerMvList(data));
      })
      .catch(() => {
        console.log("歌手mv数据传输错误");
      });
  };
};
export const getSingerDescribe = (id) => {
  return (dispatch) => {
    getSingerDescribeRequest(id)
      .then((data) => {
        // console.log(data);
        dispatch(changeSingerDescribe(data));
      })
      .catch(() => {
        console.log("歌手描述传输错误");
      });
  };
};

// reducer
const defaultState = {
  singerCategoryList: [],
  hotSingerList: [],
  singerSingle: {
    hotSongs: [],
    artist: {},
  },
  singerAlbum: {
    singerAlbumList: [],
    singerAlbumQuery: {
      page: 1,
      total: 0,
    },
  },
  singerMv: {
    singerMvList: [],
    singerMvQuery: {
      page: 1,
      total: 0,
    },
  },
  singerDescribe: {
    introduction:[]
  },
};

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SINGER_CATEGORY:
      return Object.assign({}, state, { singerCategoryList: payload });

    case CHANGE_HOT_SINGER:
      return Object.assign({}, state, { hotSingerList: payload });

    case CHANGE_SINGER_SINGLE:
      return Object.assign({}, state, {
        singerSingle: { hotSongs: payload.hotSongs, artist: payload.artist },
      });

    case CHANGE_SINGER_ALBUM:
      return Object.assign({}, state, {
        singerAlbum: {
          singerAlbumList: payload.hotAlbums,
          singerAlbumQuery: {
            total: payload.artist.albumSize,
            page: payload.page,
          },
        },
      });

    case CHANGE_SINGER_MV:
      return Object.assign({}, state, {
        singerMv: {
          singerMvList: payload.mvs,
          singerMvQuery: {
            total: payload.mvs.length,
            page: payload.page,
          },
        },
      });

    case CHANGE_SINGER_DESCRIBE:
      return Object.assign({}, state, { singerDescribe: payload });

    default:
      return state;
  }
};

export { reducer };
