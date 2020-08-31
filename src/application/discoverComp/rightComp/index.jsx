import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function RightComp(props) {
  console.log(props);
  const { hotSingerList } = props;
  return (
    <div className='rightCard'>
      <div className='toLogin'>
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <a href='#!' onClick={() => console.log("login")}>
          用户登录
        </a>
      </div>

      <div className='singer'>
        <div className='singerNav'>
          <span>热门歌手</span>
          <Link to='discover/artist'>查看全部 {">"} </Link>
        </div>
        {hotSingerList
          ? hotSingerList.map((item) => {
              return (
                <div key={item.accountId} className='singerDetail'>
                  <img
                    style={{ width: 62, height: 62 }}
                    src={item.img1v1Url}
                  ></img>
                  <p>{item.name}</p>
                </div>
              );
            })
          : null}
      </div>

      <div className='anchor'>
        <div className='anchorNav'>
          <span>热门主播</span>
        </div>

        
      </div>
    </div>
  );
}
