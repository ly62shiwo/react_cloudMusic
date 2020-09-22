import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionType from "./store/actionCreators";
import { timestamp } from "@/config/utils";
// import RankCount from "@/component/rankCount";
import "./styles.scss";

function Toplist(props) {
  const { leaderBoardList, playListDetail } = props;
  const { getLeaderboardDispatch, getPlayLisDetailDispatch } = props; // dispatch
  // console.log(props, "toplist");

  const [select, setSelect] = useState(19723756);
  const [updateTimeName, setUpdateTimeName] = useState("每天更新");

  useEffect(() => {
    getLeaderboardDispatch();
    getPlayLisDetailDispatch(props.location.search.slice(4) || select);
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, []);

  // 列表
  const songList = () => {
    let arr = [];
    Object.assign(arr, playListDetail.tracks);
    // console.log(playListDetail);
    return (
      <div className='songList'>
        <div className='title'>
          <h3>歌曲列表</h3>
          <p>{arr.length}首歌</p>
          <span>
            播放: <strong>{playListDetail.playCount}</strong> 次
          </span>
        </div>

        <table className='m-table'>
          <thead>
            <tr>
              <th style={{ flex: 1, borderLeft: 0 }}></th>
              <th style={{ flex: 5 }}>标题</th>
              <th style={{ flex: 2 }}>时长</th>
              <th style={{ flex: 3 }}>歌手</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => {
              if (index < 3) {
                return (
                  <tr
                    key={item.id}
                    className={(index + 1) % 2 === 0 ? "odd" : ""}
                    style={{ height: 70 }}
                  >
                    <td style={{ flex: 1 }}>
                      {index + 1}
                      {/* <RankCount rank={item.rank} lastRank={item.lastRank} /> */}
                    </td>
                    <td style={{ flex: 5 }} className='songName'>
                      <div className='topImg'>
                        <Link style={{ border: 0 }} to={`song?id=${item.id}`}>
                          <img
                            src={item.al.picUrl + "?param=50y50&quality=100"}
                            alt=''
                          />
                        </Link>
                      </div>
                      <span
                        className='playIcon'
                        onClick={() => console.log("播放")}
                      ></span>
                      <p style={{maxWidth: 200}}>
                        <Link to={`song?id=${item.id}`}>{item.name}</Link>
                        <span className='alia'>{item.alia}</span>
                      </p>
                    </td>
                    <td style={{ flex: 2 }}>{timestamp(item.dt, ":")}</td>
                    <td style={{ flex: 3 }}> {singerName(item.ar)} </td>
                  </tr>
                );
              } else {
                return (
                  <tr
                    key={item.id}
                    className={(index + 1) % 2 === 0 ? "odd" : ""}
                    style={{ height: 30 }}
                  >
                    <td style={{ flex: 1 }}>
                      {index + 1}
                      {/* <RankCount rank={item.rank} lastRank={item.lastRank} /> */}
                    </td>
                    <td style={{ flex: 5 }} className='songName'>
                      <div
                        className='playIcon'
                        onClick={() => console.log("播放")}
                      ></div>
                      <p>
                        <Link to={`song?id=${item.id}`}>{item.name}</Link>
                        <span className='alia'>{item.alia}</span>
                      </p>
                    </td>
                    <td style={{ flex: 2 }}>{timestamp(item.dt,':')}</td>
                    <td style={{ flex: 3 }}> {singerName(item.ar)} </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  };
  // 列表歌手名处理
  const singerName = (item) => {
    if (item.length > 1) {
      let toSinger = item.map((items, index) => {
        return (
          <span key={index}>
            <Link to={`artist?id=${items.id}`}>{items.name}</Link>
            {item.length - 1 === index ? null : "/"}
          </span>
        );
      });
      return toSinger;
    } else {
      return <Link to={`artist?id=${item[0].id}`}>{item[0].name}</Link>;
    }
  };

  return (
    <div className='topList m_wrap'>
      <div className='leftDiv'>
        <h2>云音乐特色榜</h2>
        <ul>
          {leaderBoardList.length
            ? leaderBoardList.map((item) => {
                return (
                  <div key={item.id}>
                    <li
                      className={
                        Number(props.location.search.slice(4) || 19723756) === item.id
                          ? "bgc"
                          : null
                      }
                      onClick={() => {
                        setSelect(item.id);
                        getPlayLisDetailDispatch(item.id);
                        setUpdateTimeName(item.updateFrequency);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <Link to={`/discover/toplist?id=${item.id}`}>
                        <img src={item.coverImgUrl + "?param=40y40"} alt='' />
                        <div className='leftTopName'>
                          <span style={{ color: "black" }}>{item.name}</span>
                          <span style={{ color: "#666" }}>
                            {item.updateFrequency}
                          </span>
                        </div>
                      </Link>
                    </li>
                    {item.name === "云音乐热歌榜" ? (
                      <h2>云音乐特色榜</h2>
                    ) : null}
                  </div>
                );
              })
            : null}
        </ul>
      </div>
      {/* ------------------------- */}
      <div className='rightDiv'>
        {/* 右侧榜顶部 */}
        <div className='synopsis'>
          <div className='leftSynopsis'>
            <img src={playListDetail.coverImgUrl + "?param=150y150"} alt='' />
            <span className='mark'></span>
          </div>
          <div className='rightSynopsis'>
            <h2>{playListDetail.name}</h2>
            <div className='updateTime'>
              <span className='icon'></span>
              最近更新：
              <span>{timestamp(playListDetail.updateTime, "date")}</span>
              <span style={{ marginLeft: 10, color: "#999" }}>
                ({updateTimeName})
              </span>
            </div>
            <div>{/* 播放收藏 */}</div>
          </div>
        </div>
        {/* 右侧歌曲列表 */}
        {songList()}
      </div>
    </div>
  );
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return {
    leaderBoardList: state.toplist.leaderBoardList,
    playListDetail: state.toplist.playListDetail,
  };
};
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getLeaderboardDispatch() {
      dispatch(actionType.getLeaderboardList());
    },

    getPlayLisDetailDispatch(id) {
      dispatch(actionType.getPlayLisDetailList(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Toplist);
