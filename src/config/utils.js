//播放量处理
const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

// 歌手名处理 无跳转
const getName = (list) => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

// 时间戳转换为时间
const timestamp = (time) => {
  let getDate = new Date(time);

  if ((time + "").length > 12) {
    return getDate.getMonth() + 1 + "月" + getDate.getDate() + "日";
  } else {
    let minute =
      getDate.getMinutes() < 10
        ? "0" + getDate.getMinutes()
        : getDate.getMinutes();
    let second =
      getDate.getSeconds() < 10
        ? "0" + getDate.getSeconds()
        : getDate.getSeconds();
    return minute + ":" + second;
  }
};


export { timestamp, getName, getCount };
