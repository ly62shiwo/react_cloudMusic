const navMenus = [
  {
    key: "discover",
    title: "发现音乐",
    path: "/discover",
  },
  {
    key: "my",
    title: "我的音乐",
    path: "/my",
  },
  {
    key: "friend",
    title: "朋友",
    path: "/friend",
  },
  {
    key: "storeProduct",
    title: "商城",
    path: "/store/product",
  },
  {
    key: "nmusician",
    title: "音乐人",
    path: "/nmusician/web/index/",
  },
  {
    key: "download",
    title: "下载客户端",
    path: "/download",
  },
];

const navMenusTwo = [
  {
    key: "discover",
    path: "/discover",
    title: "推荐",
  },
  {
    key: "toplist",
    path: "/discover/toplist",
    title: "排行榜",
  },
  {
    key: "playlist",
    path: "/discover/playlist",
    title: "歌单",
  },
  {
    key: "djradio",
    path: "/discover/djradio",
    title: "主播电台",
  },
  {
    key: "artist",
    path: "/discover/artist",
    title: "歌手",
  },
  {
    key: "album",
    path: "/discover/album",
    title: "新碟上架",
  },
];

const singerMenus = [
  {
    name: "推荐",
    list: [
      {
        title: "推荐歌手",
        key: "hot",
        id: 1000,
      },
    ],
  },
  {
    name: "华语",
    list: [
      {
        title: "华语男歌手",
        key: "type=1&area=7",
        id: 1001,
      },
      {
        title: "华语女歌手",
        key: "type=2&area=7",
        id: 1002,
      },
      {
        title: "华语组合/乐队",
        key: "type=3&area=7",
        id: 1003,
      },
    ],
  },
  {
    name: "欧美",
    list: [
      {
        title: "欧美男歌手",
        key: "type=1&area=96",
        id: 2001,
      },
      {
        title: "欧美女歌手",
        key: "type=2&area=96",
        id: 2002,
      },
      {
        title: "欧美组合/乐队",
        key: "type=3&area=96",
        id: 2003,
      },
    ],
  },
  {
    name: "日本",
    list: [
      {
        title: "日本男歌手",
        key: "type=1&area=8",
        id: 6001,
      },
      {
        title: "日本女歌手",
        key: "type=2&area=8",
        id: 6002,
      },
      {
        title: "日本组合/乐队",
        key: "type=3&area=8",
        id: 6003,
      },
    ],
  },
  {
    name: "韩国",
    list: [
      {
        title: "韩国男歌手",
        key: "type=1&area=16",
        id: 7001,
      },
      {
        title: "韩国女歌手",
        key: "type=2&area=16",
        id: 7002,
      },
      {
        title: "韩国组合/乐队",
        key: "type=3&area=16",
        id: 7003,
      },
    ],
  },

  {
    name: "其他",
    list: [
      {
        title: "其他男歌手",
        key: "type=1&area=0",
        id: 4001,
      },
      {
        title: "其他女歌手",
        key: "type=2&area=0",
        id: 4002,
      },
      {
        title: "其他组合/乐队",
        key: "type=3&area=0",
        id: 4003,
      },
    ],
  },
];

// 歌手首字母
const alphaTypes = [
  {
    key: "-1",
    name: "热门",
  },
  {
    key: "A",
    name: "A",
  },
  {
    key: "B",
    name: "B",
  },
  {
    key: "C",
    name: "C",
  },
  {
    key: "D",
    name: "D",
  },
  {
    key: "E",
    name: "E",
  },
  {
    key: "F",
    name: "F",
  },
  {
    key: "G",
    name: "G",
  },
  {
    key: "H",
    name: "H",
  },
  {
    key: "I",
    name: "I",
  },
  {
    key: "J",
    name: "J",
  },
  {
    key: "K",
    name: "K",
  },
  {
    key: "L",
    name: "L",
  },
  {
    key: "M",
    name: "M",
  },
  {
    key: "N",
    name: "N",
  },
  {
    key: "O",
    name: "O",
  },
  {
    key: "P",
    name: "P",
  },
  {
    key: "Q",
    name: "Q",
  },
  {
    key: "R",
    name: "R",
  },
  {
    key: "S",
    name: "S",
  },
  {
    key: "T",
    name: "T",
  },
  {
    key: "U",
    name: "U",
  },
  {
    key: "V",
    name: "V",
  },
  {
    key: "W",
    name: "W",
  },
  {
    key: "X",
    name: "X",
  },
  {
    key: "Y",
    name: "Y",
  },
  {
    key: "Z",
    name: "Z",
  },
  {
    key: "0",
    name: "其他",
  },
];
export { navMenus, navMenusTwo, alphaTypes, singerMenus };
