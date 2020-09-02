import React from "react";
import { Link } from "react-router-dom";

export const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

export const singerName = (url, item) => {
  console.log(item, "item");
  if (item.length > 1) {
    let toSinger = item.map((item) => {
      console.log(item.id, item.name);
      return (
        <span>
          <Link to={`${url}?id=${item.id}`}>{item.name}</Link> &nbsp;
          {item.length === 0 ? "/" : null}
        </span>
      );
    });
    return toSinger;
  } else {
    return <Link to={`${url}?id=${item[0].id}`}>{item[0].name}</Link>;
  }
};
