import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { singerMenus, alphaTypes } from "@/config/navMenus";
import { getSingerCategoryList, getHotSingerList } from "./store";

import "./style.scss";

function Artist(props) {
  // console.log(props);
  const { hotSingerList, singerCategoryList } = props;
  const { getSingerCategoryDispatch, getHotSingerListDispatch } = props;

  const [bg, setBg] = useState("hot");
  const [letterBg, setLetterBg] = useState("-1");
  const [sinCatName, setSinCatName] = useState();

  useEffect(() => {
    getHotSingerListDispatch(0, 100);
    // 判断 url id 获取对应数据
    let id = props.location.search.slice(4);
    // console.log(id);
    if (id) {
      for (let i = 0; i < singerMenus.length; i++) {
        singerMenus[i].list.map((item) => {
          if (item.id === Number(id)) {
            changeSingerCategory(item.key, "-1");
            setSinCatName(item.title);
            setBg(item.key);
          }
        });
      }
    }
    //eslint-disable-next-line
  }, []);

  // 歌手获取
  const changeSingerCategory = (key, letter) => {
    setLetterBg(letter);
    getSingerCategoryDispatch(`${key}&limit=100&initial=${letter}`);
  };

  return (
    <div className='artist m_wrap'>
      {/* 左侧歌手分类 */}
      <div className='leftCategory'>
        {singerMenus.map((item, indexs) => {
          return (
            <div className='leftbox' key={item.name}>
              <h2 className='country'>{item.name}</h2>
              <ul>
                {item.list.map((items) => {
                  return indexs === 0 ? (
                    <li key={items.id}>
                      <Link
                        to={`/discover/artist`}
                        className={bg === items.key ? "z-slt" : "cat-flag"}
                        onClick={() => {
                          setBg(items.key);
                        }}
                      >
                        {items.title}
                      </Link>
                    </li>
                  ) : (
                    <li key={items.id}>
                      <Link
                        to={`/discover/artist/cat?id=${items.id}`}
                        className={bg === items.key ? "z-slt" : "cat-flag"}
                        onClick={() => {
                          setBg(items.key);
                          setSinCatName(items.title);
                          changeSingerCategory(items.key, "-1");
                        }}
                        // type=1&area=96&initial=b
                      >
                        {items.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* 右侧 */}
      <div className='rightSinger'>
        {props.location.pathname === "/discover/artist" ? (
          //右侧热门歌手
          <div className='hotSinger'>
            <div className='hotNav'>
              <span className='goCommend'>热门歌手</span>
            </div>
            {/* 歌手列表 */}
            <ul className='ul-sin'>
              {hotSingerList.map((item, index) => {
                return (
                  <li key={item.id}>
                    {index < 10 ? (
                      <div className='topTen'>
                        <Link to={`/artist?id=${item.id}`}>
                          <img src={`${item.img1v1Url}?param=130y130`} alt='' />
                          <span className='mark'></span>
                        </Link>
                        <p>
                          <Link to={`/artist?id=${item.id}`}>{item.name}</Link>
                          <i className='iconSinger'></i>
                        </p>
                      </div>
                    ) : (
                      <div className='notop'>
                        <Link to={`/artist?id=${item.id}`}>{item.name}</Link>
                        <i className='iconSinger'></i>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          // 右侧分类歌手
          <div className='categorySinger'>
            <div className='hotNav'>
              <span className='goCommend'>{sinCatName}</span>
            </div>
            {/* 字母 */}
            <ul className='letter'>
              {alphaTypes.map((item) => {
                return (
                  <li
                    key={item.key}
                    onClick={() => {
                      setLetterBg(item.key);
                      changeSingerCategory(bg, item.key);
                    }}
                  >
                    <span
                      className={letterBg === item.key ? "let-slt" : ""}
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* 歌手列表 */}
            <ul className='ul-sin'>
              {singerCategoryList.map((item, index) => {
                return (
                  <li key={item.id}>
                    {index < 10 ? (
                      <div className='topTen'>
                        <Link to={`/artist?id=${item.id}`}>
                          <img src={`${item.img1v1Url}?param=130y130`} alt='' />
                          <span className='mark'></span>
                        </Link>
                        <p>
                          <Link to={`/artist?id=${item.id}`}>{item.name}</Link>
                          <i className='iconSinger'></i>
                        </p>
                      </div>
                    ) : (
                      <div className='notop'>
                        <Link to={`/artist?id=${item.id}`}>{item.name}</Link>
                        <i className='iconSinger'></i>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    hotSingerList: state.artist.hotSingerList,
    singerCategoryList: state.artist.singerCategoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingerCategoryDispatch(data) {
      dispatch(getSingerCategoryList(data));
    },
    getHotSingerListDispatch(count, num) {
      dispatch(getHotSingerList(count, num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Artist));
