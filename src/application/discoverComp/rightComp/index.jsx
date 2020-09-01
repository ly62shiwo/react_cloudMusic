/**
 * 首页右侧
 */
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function RightComp(props) {
  // console.log(props,'RightComp');
  const { hotSingerList, hotAnchorList } = props;
  return (
    <div className='rightCard'>
      <div className='toLogin'>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <button
          onClick={(e) => {
            console.log('登录');
          }}
        >
          用户登录
        </button>
      </div>

      <div className='singer'>
        <div className='singerNav'>
          <span>热门歌手</span>
          <Link to='discover/artist'>查看全部 {">"} </Link>
        </div>
        {hotSingerList
          ? hotSingerList.map((item) => {
              return (
                <Link to={`/artist?id=${item.id}`} key={item.accountId}>
                  <div className='singerDetail'>
                    <img
                      style={{ width: 62, height: 62 }}
                      src={item.img1v1Url}
                      alt=''
                    ></img>
                    <p>{item.name}</p>
                  </div>
                </Link>
              );
            })
          : null}
      </div>

      <div className='anchor'>
        <div className='anchorNav'>
          <span>热门主播</span>
        </div>

        <ul className='anchorList'>
          {hotAnchorList.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/user/home?id=${item.id}`}>
                  <img
                    style={{ width: 40, height: 40 }}
                    src={item.avatarUrl}
                    alt=''
                  />
                </Link>
                <p>
                  <Link to={`/user/home?id=${item.id}`}>{item.nickName}</Link>
                </p>
                <span></span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(RightComp);
