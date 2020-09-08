/**
 * 榜单
 */
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Leaderboard(props) {
  // console.log(props, "Leaderboard");
  const { leaderboardList } = props;
  return (
    <div style={{ width: 980, margin: "0 auto" }}>
      <div className='leaderBoard'>
        <div className='leaderBoardNav'>
          <span className='hotNavIcon'></span>
          <Link to='discover/toplist' className='goToplist'>
            榜单
          </Link>
          <Link to='discover/toplist' className='goMore'>
            更多
          </Link>
        </div>

        <div className='leaderBoardCard'>
          {leaderboardList
            ? leaderboardList.map((item) => {
                return (
                  <div className='listDetails' key={item.id}>
                    <Link to={`/discover/toplist?id=${item.id}`}>
                      <img
                        src={item.coverImgUrl + "?param=100y100"}
                        alt='榜单'
                      ></img>
                      <span className='mark'></span>
                    </Link>
                    <div className='toToplist'>
                      <Link to={`/discover/toplist?id=${item.id}`}>
                        {item.name}
                      </Link>
                      <span
                        className='playIcon'
                        onClick={() => console.log("播放")}
                      ></span>
                      <span
                        className='collect'
                        onClick={() => console.log("登录收藏")}
                      ></span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Leaderboard);
