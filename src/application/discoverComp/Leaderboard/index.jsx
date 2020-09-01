import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default function Leaderboard(props) {
  console.log(props, "Leaderboard");
  const { leaderboardList } = props;
  return (
    <div style={{ width: 980, margin: "0 auto" }}>
      <div className='leaderBoard'>
        <div className='leaderBoardNav'>
          <Link to='discover/toplist' className='goToplist'>
            榜单
          </Link>
          <Link to='discover/toplist' className='goMore'>
            更多
          </Link>
        </div>

        <div className='leaderBoardCard'>
          {leaderboardList.map((item) => {
            return (
              <div className='listDetails' key={item.id}>
                <Link to={`/discover/toplist?id=${item.id}`}>
                  <img
                    style={{ width: 100, height: 100 }}
                    src={item.coverImgUrl}
                    alt='榜单'
                  ></img>
                </Link>
                <div className='toToplist'>
                  <Link to={`/discover/toplist?id=${item.id}`}>
                    {item.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
