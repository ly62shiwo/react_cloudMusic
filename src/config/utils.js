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
const timestamp = (time, pattern) => {
  let getDate = new Date(time);

  let year = getDate.getFullYear();
  let minute = getDate.getMinutes();
  let second = getDate.getSeconds();
  let month = getDate.getMonth() + 1;
  let day = getDate.getDate();

  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const dispose = {
    date: `${addZero(month)}月${addZero(day)}日`, // 月 日
    colon: addZero(minute) + ":" + addZero(second), // :
    point: `${year}.${addZero(month)}.${addZero(day)}`, // .
    line: `${year}-${addZero(month)}-${addZero(day)}`, // -
  };

  return dispose[pattern] || {};
};

export { timestamp, getName, getCount };
